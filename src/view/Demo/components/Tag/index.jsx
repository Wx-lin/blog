import { getTreeList } from '@/api/demo/tag';
import { Space } from 'antd';
import React, { useEffect } from 'react';
import Page from './Page';
import Tree from './Tree';

export default function Tag() {
  useEffect(() => {
    console.log('useEffect called');
    onGetTreeList();
  }, []);

  const onGetTreeList = async () => {
    const res = await getTreeList();
  };

  return (
    <Space>
      <Tree />
      <Page />
    </Space>
  );
}
