import { useEffect, useContext, useCallback } from "react";
import { Locale } from "./constants";
export function useLocale(context, dictionary) {
    var _a = useContext(Locale), set = _a.set, language = _a.language, languages = _a.languages, switchl = _a.switchl, add = _a.add, remove = _a.remove, contexts = _a.contexts, history = _a.history;
    useEffect(useCallback(function () {
        add(context)(context, dictionary);
        return remove(context);
    }, [add, remove, context, dictionary]), []);
    var translate = useCallback(function (original) { var _a, _b; return ((_b = (_a = contexts[context]) === null || _a === void 0 ? void 0 : _a[language]) === null || _b === void 0 ? void 0 : _b[original]) || original; }, [contexts, context, language]);
    return {
        language: language,
        contexts: contexts,
        languages: languages,
        history: history,
        set: set(context),
        switchl: switchl(context),
        add: add(context),
        remove: remove(context),
        l: translate
    };
}
//# sourceMappingURL=useLocale.js.map