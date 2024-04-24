import ArticleTable from '@/components/ArticleTable/index.jsx';
import { fetchArticle } from '@/utils/index.js';
import React, { useEffect, useState } from 'react';

export default function Css() {
  const [List, setList] = useState([]);

  useEffect(() => {
    fetchData();
  }, [setList]);

  const fetchData = async () => {
    const text = await fetchArticle('/store/data.json');
    const { css } = JSON.parse(text);
    css.forEach((v) => (v.category = 'css'));
    setList(css);
  };

  return <ArticleTable List={List} />;
}
