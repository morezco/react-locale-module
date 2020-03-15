import React from "react";

import { Container, Title } from "./styles";

interface Props {
  children: string;
}

export default function Header({ children }: Props) {
  return (
    <Container>
      <Title>{children}</Title>
    </Container>
  );
}
