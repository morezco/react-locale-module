import React, { useMemo } from "react";
import { Container } from "./styles";
import Tile from "./Tile/Tile";
export default function List(_a) {
    var language = _a.language, languages = _a.languages, contexts = _a.contexts;
    var Listable = useMemo(function () {
        return Object.entries(contexts).map(function (_a, index) {
            var name = _a[0], dictionary = _a[1];
            return (React.createElement(Tile, { key: index, title: name, index: index, data: dictionary, language: language, languages: languages }));
        });
    }, [language, contexts]);
    return React.createElement(Container, null, Listable);
}
//# sourceMappingURL=List.js.map