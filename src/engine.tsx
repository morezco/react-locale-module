import React, { useState } from "react";
import { Dictionary, Locale } from "./constants";

export const Localised = ({ children }: any) => {
  const [language, setLanguage] = useState("en");
  const [languages, setLanguages] = useState(["en"]);
  const [contexts, setContexts] = useState({});

  function set(lang: string) {
    if (languages.includes(lang)) {
      setLanguage(lang);
    } else {
      throw new Error(`Attempted to set non-defined language "${lang}"`);
    }
  }

  function switchl() {
    if (languages.length > 1) {
      const current = languages.indexOf(language);
      setLanguage(
        languages[current + 1 === languages.length ? 0 : current + 1]
      );
    }
  }

  function add(context: string, dictionary: Dictionary) {
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
  }

  function remove(text: string) {
    const con = { ...contexts };

    if (!con[text]) {
      throw new Error(`Attempted to remove non-existing locale ${text}`);
    }

    delete con[text];
    setContexts(con);
  }

  return (
    <Locale.Provider
      value={{ language, languages, switchl, add, remove, contexts }}
    >
      {children}
    </Locale.Provider>
  );
};
