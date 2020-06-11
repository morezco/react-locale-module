export var copy = function (str) {
    var el = document.createElement("textarea");
    el.value = JSON.stringify(str, null, 2);
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
};
//# sourceMappingURL=copy.js.map