import { Typography } from 'antd';
import React, { useEffect, useState } from 'react';

const { Link } = Typography;

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
        let a = document.createElement('a');
        a.setAttribute('id', '#' + eid);
        a.setAttribute('class', 'anchor-title');
        a.setAttribute('href', '#' + eid);
        a.innerText = ' ';
        let title = {
          type: v.nodeName,
          id: eid,
          name: v.innerText,
        };
        titles.push(title);
        v.appendChild(a);
        eid++;
      }
    });

    return titles;
  };

  useEffect(() => {
    setTitles(addAnchor());
  }, []);

  const handleClickFun = () => {};

  return (
    <div>
      <div>
        {titles.map((t) => (
          <Link href={'#' + t.id} title={t.name} className={'title-' + t.type} key={t.id} />
        ))}
      </div>
    </div>
  );
}
