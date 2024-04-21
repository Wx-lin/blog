import { Button, Space } from 'antd';

export const CateGoryColumn = [
  {
    title: 'firstName',
    dataIndex: 'firstName',
    key: 'firstName',
  },
  {
    title: 'age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'NFirst Namame',
    dataIndex: 'naNFirst Namameme',
    key: 'firstName',
  },
  {
    title: 'Address',
    dataIndex: 'Address',
    key: 'Address',
  },
  {
    title: 'Action',
    dataIndex: 'Action',
    key: 'Action',
    render: () => {
      return (
        <Space size="middle">
          <Button size="small" type="primary" danger>
            删除
          </Button>
        </Space>
      );
    },
  },
];
