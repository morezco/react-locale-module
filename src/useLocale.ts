import { useEffect, useContext, useCallback } from "react";
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
    contexts,
    history
  } = useContext(Locale);

  useEffect(
    useCallback(() => {
      add(context)(context, dictionary);
      return remove(context);
    }, [add, remove, context, dictionary]),
    []
  );

  const translate = useCallback(
    (original: string) => contexts[context]?.[language]?.[original] || original,
    [contexts, context, language]
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

    l: translate
  };
}
