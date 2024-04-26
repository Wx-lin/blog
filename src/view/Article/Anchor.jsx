import { addAnchor } from '@/utils/index.js';
import { BarsOutlined } from '@ant-design/icons';
import { Anchor, Space } from 'antd';
import React, { useEffect, useState } from 'react';

export default function AnchorNav() {
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    setTitles(addAnchor());
  }, []);

  const handleAnchorClick = (e, link) => {
    e.preventDefault()

    if (link.href) {
      const element = document.getElementById(link.href);
      element?.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
  }

  return (
    <Space direction="vertical" size="large">
      <div className="flex gap-5px">
        <BarsOutlined style={{ fontSize: 16 }} />
        <div>目录</div>
      </div>
      <Anchor getCurrentAnchor="#markdown" items={titles} onClick={handleAnchorClick} />
    </Space>
  );
}
