/*
 * @Author: 王薪林 10655211+wang-xinlinlin@user.noreply.gitee.com
 * @Date: 2024-04-22 11:59:54
 * @LastEditors: 王薪林 10655211+wang-xinlinlin@user.noreply.gitee.com
 * @LastEditTime: 2024-04-26 10:36:02
 * @FilePath: /react-blog/react/src/utils/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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
}


const addTitle = (element) => {
    let titles = []
    let currentH1 = null
    let eid = 0

    element.forEach((v) => {
        if (!['H1', 'H2', 'H3', 'H4', 'H5', 'H6'].includes(v.nodeName)) {
            return
        }
        v.id = eid;

        const titleObj = {
            href: `${eid}`,
            title: `${v.innerText.length > 20 ? [v.innerText.slice(0, 20), '...'].join('') : v.innerText}`,
            key: eid,
            children: []
        }

        if (v.nodeName === 'H1') {
            currentH1 = titleObj;
            titles.push(titleObj);
        } else if (currentH1) {
            currentH1.children.push(titleObj)
        }

        eid++
    });
    return titles
}

// 格式化目录数据
export const addAnchor = () => {
    const ele = document.getElementsByClassName('markdown-body')[0] || {};
    const node = ele?.children[0];
    const dom = [...node.children];
    return addTitle(dom)
};

