import { addAnchor } from '@/utils/index.js';
import { BarsOutlined } from '@ant-design/icons';
import { Anchor, Space } from 'antd';
import React, { useEffect, useState } from 'react';

export default function AnchorNav() {
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    setTitles(addAnchor());
  }, []);

  return (
    <Space direction="vertical" size="large">
      <div className="flex gap-5px">
        <BarsOutlined style={{ fontSize: 16 }} />
        <div>目录</div>
      </div>

      <Anchor getCurrentAnchor="#markdown" items={titles} onClick={(e) => {
        e.preventDefault()
        console.log(titles);
      }} />
    </Space>
  );
}
