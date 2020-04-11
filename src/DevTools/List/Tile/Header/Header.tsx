import React, { useMemo } from "react";
import { copy } from "../../../../helpers";
import { Dictionary, Translation } from "../../../../constants";

import { Container, Title, Code } from "./styles";

interface Props {
  open: boolean;
  children: string;
  data: Dictionary;
  index: number;
  setCode: (code: string) => void;
}

export default function Header({
  children,
  data,
  open,
  index,
  setCode
}: Props) {
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

    return res;
  }, [data]);

  return (
    <Container index={index} open={open}>
      <Code
        onClick={() => copy(JSON.stringify(print))}
        onDoubleClick={() => setCode(JSON.stringify(print, null, 4))}
      />
      <Title index={index}>{children}</Title>
    </Container>
  );
}
