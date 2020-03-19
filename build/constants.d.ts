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
    value: string | ContextDependantString;
    current?: string;
    highlight: boolean;
};
export declare type ContextDependantString = {
    [match: string]: {
        [word: string]: string;
    };
};
export declare type Dictionary = {
    [languageKey: string]: {
        [original: string]: string | ContextDependantString | Translation;
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
    add: (issuer: string) => (context: string, dictionary: Dictionary, data?: any) => void;
    remove: (issuer: string) => () => void;
    history: {
        log: History;
        clear: () => void;
    };
    devTools: boolean;
    toggleDevTools: (e: any) => void;
    contexts: ContextCollection;
    change: (issuer: string) => (context: string, language: string, key: string, value?: string, current?: string) => void;
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
    add: (context: string, dictionary: Dictionary, data?: any) => void;
    remove: (context: string) => void;
    change: (context: string, language: string, key: string, value?: string, current?: string) => void;
    devTools: boolean;
    toggleDevTools: (e: any) => void;
    l: (original: string) => any;
    Text: any;
};
export {};
