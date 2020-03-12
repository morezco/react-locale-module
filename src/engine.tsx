import React, { useState, useCallback } from "react";

import { AddThrough } from "./helpers";

import {
  Dictionary,
  Locale,
  Log,
  History,
  ContextCollection
} from "./constants";

export const Localised = ({ children }: any) => {
  const [language, setLanguage] = useState<string>("en");
  const [languages, setLanguages] = useState<Array<string>>(["en"]);
  const [contexts, setContexts] = useState<ContextCollection>({});
  const [history, setHistory] = useState<History>([]);

  const log = useCallback(AddThrough(setHistory), [setHistory]);

  const set = useCallback(
    (agent: string) => (lang: string) => {
      let event: Log = {
        agent,
        event: `set language to ${lang}`,
        type: "info",
        timestamp: new Date(),
        success: false
      };

      event.success = languages.includes(lang);
      log(event);

      if (event.success) {
        setLanguage(lang);
      }
    },
    [languages, setLanguage]
  );

  const switchl = useCallback(
    (agent: string) => () => {
      let next = languages[languages.indexOf(language) + 1];
      next = next === language ? languages[0] : next;

      const success = next !== language;

      log({
        agent,
        event: success
          ? `Switched language from ${language} to ${next}`
          : `Attempted to switch languages with one language (${language}) on registry`,
        type: success ? "info" : "error",
        timestamp: new Date(),
        success
      });

      if (success) {
        setLanguage(next);
      }
    },
    [languages]
  );

  const add = useCallback(
    (agent: string) => (context = agent, dictionary: Dictionary) => {
      log({
        agent,
        event: `Registered locale context ${context}`,
        type: "info",
        timestamp: new Date(),
        success: true
      });

      let newLanguages: Array<string> = [];

      Object.keys(dictionary).forEach((key: string) => {
        if (newLanguages.indexOf(key) < 0) {
          newLanguages.push(key);
        }
      });

      if (newLanguages.length) {
        setLanguages([...languages, ...newLanguages]);
      }

      setContexts({
        ...contexts,
        [context]: dictionary
      });
    },
    [setLanguages, contexts, setContexts]
  );

  const remove = useCallback(
    (agent: string) => (text = agent) => {
      log({
        agent,
        event: `Removed locale context ${text}`,
        type: "info",
        timestamp: new Date(),
        success: true
      });

      const con = { ...contexts };

      if (!con[text]) {
        throw new Error(`Attempted to remove non-existing locale ${text}`);
      }

      delete con[text];
      setContexts(con);
    },
    [contexts, setContexts]
  );

  const clearHistory = useCallback(() => setHistory([]), [setHistory]);

  return (
    <Locale.Provider
      value={{
        set,
        language,
        languages,
        switchl,
        add,
        remove,
        history: {
          log: history,
          clear: clearHistory
        },
        contexts
      }}
    >
      {children}
    </Locale.Provider>
  );
};
