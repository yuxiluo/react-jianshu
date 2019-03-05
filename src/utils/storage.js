// 本地永久存储
const storage = {
    setStorage: function(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },
    getStorage: function(key) {
        return JSON.parse(localStorage.getItem(key));
    },
    removeStorage: function(key) {
        // 移除指定数据
        localStorage.removeItem(key);
    },
    clearStorage: function() {
        // 移除所有
        localStorage.clear(); 
    }
}

export default storage;