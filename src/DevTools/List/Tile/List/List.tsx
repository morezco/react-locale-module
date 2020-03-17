import React from "react";
import { Translation } from "../../../../constants";

import { Container } from "./styles";

import Text from "./Text/Text";

interface Props {
  children: { [x: string]: Translation };

  context: string;
  language: string;
  languages: Array<string>;
}

export default function List({
  context,
  language,
  languages,
  children
}: Props) {
  return (
    <Container onClick={e => e.stopPropagation()}>
      {Object.entries(children).map(
        ([original, translation]: [string, Translation], index: number) => (
          <Text
            key={index}
            original={original}
            context={context}
            language={language}
            languages={languages}
          >
            {translation.value}
          </Text>
        )
      )}
    </Container>
  );
}
