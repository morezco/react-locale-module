var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
export var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
export var Overlay = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1000000;\n\n  width: 100vw;\n  height: 100vh;\n\n  background-color: #00000077;\n"], ["\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1000000;\n\n  width: 100vw;\n  height: 100vh;\n\n  background-color: #00000077;\n"])));
export var Content = styled.span(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  transition: all 0.3s ease-in-out;\n\n  ", "\n"], ["\n  transition: all 0.3s ease-in-out;\n\n  ",
    "\n"])), function (_a) {
    var editing = _a.editing;
    return editing
        ? "\n        color: white;\n        position: relative;\n        border: 1px solid white;\n        z-index: 1000000000;\n    "
        : "";
});
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=styles.js.map