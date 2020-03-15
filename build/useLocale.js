import React, { useEffect, useContext, useCallback } from "react";
import { Locale } from "./constants";
export function useLocale(context, dictionary) {
    var _a = useContext(Locale), set = _a.set, language = _a.language, languages = _a.languages, switchl = _a.switchl, add = _a.add, remove = _a.remove, contexts = _a.contexts, history = _a.history, devTools = _a.devTools, toggleDevTools = _a.toggleDevTools;
    useEffect(useCallback(function () {
        add(context)(context, dictionary);
        return remove(context);
    }, [add, remove, context, dictionary]), []);
    var l = function (original) {
        var _a, _b;
        var translationObject = (_b = (_a = contexts[context]) === null || _a === void 0 ? void 0 : _a[language]) === null || _b === void 0 ? void 0 : _b[original];
        var translation = typeof translationObject === "string"
            ? translationObject
            : (translationObject === null || translationObject === void 0 ? void 0 : translationObject.value) || original;
        var highlighted = typeof translationObject !== "string" && (translationObject === null || translationObject === void 0 ? void 0 : translationObject.highlight);
        return (React.createElement("span", { className: String(highlighted && "highlighted") }, translation));
    };
    return {
        language: language,
        contexts: contexts,
        languages: languages,
        history: history,
        set: set(context),
        switchl: switchl(context),
        add: add(context),
        remove: remove(context),
        devTools: devTools,
        toggleDevTools: toggleDevTools,
        l: l
    };
}
//# sourceMappingURL=useLocale.js.map