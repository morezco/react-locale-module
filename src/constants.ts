import { createContext } from "react";

type LogType = "error" | "warning" | "info";

export type Log = {
  agent: string;
  event: string;
  type: LogType;
  timestamp: Date;
  success: boolean;
};

export type History = Array<Log>;

export type Translation = {
  value: string | ContextDependantString;
  current?: string;
  highlight: boolean;
};

export type ContextDependantString = {
  [match: string]: {
    [word: string]: string;
  };
};

export type Dictionary = {
  [languageKey: string]: {
    [original: string]: string | ContextDependantString | Translation;
  };
};

export type ContextCollection = {
  [context: string]: Dictionary;
};

type LocaleContext = {
  language: string;
  languages: Array<string>;
  switchl: Function;
  set: (issuer: string) => (language: string) => void;
  add: (
    issuer: string
  ) => (context: string, dictionary: Dictionary, data?: any) => void;
  remove: (issuer: string) => () => void;
  history: {
    log: History;
    clear: () => void;
  };
  devTools: boolean;
  toggleDevTools: (e: any) => void;
  contexts: ContextCollection;
  setCode: (code: string) => void;
  code: string;
  highlightTranslation: (context: string, original: string) => void;
  clearHighlight: (context: string, original: string) => void;
  change: (
    issuer: string
  ) => (
    context: string,
    language: string,
    key: string,
    value?: string,
    current?: string
  ) => void;
};

export const Locale = createContext<LocaleContext>({
  language: "en",
  languages: [],
  set: (issuer: string) => (language: string) => {},
  switchl: (issuer: string) => () => {},
  add: (issuer: string) => (
    context = issuer,
    dictionary: Dictionary,
    data?: any
  ) => {},
  remove: (issuer: string) => () => {},
  history: {
    log: [],
    clear: () => {}
  },
  setCode: () => {},
  code: "",
  devTools: false,
  toggleDevTools: () => {},
  highlightTranslation: () => {},
  clearHighlight: () => {},
  contexts: {},
  change: () => () => {}
});

export type UseLocaleReturn = {
  language: string;
  languages: Array<string>;
  history: { log: History; clear: () => void };
  contexts: {
    [context: string]: Dictionary;
  };

  set: (language: string) => void;
  switchl: () => void;
  add: (context: string, dictionary: Dictionary, data?: any) => void;
  remove: (context: string) => void;
  change: (
    context: string,
    language: string,
    key: string,
    value?: string,
    current?: string
  ) => void;

  devTools: boolean;
  toggleDevTools: (e: any) => void;
  setDevToolsCode: (code: string) => void;
  code: string;

  l: (original: string) => any;
  Text: any;
};
