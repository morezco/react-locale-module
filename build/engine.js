var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { AddThrough } from "./helpers";
import { Locale } from "./constants";
export var test = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: blue;\n"], ["\n  color: blue;\n"])));
export var Localised = function (_a) {
    var children = _a.children;
    var _b = useState("en"), language = _b[0], setLanguage = _b[1];
    var _c = useState(["en"]), languages = _c[0], setLanguages = _c[1];
    var _d = useState({}), contexts = _d[0], setContexts = _d[1];
    var _e = useState([]), history = _e[0], setHistory = _e[1];
    var _f = useState(false), devTools = _f[0], setDevTools = _f[1];
    var log = useCallback(AddThrough(setHistory), [setHistory]);
    var set = useCallback(function (agent) { return function (lang) {
        var event = {
            agent: agent,
            event: "set language to " + lang,
            type: "info",
            timestamp: new Date(),
            success: false
        };
        event.success = languages.includes(lang);
        log(event);
        if (event.success) {
            setLanguage(lang);
        }
    }; }, [languages, setLanguage, log]);
    var switchl = useCallback(function (agent) { return function () {
        var next = languages[languages.indexOf(language) + 1];
        next = next === language ? languages[0] : next;
        var success = next !== language;
        log({
            agent: agent,
            event: success
                ? "Switched language from " + language + " to " + next
                : "Attempted to switch languages with one language (" + language + ") on registry",
            type: success ? "info" : "error",
            timestamp: new Date(),
            success: success
        });
        if (success) {
            setLanguage(next);
        }
    }; }, [languages, language, log]);
    var add = useCallback(function (agent) { return function (context, dictionary) {
        var _a, _b;
        if (context === void 0) { context = agent; }
        log({
            agent: agent,
            event: "Registered locale context " + context,
            type: "info",
            timestamp: new Date(),
            success: true
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
            if (newLanguages.indexOf(key) < 0) {
                newLanguages.push(key);
            }
        });
        if (newLanguages.length) {
            setLanguages(function (current) { return __spreadArrays(current, newLanguages); });
        }
        var processedDictionary = {};
        Object.entries(dictionary).forEach(function (_a) {
            var language = _a[0], dic = _a[1];
            processedDictionary[language] = {};
            Object.entries(dic).forEach(function (_a) {
                var phrase = _a[0], translation = _a[1];
                processedDictionary[language][phrase] = {
                    value: translation,
                    highlighted: false
                };
            });
        });
        setContexts(__assign(__assign({}, contexts), (_b = {}, _b[context] = processedDictionary, _b)));
    }; }, [setLanguages, contexts, setContexts, log]);
    var remove = useCallback(function (agent) { return function (text) {
        if (text === void 0) { text = agent; }
        return;
        log({
            agent: agent,
            event: "Removed locale context " + text,
            type: "info",
            timestamp: new Date(),
            success: true
        });
        var con = __assign({}, (contexts || {}));
        if (!con[text]) {
            throw new Error("Attempted to remove non-existing locale " + text);
        }
        delete con[text];
        setContexts(con);
    }; }, [contexts, setContexts]);
    var clearHistory = useCallback(function () { return setHistory([]); }, [setHistory]);
    var toggleDevTools = useCallback(function () { return setDevTools(!devTools); }, [devTools]);
    return (React.createElement(Locale.Provider, { value: {
            set: set,
            language: language,
            languages: languages,
            switchl: switchl,
            add: add,
            remove: remove,
            history: {
                log: history,
                clear: clearHistory
            },
            devTools: devTools,
            toggleDevTools: toggleDevTools,
            contexts: contexts
        } }, children));
};
var templateObject_1;
//# sourceMappingURL=engine.js.map