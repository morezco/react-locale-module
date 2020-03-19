import React, { useMemo } from "react";
import { copy } from "../../../../helpers";
import { Container, Title, Code } from "./styles";
export default function Header(_a) {
    var children = _a.children, data = _a.data, open = _a.open, index = _a.index;
    var print = useMemo(function () {
        var res = {};
        Object.entries(data).forEach(function (_a) {
            var language = _a[0], dictionary = _a[1];
            res[language] = {};
            Object.entries(dictionary).forEach(function (_a) {
                var entry = _a[0], value = _a[1].value;
                res[language][entry] = value;
            });
        });
        console.log(res);
        return res;
    }, [data]);
    return (React.createElement(Container, { index: index, open: open },
        React.createElement(Code, { onClick: function () { return copy(JSON.stringify(print)); } }),
        React.createElement(Title, { index: index }, children)));
}
//# sourceMappingURL=Header.js.map