const getFilePath = (url, params) => {
    return `http://localhost:8080/${url}/#${params}`;
};

export const fetchArticle = async (url, params = {}) => {
    try {
        const res = await fetch(getFilePath(url, params));
        console.log('res', res);
        return await res.text();
    } catch (error) {
        console.log(error);
    }
};

export const getPathMenuName = () => {
    return window.location.pathname.slice(1);
}
