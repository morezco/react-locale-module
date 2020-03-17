import React from "react";
import { copy } from "../../../../helpers";
import { Container, Title, Code } from "./styles";
export default function Header(_a) {
    var children = _a.children, data = _a.data, open = _a.open, index = _a.index;
    return (React.createElement(Container, { index: index, open: open },
        React.createElement(Code, { onClick: function () { return copy(JSON.stringify(data)); } }),
        React.createElement(Title, { index: index }, children)));
}
//# sourceMappingURL=Header.js.map