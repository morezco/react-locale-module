import React from "react";
import { Container, Overlay, Content } from "./styles";
export default function Text(_a) {
    var editing = _a.editing, children = _a.children;
    return (React.createElement(Container, null,
        editing && React.createElement(Overlay, null),
        React.createElement(Content, { className: String(editing && "highlightedTranslation"), editing: editing }, children)));
}
//# sourceMappingURL=Text.js.map