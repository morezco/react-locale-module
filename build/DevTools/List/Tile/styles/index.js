var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
import { prefix } from "../../../DevTools";
export var Container = styled.div.attrs(function (_a) {
    var index = _a.index;
    return ({
        "data-testid": prefix + "_tile" + index
    });
})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  max-height: ", ";\n\n  overflow: hidden;\n  transition: all 0.3s ease-in-out;\n\n  font-size: 0.8em;\n"], ["\n  max-height: ", ";\n\n  overflow: hidden;\n  transition: all 0.3s ease-in-out;\n\n  font-size: 0.8em;\n"])), function (_a) {
    var open = _a.open;
    return (open ? "600px" : "50px");
});
var templateObject_1;
//# sourceMappingURL=index.js.map