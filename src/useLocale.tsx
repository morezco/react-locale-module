import React, { useEffect, useContext, useCallback } from "react";
import { Locale } from "./constants";
import {
  Dictionary,
  UseLocaleReturn,
  ContextDependantString,
  Translation,
} from "./constants";

import TextComponent from "./Text/Text";

export function useLocale(
  context?: string,
  dictionary?: Dictionary,
  data?: any
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
    toggleDevTools,
    setCode,
    code,
  } = useContext(Locale);

  useEffect(() => {
    if (context && dictionary && !contexts[context])
      add(context)(context, dictionary, data);
  });

  const t = useCallback(
    (original: string) => {
      return !context || !dictionary
        ? null
        : ((contexts?.[context]?.[language]?.[original] ||
            original) as ContextDependantString);
    },
    [contexts, context, language]
  );

  const l = useCallback(
    (original: string, check?: string) => {
      if (!context || !dictionary) return null;

      let translationObject = contexts[context]?.[language]
        ? Object.values(contexts[context]?.[language])?.find(
            (x: any) => x.value === original
          )
        : contexts[context]?.[language]?.[original];

      if (translationObject) {
        const translation =
          typeof translationObject === "string"
            ? translationObject
            : translationObject?.value || original;

        const highlighted =
          typeof translationObject !== "string"
            ? translationObject?.highlight
            : false;

        return !context ? null : (
          <TextComponent editing={devTools && !!highlighted}>
            {String(translation)}
          </TextComponent>
        );
      } else {
        let translationObject = contexts[context]?.[language]?.[original];

        const translation =
          typeof translationObject === "string"
            ? translationObject
            : translationObject?.value || original;

        let secondGuess: any =
          contexts[context]?.[language] &&
          Object.values(contexts[context]?.[language])?.find(
            (x: any) => x.value === check
          );

        if (secondGuess && typeof secondGuess !== "string") {
          secondGuess = secondGuess.highlight;
        } else {
          secondGuess = false;
        }

        return (
          <TextComponent
            editing={
              devTools &&
              !!(
                typeof translationObject !== "string" &&
                (translationObject?.highlight || !!secondGuess)
              )
            }
          >
            {String(translation)}
          </TextComponent>
        );
      }
    },
    [context, language, contexts, devTools]
  );

  const Text = useCallback(
    ({ children, ...props }: { children: string; [x: string]: string }) => {
      if (!context || !dictionary) return null;

      let val: any = children;

      if (val.join) {
        val = val.join("");
      }

      Object.entries(props).forEach(
        ([key, value]: [string, string]) =>
          (val = val.replace(new RegExp(key, "g"), value))
      );

      const original = val;

      let translationObject = contexts[context]?.[language]?.[original];

      val =
        typeof translationObject === "string"
          ? translationObject
          : translationObject?.value || original;

      Object.entries(dictionary[language] || {}).forEach(
        ([variable, matches]: [
          string,
          string | Translation | ContextDependantString
        ]) => {
          if (typeof matches === "string") return;

          Object.entries(matches).forEach(
            ([match, words]: [string, ContextDependantString]) => {
              const subject = contexts[context]?.[language]?.[variable];

              if ((subject as Translation)?.current !== match) return;

              words =
                Object.keys((subject as any).value[match])[0] ===
                Object.keys(words)[0]
                  ? (subject as any).value[match]
                  : words;

              Object.entries(words).forEach(
                ([word, replacement]: [string, any]) => {
                  val = val.replace(new RegExp(word, "g"), replacement);
                }
              );
            }
          );
        }
      );

      if (original !== val) {
        l(original);
      }

      return l(val, original);
    },
    [l, context, contexts, dictionary, language]
  );

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
    setDevToolsCode: setCode,
    code,

    t,
    l,
    Text,
  };
}
