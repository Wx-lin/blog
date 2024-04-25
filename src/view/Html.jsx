import ArticleTable from '@/components/ArticleTable/index.jsx';
import React from 'react';

export default function Html({ data }) {
  return <ArticleTable List={data} />;
}
