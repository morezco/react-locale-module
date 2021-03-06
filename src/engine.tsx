import React, { useState, useEffect, useCallback } from "react";

import { AddThrough, LS, removeRepeatingElements } from "./helpers";

import {
  Dictionary,
  Locale,
  Log,
  History,
  ContextCollection,
} from "./constants";

const LS_KEY = "LOCALE_DEVTOOLS";
const LS_LANG = "locale";

interface Props {
  children: React.ReactNode;
  forgetful?: boolean;
  localStorageKey?: string;
}

export const Localised = ({ children, forgetful, localStorageKey }: Props) => {
  const [language, setLanguage] = useState<string>(
    LS(localStorageKey || LS_LANG) || "en"
  );
  const [languages, setLanguages] = useState<Array<string>>(["en"]);

  const [code, setCode] = useState<string>("");

  const [contexts, setContexts] = useState<ContextCollection>({});
  const [history, setHistory] = useState<History>([]);

  const [devTools, setDevTools] = useState<boolean>(LS(LS_KEY) || false);

  const log = useCallback(AddThrough(setHistory), [setHistory]);

  const set = useCallback(
    (agent: string) => (lang: string) => {
      let event: Log = {
        agent,
        event: `set language to ${lang}`,
        type: "info",
        timestamp: new Date(),
        success: false,
      };

      event.success = languages.includes(lang);
      log(event);

      if (event.success) {
        setLanguage(lang);
      }
    },
    [languages, setLanguage, log]
  );

  const switchl = useCallback(
    (agent: string) => () => {
      let next = languages[languages.indexOf(language) + 1]
        ? languages[languages.indexOf(language) + 1]
        : languages[0];

      const success = next !== language;

      log({
        agent,
        event: success
          ? `Switched language from ${language} to ${next}`
          : `Attempted to switch languages with one language (${language}) on registry`,
        type: success ? "info" : "error",
        timestamp: new Date(),
        success,
      });

      if (success) {
        setLanguage(next);
      }
    },
    [languages, language, log]
  );

  const add = useCallback(
    (agent: string) => (
      context: string = agent,
      dictionary: Dictionary,
      data?: any
    ) => {
      log({
        agent,
        event: `Registered locale context ${context}`,
        type: "info",
        timestamp: new Date(),
        success: true,
      });

      let newLanguages: Array<string> = [];

      if (!dictionary[languages[0]]) {
        let processedDictionary: any = {
          [languages[0]]: {},
        };

        Object.keys(dictionary[Object.keys(dictionary)[0]]).forEach(
          (value: string) => {
            processedDictionary[languages[0]][value] = value;
          }
        );

        dictionary[languages[0]] = processedDictionary[languages[0]];
      }

      Object.keys(dictionary).forEach((key: string) => {
        if (newLanguages.indexOf(key) < 0 && languages.indexOf(key) < 0) {
          newLanguages.push(key);
        }
      });

      if (newLanguages.length) {
        setLanguages((current) => [
          ...current,
          ...removeRepeatingElements(
            newLanguages.filter((lang: string) => !current.includes(lang))
          ),
        ]);
      }

      let processedDictionary: any = {};

      Object.entries(dictionary).forEach(([language, dic]: [string, any]) => {
        processedDictionary[language] = {};
        Object.entries(dic).forEach(([phrase, translation]: [string, any]) => {
          processedDictionary[language][phrase] = {
            value: translation,
            highlight: false,
            current: data?.[phrase],
          };
        });
      });

      setContexts({
        ...contexts,
        [context]: processedDictionary,
      });
    },
    [languages, setLanguages, contexts, setContexts, log]
  );

  const remove = useCallback(
    (agent: string) => (text: string = agent) => {
      return;
    },
    []
  );

  const change = useCallback(
    (agent: string) => (
      context: string,
      language: string,
      key: string,
      value?: string,
      current?: string
    ) => {
      setContexts((currentState: any) => ({
        ...currentState,
        [context]: {
          ...currentState[context],
          [language]: {
            ...currentState[context][language],
            [key]: {
              value: value || currentState[context][language][key].value,
              current:
                current || currentState?.[context]?.[language]?.[key]?.current,
              highlight: true,
            },
          },
        },
      }));
    },
    [setContexts]
  );

  const clearHistory = useCallback(() => setHistory([]), [setHistory]);

  const toggleDevTools = useCallback(() => {
    LS(LS_KEY, !devTools);
    setDevTools(!devTools);
  }, [devTools]);

  const setDevToolsCode = useCallback((code: string) => setCode(code), [
    setCode,
  ]);

  const highlightTranslation = useCallback(
    (context: string, identifier: string) => {
      setContexts((current: any) => {
        return {
          ...current,
          [context]: {
            ...current[context],
            [language]: {
              ...current[context][language],
              [identifier]: {
                ...current[context][language][identifier],
                highlight: true,
              },
            },
          },
        };
      });
    },
    [setContexts, language]
  );

  const clearHighlight = useCallback(
    (context: string, identifier: string) => {
      setContexts((current: any) => ({
        ...current,
        [context]: {
          ...current[context],
          [language]: {
            ...current[context][language],
            [identifier]: {
              ...current[context][language][identifier],
              highlight: false,
            },
          },
        },
      }));
    },
    [setContexts, language]
  );

  useEffect(
    useCallback(() => {
      if (!forgetful) {
        LS(localStorageKey || LS_LANG, language);
      }
    }, [forgetful, localStorageKey, language]),
    [language]
  );

  return (
    <Locale.Provider
      value={{
        set,
        language,
        languages,
        switchl,
        add,
        remove,
        change,
        history: {
          log: history,
          clear: clearHistory,
        },
        devTools,
        toggleDevTools,
        setCode: setDevToolsCode,
        highlightTranslation,
        clearHighlight,
        code,
        contexts,
      }}
    >
      {children}
    </Locale.Provider>
  );
};
