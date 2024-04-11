import { SearchOutlined } from '@ant-design/icons';
import { Input, Modal } from 'antd';
import { useEffect, useRef } from 'react';

const SearchModal = ({ isModalOpen, setIsModalOpen }) => {
  const inputRef = useRef(null);

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
        <div className="h-300px">
          <Input size="large" placeholder="请输入搜索内容" ref={inputRef} prefix={<SearchOutlined />} />
        </div>
      </Modal>
    </>
  );
};

export default SearchModal;
