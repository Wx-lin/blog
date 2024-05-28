/*
 * @Author: 王薪林 10655211+wang-xinlinlin@user.noreply.gitee.com
 * @Date: 2024-05-24 09:45:34
 * @LastEditors: 王薪林 10655211+wang-xinlinlin@user.noreply.gitee.com
 * @LastEditTime: 2024-05-24 15:10:46
 * @FilePath: /react-blog/react/src/utils/index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Ellipsis from '../components/Ellipsis';
const getFilePath = (url, params) => {
  return `http://localhost:8080/${url}/#${params}`;
};

export const fetchArticle = async (url, params = {}) => {
  try {
    const res = await fetch(getFilePath(url, params));
    return await res.text();
  } catch (error) {
    console.log(error);
  }
};

export const getPathMenuName = () => {
  return window.location.pathname.slice(1);
};

const formatTitles = (element) => {
  let titles = [];
  let currentH1 = null;
  let eid = 0;

  const isHeading = (nodeName) => ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'].includes(nodeName);

  element.forEach((v) => {
    if (!isHeading(v.nodeName)) {
      return;
    }

    v.id = eid;
    const titleObj = {
      href: `${eid}`,
      title: <Ellipsis title={v.innerText} />,
      key: eid,
      children: [],
    };

    if (v.nodeName === 'H1') {
      currentH1 = titleObj;
      titles.push(titleObj);
    } else if (currentH1) {
      currentH1.children.push(titleObj);
    }

    eid++;
  });
  return titles;
};

export const addAnchor = () => {
  const ele = document.getElementsByClassName('markdown-body')[0] || {};
  const node = ele?.children[0];
  const dom = [...node.children];
  return formatTitles(dom);
};