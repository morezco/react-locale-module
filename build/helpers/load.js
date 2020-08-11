export function Load(key, fallback) {
    var data = localStorage.getItem(key);
    try {
        var attempt = JSON.parse(data);
        return attempt === null ? fallback : attempt;
    }
    catch (oof) {
        return data;
    }
}
//# sourceMappingURL=load.js.map