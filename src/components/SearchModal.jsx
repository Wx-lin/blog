import { SearchOutlined } from '@ant-design/icons';
import { Input, Modal } from 'antd';
import { useEffect } from 'react';

const SearchModal = ({ isModalOpen, setIsModalOpen }) => {
  console.log('isModalOpenaa', isModalOpen);
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.metaKey && event.key === 'k') {
        setIsModalOpen(!isModalOpen);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });

  return (
    <>
      <Modal width={700} closeIcon={false} footer={null} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <div className="h-300px">
          <Input size="large" prefix={<SearchOutlined />} placeholder="请输入搜索内容" />
        </div>
      </Modal>
    </>
  );
};

export default SearchModal;
