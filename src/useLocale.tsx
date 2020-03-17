import React, { useEffect, useContext, useCallback } from "react";
import { Dictionary, UseLocaleReturn } from "./constants";
import { Locale } from "./constants";

export function useLocale(
  context: string,
  dictionary: Dictionary
): UseLocaleReturn {
  const {
    set,
    language,
    languages,
    switchl,
    add,
    remove,
    change,
    contexts,
    history,
    devTools,
    toggleDevTools
  } = useContext(Locale);

  useEffect(
    useCallback(() => {
      add(context)(context, dictionary);
      return remove(context);
    }, [add, remove, context, dictionary]),
    []
  );

  const l = (original: string) => {
    if (contexts && contexts[context]) {
      Object.keys(contexts?.[context]).forEach((language: string) => {
        if (!contexts[context]?.[language]?.[original]) {
          change(context)(context, language, original, original);
        }
      });
    }

    let translationObject = contexts[context]?.[language]?.[original];

    const translation =
      typeof translationObject === "string"
        ? translationObject
        : translationObject?.value || original;

    const highlighted =
      typeof translationObject !== "string" && translationObject?.highlight;

    return (
      <span className={String(highlighted && "highlighted")}>
        {translation}
      </span>
    );
  };

  return {
    language,
    contexts,
    languages,
    history,

    set: set(context),
    switchl: switchl(context),
    add: add(context),
    remove: remove(context),
    change: change(context),

    devTools,
    toggleDevTools,

    l
  };
}
