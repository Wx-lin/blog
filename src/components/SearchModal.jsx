import { decoderArray, fetchArticle } from '@/utils/index.jsx';
import { SearchOutlined } from '@ant-design/icons';
import { Input, List, Modal, Space, Tag, Typography, AutoComplete } from 'antd';
import { debounce } from 'lodash';
import { useEffect, useRef, useState } from 'react';

const { Text } = Typography;

const SearchModal = ({ data, isModalOpen, setIsModalOpen }) => {
  const inputRef = useRef(null);
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

  const searchArticle = (value) => {
    let result = [];

    Object.entries(JSON.parse(allData)).forEach(([k, v]) => {
      const [category, title] = window.atob(k).split('/');
      const content = decoderArray(v);

      if (title.includes(value) || content.includes(value)) {
        result.push({
          title,
          category,
          content,
          value,
        });
      }
    });

    result = result.map((v) => {
      return {
        label: renderItem(v),
        value: v.title,
      };
    });

    setSearchResult(result);
  };

  const debounceSearch = debounce(searchArticle, 500);

  const handleSearch = (value) => {
    if (!value) {
      setSearchResult([]);
      return;
    }

    debounceSearch(value);
  };

  useEffect(() => {
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

  const renderItem = (item) => {
    const parts = item.content.split(new RegExp(`(${item.value})`, 'gi'));

    return (
      <List>
        <List.Item>
          <Space align="start" size={20}>
            <Tag color="success">{item.title}</Tag>
            <Text>
              {parts.map((part, index) => {
                if (part === item.value) {
                  return (
                    <Text type="danger" strong key={index}>
                      {part}
                    </Text>
                  );
                }

                return part;
              })}
            </Text>
          </Space>
        </List.Item>
      </List>
    );
  };

  return (
    <>
      <Modal width={700} closeIcon={false} footer={null} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Space direction="vertical" size={20} >
          <AutoComplete
            style={{
              width: 670,
            }}
            ref={inputRef}
            options={searchResult}
            onSearch={handleSearch}>
            <Input size="large" placeholder="请输入搜索内容" />
          </AutoComplete>
        </Space>
      </Modal>
    </>
  );
};

export default SearchModal;
