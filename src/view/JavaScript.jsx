import React, { useEffect, useState } from 'react';
import { fetchArticle } from '@/utils/index.js';
import ArticleTable from '@/components/ArticleTable/index.jsx';

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

  return <ArticleTable List={List} />;
}