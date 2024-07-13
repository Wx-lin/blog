import { decoderArray, fetchArticle } from '@/utils/index.jsx';
import { SearchOutlined } from '@ant-design/icons';
import { Input, List, Modal, Space, Tag } from 'antd';
import { useEffect, useRef, useState } from 'react';

const SearchModal = ({ data, isModalOpen, setIsModalOpen }) => {
  const inputRef = useRef(null);
  const [keyWord, setKeyWord] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  const [allData, setAllData] = useState(null);

  const fetchAllData = async () => {
    const res = await fetchArticle('/store/all.json');
    setAllData(res);
  };

  useEffect(() => {
    fetchAllData();
  });

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleKeyDown = (event) => {
    if (event.metaKey && event.key === 'k') {
      setIsModalOpen(!isModalOpen);
    }
  };

  const handleSearchChange = (event) => {
    const { value } = event.target;
    const result = [];

    setKeyWord(value);

    if (!value) {
      setSearchResult([]);
      return;
    }

    Object.entries(JSON.parse(allData)).forEach(([k, v]) => {
      const [category, title] = window.atob(k).split('/');
      const content = decoderArray(v);

      if ([category, title].includes(value) || content.includes(value)) {
        result.push({
          title,
          category,
          content,
        });
      }
    });

    setSearchResult(result);
  };

  useEffect(() => {
    setKeyWord('');
    setSearchResult([]);

    document.addEventListener('keydown', handleKeyDown);

    if (isModalOpen) {
      setTimeout(() => {
        inputRef.current.focus({
          cursor: 'start',
        });
      }, 0);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <>
      <Modal width={700} closeIcon={false} footer={null} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Space direction="vertical" size={20} className="h-300px w-670px overflow-y-auto">
          <Input
            size="large"
            placeholder="请输入搜索内容"
            ref={inputRef}
            value={keyWord}
            prefix={<SearchOutlined />}
            onChange={handleSearchChange}
          />
          <List
            header="搜索结果"
            bordered
            dataSource={searchResult}
            renderItem={(item) => (
              <List.Item>
                <Space align="start" size={20}>
                  <Tag color="success">{item.title}</Tag>
                  {item.content}
                </Space>
              </List.Item>
            )}
          />
        </Space>
      </Modal>
    </>
  );
};

export default SearchModal;
