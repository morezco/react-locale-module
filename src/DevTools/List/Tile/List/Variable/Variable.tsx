import React, { useState, useContext } from "react";
import { LocaleDevTools } from "../../../../DevTools";

import {
  Container,
  Header,
  Icon,
  Title,
  Body,
  Equal,
  Input,
  Subtitle,
  Listing
} from "./styles";
import { ContextDependantString } from "../../../../../constants";

interface Props {
  name: string;
  value: string;

  context: string;
  language: string;

  children: ContextDependantString;
}

export default function Variable({
  name,
  value,
  context,
  language,
  children
}: Props) {
  const [open, setOpen] = useState<boolean>(false);
  const [editing, setEditing] = useState<boolean>(false);
  const { change } = useContext(LocaleDevTools);

  const title = name;

  const handler = (e: any) => {
    const {
      target: { value }
    } = e;

    change(context, language, name, undefined, value);
  };

  const valueHandler = (e: any) => {
    const {
      target: { name, value }
    } = e;

    const [match, word] = name.split(",");

    change(context, language, title, {
      ...children,
      [match]: { ...children[match], [word]: value }
    });
  };

  return (
    <Container open={open}>
      <Header open={open} onClick={() => setOpen(!open)}>
        <Title onDoubleClick={() => setEditing(true)}>
          <Icon />
          {name}:{" "}
          {editing ? (
            <Input
              onChange={handler}
              defaultValue={value}
              onBlur={() => setEditing(false)}
            />
          ) : (
            value
          )}
        </Title>
      </Header>

      <Body>
        {Object.entries(children).map(
          (
            [match, words]: [string, { [word: string]: string }],
            index: number
          ) => (
            <React.Fragment key={index}>
              <Subtitle
                onClick={() =>
                  change(context, language, name, undefined, match)
                }
                selected={match === value}
              >
                <Equal /> {match}
              </Subtitle>

              {Object.entries(words).map(
                ([word, translation]: [string, string], index: number) => (
                  <Listing key={index} selected={match === value}>
                    <p>{word}</p>
                    <Input
                      name={`${match},${word}`}
                      value={translation}
                      onChange={valueHandler}
                      align="right"
                    />
                  </Listing>
                )
              )}
            </React.Fragment>
          )
        )}
      </Body>
    </Container>
  );
}
