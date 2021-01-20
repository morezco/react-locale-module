import React, { useMemo } from "react";
import { Container } from "./styles";
import Tile from "./Tile/Tile";
export default function List(_a) {
    var language = _a.language, languages = _a.languages, contexts = _a.contexts, setCode = _a.setCode;
    var Listable = useMemo(function () {
        return Object.entries(contexts).map(function (_a, index) {
            var omg = _a[0], dictionary = _a[1];
            return (React.createElement(Tile, { key: index, title: omg, index: index, data: dictionary, language: language, languages: languages, setCode: setCode }));
        });
    }, [language, languages, contexts, setCode]);
    return React.createElement(Container, null, Listable);
}
//# sourceMappingURL=List.js.map