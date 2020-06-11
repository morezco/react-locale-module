var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { useState, useContext } from "react";
import { LocaleDevTools } from "../../../../DevTools";
import { Container, Header, Icon, Title, Body, Equal, Input, Subtitle, Listing, } from "./styles";
export default function Variable(_a) {
    var name = _a.name, value = _a.value, context = _a.context, language = _a.language, children = _a.children;
    var _b = useState(false), open = _b[0], setOpen = _b[1];
    var _c = useState(false), editing = _c[0], setEditing = _c[1];
    var change = useContext(LocaleDevTools).change;
    var title = name;
    var handler = function (e) {
        var value = e.target.value;
        change(context, language, name, undefined, value);
    };
    var valueHandler = function (e) {
        var _a, _b;
        var _c = e.target, name = _c.name, value = _c.value;
        var _d = name.split(","), match = _d[0], word = _d[1];
        change(context, language, title, __assign(__assign({}, children), (_a = {}, _a[match] = __assign(__assign({}, children[match]), (_b = {}, _b[word] = value, _b)), _a)));
    };
    return (React.createElement(Container, { open: open },
        React.createElement(Header, { open: open, onClick: function () { return setOpen(!open); } },
            React.createElement(Title, { onDoubleClick: function () { return setEditing(true); } },
                React.createElement(Icon, null),
                React.createElement("span", null,
                    name,
                    ": "),
                editing ? (React.createElement(Input, { onChange: handler, defaultValue: value, onBlur: function () { return setEditing(false); } })) : (value))),
        React.createElement(Body, null, Object.entries(children).map(function (_a, index) {
            var match = _a[0], words = _a[1];
            return (React.createElement(React.Fragment, { key: index },
                React.createElement(Subtitle, { onClick: function () {
                        return change(context, language, name, undefined, match);
                    }, selected: match === value },
                    React.createElement(Equal, null),
                    " ",
                    match),
                Object.entries(words).map(function (_a, index) {
                    var word = _a[0], translation = _a[1];
                    return (React.createElement(Listing, { key: index, selected: match === value },
                        React.createElement("p", null, word),
                        React.createElement(Input, { name: match + "," + word, value: translation, onChange: valueHandler, align: "right" })));
                })));
        }))));
}
//# sourceMappingURL=Variable.js.map