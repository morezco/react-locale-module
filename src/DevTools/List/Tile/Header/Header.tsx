import React from "react";
import { copy } from "../../../../helpers";
import { Dictionary } from "../../../../constants";

import { Container, Title, Code } from "./styles";

interface Props {
  open: boolean;
  children: string;
  data: Dictionary;
  index: number;
}

export default function Header({ children, data, open, index }: Props) {
  return (
    <Container index={index} open={open}>
      <Code onClick={() => copy(JSON.stringify(data))} />
      <Title index={index}>{children}</Title>
    </Container>
  );
}
