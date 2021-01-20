var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from "react";
import styled from "styled-components";
import { prefix } from "../../../../DevTools";
export var Container = styled.header.attrs(function (_a) {
    var index = _a.index;
    return ({
        "data-testid": prefix + "_tileHeader" + index,
    });
})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  overflow: hidden;\n  transition: all 0.3s ease-in-out;\n\n  background-color: ", ";\n\n  display: flex;\n  align-items: center;\n\n  padding: 0 20px;\n\n  height: 50px;\n\n  cursor: pointer;\n"], ["\n  overflow: hidden;\n  transition: all 0.3s ease-in-out;\n\n  background-color: ", ";\n\n  display: flex;\n  align-items: center;\n\n  padding: 0 20px;\n\n  height: 50px;\n\n  cursor: pointer;\n"])), function (_a) {
    var open = _a.open;
    return (!open ? "#00000044" : "#00000088");
});
export var Title = styled.h1.attrs(function (_a) {
    var index = _a.index;
    return ({
        "data-testid": prefix + "_tileHeaderTitle" + index,
    });
})(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin: 0;\n"], ["\n  margin: 0;\n"])));
export var Code = function (props) { return (React.createElement("div", __assign({}, props, { style: { margin: "0 15px 0px 0px", fontSize: "2em" } }))); };
var templateObject_1, templateObject_2;
//# sourceMappingURL=index.js.map