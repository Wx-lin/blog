import { fetchArticle } from '@/utils/index.js';
import React, { useEffect, useState } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Anchor from './Anchor.jsx';

import { useLocation } from 'react-router-dom';

export default function index() {
  const {
    state: { path },
  } = useLocation();

  const [article, setArticle] = useState(null);

  const fetchData = async () => {
    const data = await fetchArticle(`/article${path}.md`);
    setArticle(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>
        <div className="document-page wrapper">
          <main id="markdown" className="content container markdown-body flex">
            {article && <div className="w-4/5 md">{<Markdown children={article} remarkPlugins={[remarkGfm]} />}</div>}
            {article && <Anchor />}
          </main>
        </div>
      </div>
    </>
  );
}
