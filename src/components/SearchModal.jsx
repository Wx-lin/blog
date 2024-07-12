import { SearchOutlined } from '@ant-design/icons';
import { Input, List, Modal, Space, Typography } from 'antd';
import { useEffect, useRef, useState } from 'react';

const SearchModal = ({ data, isModalOpen, setIsModalOpen }) => {
  const inputRef = useRef(null);
  const [keyWord, setKeyWord] = useState('');
  const [searchResult, setSearchResult] = useState([]);

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
    const searchData = Object.values(data).flat();

    searchData.forEach((v) => {
      if (v.name.includes(value)) {
        setSearchResult([...searchResult, v]);
      }
    });

    setKeyWord(value);
  };

  useEffect(() => {
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
            header={<div>搜索结果</div>}
            bordered
            dataSource={searchResult}
            renderItem={(item) => (
              <List.Item>
                <Typography.Text mark>[{keyWord}]</Typography.Text> {item.name}
              </List.Item>
            )}
          />
        </Space>
      </Modal>
    </>
  );
};

export default SearchModal;
