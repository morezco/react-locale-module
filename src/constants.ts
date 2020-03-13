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

export type Dictionary = {
  [languageKey: string]: {
    [original: string]:
      | string
      | {
          value: string;
          highlight: boolean;
        };
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
  add: (issuer: string) => (context: string, dictionary: Dictionary) => void;
  remove: (issuer: string) => () => void;
  history: {
    log: History;
    clear: () => void;
  };
  contexts: ContextCollection;
};

export const Locale = createContext<LocaleContext>({
  language: "en",
  languages: [],
  set: (issuer: string) => (language: string) => {},
  switchl: (issuer: string) => () => {},
  add: (issuer: string) => (context = issuer, dictionary: Dictionary) => {},
  remove: (issuer: string) => () => {},
  history: {
    log: [],
    clear: () => {}
  },
  contexts: {}
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
  add: (context: string, dictionary: Dictionary) => void;
  remove: (context: string) => void;

  l: (original: string) => any;
};
