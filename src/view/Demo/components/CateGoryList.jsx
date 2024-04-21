import { CateGoryTable } from '@/config/TestData.jsx';
import { Button, Input, Modal, Space, Table } from 'antd';
import { useState } from 'react';
import { CateGoryColumn } from './config.jsx';

const AddCateGoryModal = ({ isModalOpen, setIsModalOpen }) => {
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal title="添加分类" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
};

const CateGoryList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Space className="pt-20px" direction="vertical" size={20}>
        <Space size={10}>
          <Button className="p-0" type="link" onClick={() => setIsModalOpen(true)}>
            +添加分类
          </Button>
          <Input placeholder="请输入内容" />
          <Button type="primary">查询</Button>
        </Space>
        <Table className="w-1000px" bordered pagination={false} columns={CateGoryColumn} dataSource={CateGoryTable} />
        <AddCateGoryModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      </Space>
    </>
  );
};

export default CateGoryList;
