import React, { useMemo } from "react";
import { copy } from "../../../../helpers";
import { Dictionary, Translation } from "../../../../constants";

import { Container, Title, Code } from "./styles";

interface Props {
  open: boolean;
  children: string;
  data: Dictionary;
  index: number;
}

export default function Header({ children, data, open, index }: Props) {
  const print = useMemo(() => {
    let res: any = {};

    Object.entries(
      (data as unknown) as { [language: string]: Dictionary }
    ).forEach(([language, dictionary]: [string, Dictionary]) => {
      res[language] = {};

      Object.entries(
        (dictionary as unknown) as { [x: string]: Translation }
      ).forEach(([entry, { value }]: [string, Translation]) => {
        res[language][entry] = value;
      });
    });

    console.log(res);

    return res;
  }, [data]);

  return (
    <Container index={index} open={open}>
      <Code onClick={() => copy(JSON.stringify(print))} />
      <Title index={index}>{children}</Title>
    </Container>
  );
}
