import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { fetchArticle } from '@/utils/index.js';
import { ArticleColumns } from '@/config/index.jsx';

export default function JavaScript() {
  const [List, setList] = useState([]);

  useEffect(() => {
    fetchData();
  }, [setList]);

  const fetchData = async () => {
    const text = await fetchArticle('/store/data.json');
    const { js } = JSON.parse(text);
    js.forEach((v) => (v.category = 'js'));
    setList(js);
  };

  return (
    <>
      <Table dataSource={List} columns={ArticleColumns} pagination={{ pageSize: 15 }} />
    </>
  );
}
