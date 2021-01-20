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
import "../assets/fonts";
import { prefix } from "../DevTools";
export var Container = styled.main.attrs(function () { return ({
    "data-testid": "" + prefix,
}); })(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: fixed;\n  right: 0;\n\n  overflow: hidden;\n\n  &,\n  * {\n    font-family: Nanum Gothic;\n    color: white;\n  }\n\n  > div {\n    position: relative;\n  }\n\n  ", "\n\n  transition: all 0.3s ease-in-out;\n\n  width: 300px;\n\n  background-color: #00000044;\n\n  z-index: 100000000;\n"], ["\n  position: fixed;\n  right: 0;\n\n  overflow: hidden;\n\n  &,\n  * {\n    font-family: Nanum Gothic;\n    color: white;\n  }\n\n  > div {\n    position: relative;\n  }\n\n  ",
    "\n\n  transition: all 0.3s ease-in-out;\n\n  width: 300px;\n\n  background-color: #00000044;\n\n  z-index: 100000000;\n"])), function (_a) {
    var open = _a.open;
    return "\n    top: " + (open ? "0" : "80px") + ";\n    height: " + (open ? "100vh" : "80px") + ";\n  ";
});
export var Header = styled.header.attrs(function (props) { return ({
    "data-testid": prefix + "_header",
}); })(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n\n  ", "\n\n  * {\n    cursor: pointer;\n  }\n\n  height: 80px;\n"], ["\n  display: flex;\n  align-items: center;\n\n  ",
    "\n\n  * {\n    cursor: pointer;\n  }\n\n  height: 80px;\n"])), function (_a) {
    var open = _a.open;
    return (open && "justify-content: space-around;") || "* { margin: 0px 10px; }";
});
export var Title = styled.h1.attrs(function () { return ({
    "data-testid": prefix + "_title",
}); })(templateObject_3 || (templateObject_3 = __makeTemplateObject([""], [""])));
export var Logo = function () { return (React.createElement("div", { "data-testid": prefix + "_logo", style: {
        color: "white",
    } })); };
export var Pin = function (props) { return (React.createElement("div", __assign({ "data-testid": prefix + "_pin", style: { color: "white" } }, props))); };
export var Code = styled.pre(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  min-width: 95%;\n  min-height: 100vh;\n  padding: 0 5px;\n\n  background-color: #000000aa;\n  color: white;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  font-size: 0.75em;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  min-width: 95%;\n  min-height: 100vh;\n  padding: 0 5px;\n\n  background-color: #000000aa;\n  color: white;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  font-size: 0.75em;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=index.js.map