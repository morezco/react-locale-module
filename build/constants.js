import { createContext } from "react";
export var Locale = createContext({
    language: "en",
    languages: [],
    set: function (issuer) { return function (language) { }; },
    switchl: function (issuer) { return function () { }; },
    add: function (issuer) { return function (context, dictionary, data) {
        if (context === void 0) { context = issuer; }
    }; },
    remove: function (issuer) { return function () { }; },
    history: {
        log: [],
        clear: function () { }
    },
    devTools: false,
    toggleDevTools: function () { },
    contexts: {},
    change: function () { return function () { }; }
});
//# sourceMappingURL=constants.js.map