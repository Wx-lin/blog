import Ellipsis from '../components/Ellipsis';

const DEV = 'http://localhost:8080';
const PRODUCTION = 'https://raw.githubusercontent.com/Wx-lin/blog-data/master';
const PATH = import.meta.env.MODE === 'development' ? DEV : PRODUCTION;

// 解析全部数据
export const decoderArray = (array) => {
  const decoder = new TextDecoder();
  const UTF8Array = new Uint8Array(array.join(',').split(','));

  return decoder.decode(UTF8Array);
};

// 获取接口地址
const getFilePath = (url, params) => `${PATH}${url}#${params}`;

// 获取数据
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
