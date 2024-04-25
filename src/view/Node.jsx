import ArticleTable from '@/components/ArticleTable/index.jsx';
import React from 'react';

export default function Node({ data }) {
    return <ArticleTable List={data} />;
}
