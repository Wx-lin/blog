import { fetchArticle } from '@/utils/index.jsx';
import React, { useEffect, useState } from 'react';
import Markdown from 'react-markdown';
import { useLocation } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coyWithoutShadows, darcula, vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';
import Anchor from './Anchor.jsx';

const themes = {
  vscDarkPlus,
  coyWithoutShadows,
  darcula,
};

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
        <div className="document-page wrapper flex gap-20px">
          <main id="markdown" className="content container markdown-body">
            {article && (
              <div className="w-4/5 md">
                {
                  <Markdown
                    components={{
                      code(props) {
                        const { children, className, node, ...rest } = props;
                        const match = /language-(\w+)/.exec(className || '');
                        return (
                          <SyntaxHighlighter
                            {...rest}
                            children={String(children).replace(/\n$/, '')}
                            showLineNumbers
                            language={match[1]}
                            style={themes.vscDarkPlus}
                          />
                        );
                      },
                    }}
                    children={article}
                    remarkPlugins={[remarkGfm]}
                  />
                }
              </div>
            )}
          </main>
          <div className=" w-150px">{article && <Anchor />}</div>
        </div>
      </div>
    </>
  );
}
