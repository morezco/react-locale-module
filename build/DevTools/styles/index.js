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
import { Globe } from "@styled-icons/octicons/Globe";
import { Pin as PinIcon } from "@styled-icons/entypo/Pin";
import "../assets/fonts";
import { prefix } from "../DevTools";
export var Container = styled.main.attrs(function () { return ({
    "data-testid": "" + prefix
}); })(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: fixed;\n  right: 0;\n\n  overflow: hidden;\n\n  &,\n  * {\n    font-family: Nanum Gothic;\n    color: white;\n  }\n\n  ", "\n\n  transition: all 0.3s ease-in-out;\n\n  width: 300px;\n\n  background-color: #00000044;\n"], ["\n  position: fixed;\n  right: 0;\n\n  overflow: hidden;\n\n  &,\n  * {\n    font-family: Nanum Gothic;\n    color: white;\n  }\n\n  ",
    "\n\n  transition: all 0.3s ease-in-out;\n\n  width: 300px;\n\n  background-color: #00000044;\n"])), function (_a) {
    var open = _a.open;
    return "\n    top: " + (open ? "0" : "80px") + ";\n    height: " + (open ? "100vh" : "80px") + ";\n  ";
});
export var Header = styled.header.attrs(function (props) { return ({
    "data-testid": prefix + "_header"
}); })(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n\n  ", "\n\n  * {\n    cursor: pointer;\n  }\n\n  height: 80px;\n"], ["\n  display: flex;\n  align-items: center;\n\n  ",
    "\n\n  * {\n    cursor: pointer;\n  }\n\n  height: 80px;\n"])), function (_a) {
    var open = _a.open;
    return (open && "justify-content: space-around;") || "* { margin: 0px 10px; }";
});
export var Title = styled.h1.attrs(function () { return ({
    "data-testid": prefix + "_title"
}); })(templateObject_3 || (templateObject_3 = __makeTemplateObject([""], [""])));
export var Logo = function () { return (React.createElement(Globe, { "data-testid": prefix + "_logo", style: {
        color: "white"
    }, size: 48 })); };
export var Pin = function (props) { return (React.createElement(PinIcon, __assign({ "data-testid": prefix + "_pin", style: { color: "white" }, size: 32 }, props))); };
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=index.js.map