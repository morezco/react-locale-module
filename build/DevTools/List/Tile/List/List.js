import React from "react";
import { Container } from "./styles";
import Text from "./Text/Text";
export default function List(_a) {
    var context = _a.context, language = _a.language, languages = _a.languages, children = _a.children;
    return (React.createElement(Container, { onClick: function (e) { return e.stopPropagation(); } }, Object.entries(children).map(function (_a, index) {
        var original = _a[0], translation = _a[1];
        return (React.createElement(Text, { key: index, original: original, context: context, language: language, languages: languages }, translation.value));
    })));
}
//# sourceMappingURL=List.js.map