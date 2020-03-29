module.exports = (cookieString) => {
    if(!cookieString) return {};
    const arr = cookieString.split(";");
    const cookie = arr.reduce((pre, item) => {
        const [key, value] = item.split("=");
        pre[key.trim()] = value.trim();
        return pre;
    }, {})
    return cookie;
};