import { CateGoryTable } from '@/config/TestData.jsx';
import { Button, Input, Modal, Space, Table } from 'antd';
import { useState } from 'react';
const { Column } = Table;

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
        <Table className="w-1000px" bordered pagination={false} dataSource={CateGoryTable}>
          <Column title="First Name" dataIndex="firstName" key="firstName" />
          <Column title="Age" dataIndex="age" key="age" />
          <Column title="Address" dataIndex="address" key="address" />
          <Column
            title="Action"
            key="action"
            render={() => (
              <Space size="middle">
                <Button size="small" type="primary" danger>
                  删除
                </Button>
              </Space>
            )}
          />
        </Table>
        <AddCateGoryModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      </Space>
    </>
  );
};

export default CateGoryList;
