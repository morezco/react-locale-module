var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useEffect, useContext, useCallback } from "react";
import { Locale } from "./constants";
import TextComponent from "./Text/Text";
export function useLocale(context, dictionary, data) {
    var _a = useContext(Locale), set = _a.set, language = _a.language, languages = _a.languages, switchl = _a.switchl, add = _a.add, remove = _a.remove, change = _a.change, contexts = _a.contexts, history = _a.history, devTools = _a.devTools, toggleDevTools = _a.toggleDevTools, setCode = _a.setCode, code = _a.code;
    useEffect(useCallback(function () {
        add(context)(context, dictionary, data);
        return remove(context);
    }, [add, data, remove, context, dictionary]), []);
    var l = useCallback(function (original, check) {
        // This piece triggers an error in React now, and might not be needed. Review later.
        // Colateral changes: dependencies "change" and "data" removed from the callback watchlist.
        // if ((original === check || !check) && contexts && contexts[context]) {
        //   Object.keys(contexts?.[context]).forEach((language: string) => {
        //     if (!contexts[context]?.[language]?.[original]) {
        //       change(context)(
        //         context,
        //         language,
        //         original,
        //         original,
        //         data && data[original]
        //       );
        //     }
        //   });
        // }
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var translationObject = ((_a = contexts[context]) === null || _a === void 0 ? void 0 : _a[language]) ? (_c = Object.values((_b = contexts[context]) === null || _b === void 0 ? void 0 : _b[language])) === null || _c === void 0 ? void 0 : _c.find(function (x) { return x.value === original; }) : (_e = (_d = contexts[context]) === null || _d === void 0 ? void 0 : _d[language]) === null || _e === void 0 ? void 0 : _e[original];
        if (translationObject) {
            var translation = typeof translationObject === "string"
                ? translationObject
                : (translationObject === null || translationObject === void 0 ? void 0 : translationObject.value) || original;
            var highlighted = typeof translationObject !== "string"
                ? translationObject === null || translationObject === void 0 ? void 0 : translationObject.highlight : false;
            return (React.createElement(TextComponent, { editing: devTools && !!highlighted }, String(translation)));
        }
        else {
            var translationObject_1 = (_g = (_f = contexts[context]) === null || _f === void 0 ? void 0 : _f[language]) === null || _g === void 0 ? void 0 : _g[original];
            var translation = typeof translationObject_1 === "string"
                ? translationObject_1
                : (translationObject_1 === null || translationObject_1 === void 0 ? void 0 : translationObject_1.value) || original;
            var secondGuess = ((_h = contexts[context]) === null || _h === void 0 ? void 0 : _h[language]) && ((_k = Object.values((_j = contexts[context]) === null || _j === void 0 ? void 0 : _j[language])) === null || _k === void 0 ? void 0 : _k.find(function (x) { return x.value === check; }));
            if (secondGuess && typeof secondGuess !== "string") {
                secondGuess = secondGuess.highlight;
            }
            else {
                secondGuess = false;
            }
            return (React.createElement(TextComponent, { editing: devTools &&
                    !!(typeof translationObject_1 !== "string" &&
                        ((translationObject_1 === null || translationObject_1 === void 0 ? void 0 : translationObject_1.highlight) || !!secondGuess)) }, String(translation)));
        }
    }, [context, language, contexts, devTools]);
    var Text = useCallback(function (_a) {
        var _b, _c;
        var children = _a.children, props = __rest(_a, ["children"]);
        var val = children;
        if (val.join) {
            val = val.join("");
        }
        Object.entries(props).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            return (val = val.replace(new RegExp(key, "g"), value));
        });
        var original = val;
        var translationObject = (_c = (_b = contexts[context]) === null || _b === void 0 ? void 0 : _b[language]) === null || _c === void 0 ? void 0 : _c[original];
        val =
            typeof translationObject === "string"
                ? translationObject
                : (translationObject === null || translationObject === void 0 ? void 0 : translationObject.value) || original;
        Object.entries(dictionary[language] || {}).forEach(function (_a) {
            var variable = _a[0], matches = _a[1];
            if (typeof matches === "string")
                return;
            Object.entries(matches).forEach(function (_a) {
                var _b, _c, _d;
                var match = _a[0], words = _a[1];
                var subject = (_c = (_b = contexts[context]) === null || _b === void 0 ? void 0 : _b[language]) === null || _c === void 0 ? void 0 : _c[variable];
                if (((_d = subject) === null || _d === void 0 ? void 0 : _d.current) !== match)
                    return;
                words =
                    Object.keys(subject.value[match])[0] ===
                        Object.keys(words)[0]
                        ? subject.value[match]
                        : words;
                Object.entries(words).forEach(function (_a) {
                    var word = _a[0], replacement = _a[1];
                    val = val.replace(new RegExp(word, "g"), replacement);
                });
            });
        });
        if (original !== val) {
            l(original);
        }
        return l(val, original);
    }, [l, context, contexts, dictionary, language]);
    return {
        language: language,
        contexts: contexts,
        languages: languages,
        history: history,
        set: set(context),
        switchl: switchl(context),
        add: add(context),
        remove: remove(context),
        change: change(context),
        devTools: devTools,
        toggleDevTools: toggleDevTools,
        setDevToolsCode: setCode,
        code: code,
        l: l,
        Text: Text,
    };
}
//# sourceMappingURL=useLocale.js.map