declare type LogType = "error" | "warning" | "info";
export declare type Log = {
    agent: string;
    event: string;
    type: LogType;
    timestamp: Date;
    success: boolean;
};
export declare type History = Array<Log>;
export declare type Translation = {
    value: string;
    highlight: boolean;
};
export declare type Dictionary = {
    [languageKey: string]: {
        [original: string]: string | Translation;
    };
};
export declare type ContextCollection = {
    [context: string]: Dictionary;
};
declare type LocaleContext = {
    language: string;
    languages: Array<string>;
    switchl: Function;
    set: (issuer: string) => (language: string) => void;
    add: (issuer: string) => (context: string, dictionary: Dictionary) => void;
    remove: (issuer: string) => () => void;
    history: {
        log: History;
        clear: () => void;
    };
    devTools: boolean;
    toggleDevTools: (e: any) => void;
    contexts: ContextCollection;
};
export declare const Locale: import("react").Context<LocaleContext>;
export declare type UseLocaleReturn = {
    language: string;
    languages: Array<string>;
    history: {
        log: History;
        clear: () => void;
    };
    contexts: {
        [context: string]: Dictionary;
    };
    set: (language: string) => void;
    switchl: () => void;
    add: (context: string, dictionary: Dictionary) => void;
    remove: (context: string) => void;
    devTools: boolean;
    toggleDevTools: (e: any) => void;
    l: (original: string) => any;
};
export {};
