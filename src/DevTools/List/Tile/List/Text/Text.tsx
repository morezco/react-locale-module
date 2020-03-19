import React, { useState, useContext } from "react";
import { LocaleDevTools } from "../../../../DevTools";

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
  languages
}: Props) {
  const [editing, setEditing] = useState(false);
  const { change } = useContext(LocaleDevTools);

  const handler = (e: any) => {
    const {
      target: { value }
    } = e;

    change(context, language, original, value);
  };

  const closeHandler = (e: any) => {
    if (e.keyCode === 27) {
      setEditing(false);
    }
  };

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
