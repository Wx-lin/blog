import { Modal, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useState } from "react";

const SearchModal = ({ isModalOpen, setIsModalOpen }) => {
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Modal
        width={700}
        closeIcon={false}
        footer={null}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="h-300px">
          <Input
            size="large"
            prefix={<SearchOutlined />}
            placeholder="请输入搜索内容"
          />
        </div>
      </Modal>
    </>
  );
};

export default SearchModal;
