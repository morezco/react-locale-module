import React, { useMemo } from "react";

import { Container } from "./styles";
import { ContextCollection, Dictionary } from "../../constants";

import Tile from "./Tile/Tile";

interface Props {
  language: string;
  languages: Array<string>;
  contexts: ContextCollection;
}

export default function List({ language, languages, contexts }: Props) {
  const Listable = useMemo(
    () =>
      Object.entries(
        contexts
      ).map(([name, dictionary]: [string, Dictionary], index: number) => (
        <Tile
          key={index}
          title={name}
          index={index}
          data={dictionary}
          language={language}
          languages={languages}
        />
      )),
    [language, languages, contexts]
  );

  return <Container>{Listable}</Container>;
}
