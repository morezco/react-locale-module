import React from "react";
import { Translation, ContextDependantString } from "../../../../constants";

import { Container } from "./styles";

import Text from "./Text/Text";
import Variable from "./Variable/Variable";

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
        ([original, translation]: [string, Translation], index: number) =>
          typeof translation.value === "string" ? (
            <Text
              key={index}
              original={original}
              context={context}
              language={language}
              languages={languages}
            >
              {translation.value}
            </Text>
          ) : (
            <Variable
              key={index}
              name={original}
              value={children[original].current!}
              context={context}
              language={language}
            >
              {(translation.value as unknown) as ContextDependantString}
            </Variable>
          )
      )}
    </Container>
  );
}
