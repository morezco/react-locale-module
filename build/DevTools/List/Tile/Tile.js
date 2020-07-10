import React, { useContext, useCallback, useMemo } from "react";
import { LocaleDevTools } from "../../DevTools";
import { Container } from "./styles";
import Header from "./Header/Header";
import List from "./List/List";
export default function Tile(_a) {
    var title = _a.title, language = _a.language, languages = _a.languages, setCode = _a.setCode, data = _a.data, index = _a.index;
    var _b = useContext(LocaleDevTools), tiles = _b.tiles, openTile = _b.openTile, closeTile = _b.closeTile;
    var open = useMemo(function () { return tiles.includes(title); }, [tiles, title]);
    var toggle = useCallback(function () { return (!open ? openTile(title) : closeTile(title)); }, [title, open, closeTile, openTile]);
    return (React.createElement(Container, { index: index, onClick: toggle, open: open },
        React.createElement(Header, { index: index, open: open, data: data, setCode: setCode }, title),
        React.createElement(List, { context: title, languages: languages, language: language }, data[language])));
}
//# sourceMappingURL=Tile.js.map