var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from "react";
import styled from "styled-components";
export var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  max-height: ", ";\n\n  height: auto;\n\n  overflow: hidden;\n  transition: all 0.3s ease-in-out;\n\n  font-size: 0.8em;\n\n  background-color: #00000066;\n\n  border-bottom: 2px solid #00000022;\n\n  &,\n  * {\n    transition: all 0.3s ease-in-out;\n  }\n"], ["\n  max-height: ", ";\n\n  height: auto;\n\n  overflow: hidden;\n  transition: all 0.3s ease-in-out;\n\n  font-size: 0.8em;\n\n  background-color: #00000066;\n\n  border-bottom: 2px solid #00000022;\n\n  &,\n  * {\n    transition: all 0.3s ease-in-out;\n  }\n"])), function (_a) {
    var open = _a.open;
    return (open ? "100vh" : "50px");
});
export var Header = styled.header(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n\n  cursor: pointer;\n\n  height: 50px;\n\n  font: 0.8em bold Helvetica;\n\n  padding: 0 ", ";\n\n  span {\n    opacity: 0.75;\n    margin: 0px 10px 0px 0px;\n  }\n\n  position: sticky;\n  top: 0px;\n"], ["\n  display: flex;\n  align-items: center;\n\n  cursor: pointer;\n\n  height: 50px;\n\n  font: 0.8em bold Helvetica;\n\n  padding: 0 ", ";\n\n  span {\n    opacity: 0.75;\n    margin: 0px 10px 0px 0px;\n  }\n\n  position: sticky;\n  top: 0px;\n"])), function (_a) {
    var open = _a.open;
    return (open ? "40px" : "10px");
});
export var Body = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  padding: 0 20px;\n\n  max-width: 300px;\n\n  overflow: hidden;\n\n  div {\n    display: flex;\n    justify-content: space-between;\n\n    padding: 0 20px;\n  }\n"], ["\n  padding: 0 20px;\n\n  max-width: 300px;\n\n  overflow: hidden;\n\n  div {\n    display: flex;\n    justify-content: space-between;\n\n    padding: 0 20px;\n  }\n"])));
export var Icon = function () { return React.createElement("div", null); };
export var Equal = function () { return React.createElement("div", null); };
export var Title = styled.h1(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  margin: 0 5px;\n\n  display: flex;\n"], ["\n  margin: 0 5px;\n\n  display: flex;\n"])));
export var Input = styled.input(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  background-color: #00000000;\n\n  font: 1em Nanum Gothic;\n\n  text-indent: 0.2em;\n\n  display: inline;\n\n  text-align: ", ";\n\n  outline: none;\n\n  border: none;\n"], ["\n  background-color: #00000000;\n\n  font: 1em Nanum Gothic;\n\n  text-indent: 0.2em;\n\n  display: inline;\n\n  text-align: ", ";\n\n  outline: none;\n\n  border: none;\n"])), function (_a) {
    var align = _a.align;
    return align || "left";
});
export var Subtitle = styled.h3(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  ", "\n\n  cursor: pointer;\n"], ["\n  ", "\n\n  cursor: pointer;\n"])), function (_a) {
    var selected = _a.selected;
    return selected && "*, & {color: #31C7FF;}";
});
export var Listing = styled.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var selected = _a.selected;
    return selected && "*, & {color: #31C7FF;}";
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
//# sourceMappingURL=index.js.map