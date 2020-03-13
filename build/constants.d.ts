/// <reference types="react" />
declare type LogType = "error" | "warning" | "info";
export declare type Log = {
    agent: string;
    event: string;
    type: LogType;
    timestamp: Date;
    success: boolean;
};
export declare type History = Array<Log>;
export declare type Dictionary = {
    [languageKey: string]: {
        [original: string]: string | {
            value: string;
            highlight: boolean;
        };
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
    l: (original: string) => any;
};
export {};
