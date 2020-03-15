import React, { useMemo } from "react";

import { Container } from "./styles";
import { ContextCollection, Dictionary, Translation } from "../../constants";

import Tile from "./Tile/Tile";

interface Props {
  language: string;
  contexts: ContextCollection;
}

export default function List({ language, contexts }: Props) {
  const Listable = useMemo(
    () =>
      Object.entries(
        contexts
      ).map(([name, dictionary]: [string, Dictionary], index: number) => (
        <Tile key={index} title={name} data={dictionary} />
      )),
    [contexts, language]
  );

  return <Container>{Listable}</Container>;
}
