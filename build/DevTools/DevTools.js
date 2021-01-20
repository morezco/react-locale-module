var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import React, { useState, createContext } from "react";
import { useLocale } from "../index";
import { Container, Header, Title, Logo, Pin, Code } from "./styles";
import List from "./List/List";
export var prefix = "locale_devTools";
export var LocaleDevTools = createContext({
    openTile: function () { },
    closeTile: function () { },
    tiles: [],
    change: function () { return function () { }; },
});
export function DevTools() {
    var _a = useLocale("DevTools", { pt: {} }), languages = _a.languages, language = _a.language, contexts = _a.contexts, switchl = _a.switchl, devTools = _a.devTools, change = _a.change, toggleDevTools = _a.toggleDevTools, setDevToolsCode = _a.setDevToolsCode, code = _a.code;
    var _b = useState([]), tiles = _b[0], setTiles = _b[1];
    var openTile = function (name) { return setTiles(__spreadArrays(tiles, [name])); };
    var closeTile = function (name) {
        return setTiles(tiles.filter(function (x) { return x !== name; }));
    };
    return (React.createElement(LocaleDevTools.Provider, { value: {
            tiles: tiles,
            openTile: openTile,
            closeTile: closeTile,
            change: change,
        } },
        React.createElement(Container, { open: devTools },
            React.createElement("div", { onDoubleClick: function (e) { return e.stopPropagation(); } },
                React.createElement(Header, { open: devTools, onClick: switchl, onDoubleClick: toggleDevTools },
                    React.createElement(Logo, null),
                    React.createElement(Title, null, language),
                    devTools && React.createElement(Pin, { onClick: toggleDevTools })),
                React.createElement(List, { languages: languages, language: language, contexts: contexts, setCode: setDevToolsCode }),
                code && React.createElement(Code, { onClick: function () { return setDevToolsCode(""); } }, code)))));
}
//# sourceMappingURL=DevTools.js.map