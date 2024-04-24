import { BarsOutlined } from '@ant-design/icons';
import { Anchor, Space } from 'antd';
import React, { useEffect, useState } from 'react';

export default function AnchorNav() {
  const [titles, setTitles] = useState([]);

  const addAnchor = () => {
    const ele = document.getElementsByClassName('markdown-body')[0] || {};
    const node = ele?.children[0];
    const dom = [...node.children];
    let eid = 0;
    let titles = [];
    dom?.forEach((v) => {
      if (['H1', 'H1', 'H3', 'H4', 'H5', 'H6'].includes(v.nodeName)) {
        v.id = eid;

        titles.push({
          href: `#${eid}`,
          title: v.innerText,
          key: eid,
        });

        eid++;
      }
    });

    return titles;
  };

  useEffect(() => {
    setTitles(addAnchor());
  }, []);

  return (
    <Space direction="vertical" size="large">
      <Space>
        <BarsOutlined style={{ fontSize: 16 }} />
        <span>目录</span>
      </Space>

      <Anchor getCurrentAnchor="#markdown" items={titles} onClick={(e) => e.preventDefault()} />
    </Space>
  );
}
