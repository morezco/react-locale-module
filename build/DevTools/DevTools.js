import React from "react";
import { useLocale } from "../index";
import { Container, Header, Title, Logo, Pin } from "./styles";
import List from "./List/List";
export var prefix = "locale_devTools";
export function DevTools() {
    var _a = useLocale("DevTools", { pt: {} }), language = _a.language, contexts = _a.contexts, switchl = _a.switchl, devTools = _a.devTools, toggleDevTools = _a.toggleDevTools;
    return (React.createElement(Container, { onDoubleClick: toggleDevTools, open: devTools },
        React.createElement(Header, { open: devTools, onClick: function () { return !devTools && switchl(); } },
            React.createElement(Logo, null),
            React.createElement(Title, null, language),
            devTools && React.createElement(Pin, { onClick: toggleDevTools })),
        React.createElement(List, { language: language, contexts: contexts })));
}
//# sourceMappingURL=DevTools.js.map