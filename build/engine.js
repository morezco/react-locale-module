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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import React, { useState, useEffect, useCallback } from "react";
import { AddThrough, LS, removeRepeatingElements } from "./helpers";
import { Locale, } from "./constants";
var LS_KEY = "LOCALE_DEVTOOLS";
var LS_LANG = "locale";
export var Localised = function (_a) {
    var children = _a.children, forgetful = _a.forgetful, localStorageKey = _a.localStorageKey;
    var _b = useState(LS(localStorageKey || LS_LANG) || "en"), language = _b[0], setLanguage = _b[1];
    var _c = useState(["en"]), languages = _c[0], setLanguages = _c[1];
    var _d = useState(""), code = _d[0], setCode = _d[1];
    var _e = useState({}), contexts = _e[0], setContexts = _e[1];
    var _f = useState([]), history = _f[0], setHistory = _f[1];
    var _g = useState(LS(LS_KEY) || false), devTools = _g[0], setDevTools = _g[1];
    var log = useCallback(AddThrough(setHistory), [setHistory]);
    var set = useCallback(function (agent) { return function (lang) {
        var event = {
            agent: agent,
            event: "set language to " + lang,
            type: "info",
            timestamp: new Date(),
            success: false,
        };
        event.success = languages.includes(lang);
        log(event);
        if (event.success) {
            setLanguage(lang);
        }
    }; }, [languages, setLanguage, log]);
    var switchl = useCallback(function (agent) { return function () {
        var next = languages[languages.indexOf(language) + 1]
            ? languages[languages.indexOf(language) + 1]
            : languages[0];
        var success = next !== language;
        log({
            agent: agent,
            event: success
                ? "Switched language from " + language + " to " + next
                : "Attempted to switch languages with one language (" + language + ") on registry",
            type: success ? "info" : "error",
            timestamp: new Date(),
            success: success,
        });
        if (success) {
            setLanguage(next);
        }
    }; }, [languages, language, log]);
    var add = useCallback(function (agent) { return function (context, dictionary, data) {
        var _a, _b;
        if (context === void 0) { context = agent; }
        log({
            agent: agent,
            event: "Registered locale context " + context,
            type: "info",
            timestamp: new Date(),
            success: true,
        });
        var newLanguages = [];
        if (!dictionary[languages[0]]) {
            var processedDictionary_1 = (_a = {},
                _a[languages[0]] = {},
                _a);
            Object.keys(dictionary[Object.keys(dictionary)[0]]).forEach(function (value) {
                processedDictionary_1[languages[0]][value] = value;
            });
            dictionary[languages[0]] = processedDictionary_1[languages[0]];
        }
        Object.keys(dictionary).forEach(function (key) {
            if (newLanguages.indexOf(key) < 0 && languages.indexOf(key) < 0) {
                newLanguages.push(key);
            }
        });
        if (newLanguages.length) {
            setLanguages(function (current) { return __spreadArrays(current, removeRepeatingElements(newLanguages.filter(function (lang) { return !current.includes(lang); }))); });
        }
        var processedDictionary = {};
        Object.entries(dictionary).forEach(function (_a) {
            var language = _a[0], dic = _a[1];
            processedDictionary[language] = {};
            Object.entries(dic).forEach(function (_a) {
                var phrase = _a[0], translation = _a[1];
                processedDictionary[language][phrase] = {
                    value: translation,
                    highlight: false,
                    current: data === null || data === void 0 ? void 0 : data[phrase],
                };
            });
        });
        setContexts(__assign(__assign({}, contexts), (_b = {}, _b[context] = processedDictionary, _b)));
    }; }, [languages, setLanguages, contexts, setContexts, log]);
    var remove = useCallback(function (agent) { return function (text) {
        if (text === void 0) { text = agent; }
        return;
    }; }, []);
    var change = useCallback(function (agent) { return function (context, language, key, value, current) {
        setContexts(function (currentState) {
            var _a, _b, _c;
            var _d, _e, _f;
            return (__assign(__assign({}, currentState), (_a = {}, _a[context] = __assign(__assign({}, currentState[context]), (_b = {}, _b[language] = __assign(__assign({}, currentState[context][language]), (_c = {}, _c[key] = {
                value: value || currentState[context][language][key].value,
                current: current || ((_f = (_e = (_d = currentState === null || currentState === void 0 ? void 0 : currentState[context]) === null || _d === void 0 ? void 0 : _d[language]) === null || _e === void 0 ? void 0 : _e[key]) === null || _f === void 0 ? void 0 : _f.current),
                highlight: true,
            }, _c)), _b)), _a)));
        });
    }; }, [setContexts]);
    var clearHistory = useCallback(function () { return setHistory([]); }, [setHistory]);
    var toggleDevTools = useCallback(function () {
        LS(LS_KEY, !devTools);
        setDevTools(!devTools);
    }, [devTools]);
    var setDevToolsCode = useCallback(function (code) { return setCode(code); }, [
        setCode,
    ]);
    var highlightTranslation = useCallback(function (context, identifier) {
        setContexts(function (current) {
            var _a, _b, _c;
            return __assign(__assign({}, current), (_a = {}, _a[context] = __assign(__assign({}, current[context]), (_b = {}, _b[language] = __assign(__assign({}, current[context][language]), (_c = {}, _c[identifier] = __assign(__assign({}, current[context][language][identifier]), { highlight: true }), _c)), _b)), _a));
        });
    }, [setContexts, language]);
    var clearHighlight = useCallback(function (context, identifier) {
        setContexts(function (current) {
            var _a, _b, _c;
            return (__assign(__assign({}, current), (_a = {}, _a[context] = __assign(__assign({}, current[context]), (_b = {}, _b[language] = __assign(__assign({}, current[context][language]), (_c = {}, _c[identifier] = __assign(__assign({}, current[context][language][identifier]), { highlight: false }), _c)), _b)), _a)));
        });
    }, [setContexts, language]);
    useEffect(useCallback(function () {
        if (!forgetful) {
            LS(localStorageKey || LS_LANG, language);
        }
    }, [forgetful, localStorageKey, language]), [language]);
    return (React.createElement(Locale.Provider, { value: {
            set: set,
            language: language,
            languages: languages,
            switchl: switchl,
            add: add,
            remove: remove,
            change: change,
            history: {
                log: history,
                clear: clearHistory,
            },
            devTools: devTools,
            toggleDevTools: toggleDevTools,
            setCode: setDevToolsCode,
            highlightTranslation: highlightTranslation,
            clearHighlight: clearHighlight,
            code: code,
            contexts: contexts,
        } }, children));
};
//# sourceMappingURL=engine.js.map