import React, { useState, useEffect, useContext, useCallback } from "react";
import { LocaleDevTools } from "../../../../DevTools";
import { Locale } from "../../../../../constants";

import { Container, Input } from "./styles";

interface Props {
  children: string;

  context: string;
  language: string;
  languages: Array<string>;

  original: string;
}

export default function Text({
  original,
  children,
  context,
  language,
  languages,
}: Props) {
  const [editing, setEditing] = useState(false);
  const { change } = useContext(LocaleDevTools);
  const { highlightTranslation, clearHighlight } = useContext(Locale);

  const handler = (e: any) => {
    const {
      target: { value },
    } = e;

    if (editing) {
      change(context, language, original, value);
    }
  };

  const closeHandler = (e: any) => {
    if (e.keyCode === 27) {
      setEditing(false);
    }
  };

  useEffect(
    useCallback(() => {
      if (editing) {
        highlightTranslation(context, original);
      } else {
        clearHighlight(context, original);
      }
    }, [clearHighlight, context, editing, highlightTranslation, original]),
    [editing]
  );

  return typeof children === "string" ? (
    <Container
      missing={original === children && language !== languages[0]}
      onDoubleClick={() => setEditing(true)}
    >
      {editing ? (
        <Input
          onBlur={() => setEditing(false)}
          autoFocus={true}
          defaultValue={children}
          onChange={handler}
          onKeyDown={closeHandler}
        />
      ) : (
        children
      )}
    </Container>
  ) : null;
}
