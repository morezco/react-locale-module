import { createContext } from "react";

export type Dictionary = {
  [languageKey: string]: {
    [original: string]: string;
  };
};

type LocaleContext = {
  language: string;
  languages: Array<string>;
  switchl: Function;
  add: (context: string, dictionary: Dictionary) => void;
  remove: (context: string) => void;
  contexts: {
    [context: string]: Dictionary;
  };
};

export const Locale = createContext<LocaleContext>({
  language: "en",
  languages: [],
  switchl: () => {},
  add: () => {},
  remove: () => {},
  contexts: {}
});
