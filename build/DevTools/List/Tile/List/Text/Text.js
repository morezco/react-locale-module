import React, { useState, useContext } from "react";
import { LocaleDevTools } from "../../../../DevTools";
import { Container, Input } from "./styles";
export default function Text(_a) {
    var original = _a.original, children = _a.children, context = _a.context, language = _a.language, languages = _a.languages;
    var _b = useState(false), editing = _b[0], setEditing = _b[1];
    var change = useContext(LocaleDevTools).change;
    var handler = function (e) {
        var value = e.target.value;
        change(context, language, original, value);
    };
    var closeHandler = function (e) {
        if (e.keyCode === 27) {
            setEditing(false);
        }
    };
    return typeof children === "string" ? (React.createElement(Container, { missing: original === children && language !== languages[0], onDoubleClick: function () { return setEditing(true); } }, editing ? (React.createElement(Input, { onBlur: function () { return setEditing(false); }, autoFocus: true, defaultValue: children, onChange: handler, onKeyDown: closeHandler })) : (children))) : null;
}
//# sourceMappingURL=Text.js.map