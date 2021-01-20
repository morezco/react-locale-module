import React from "react";

import { Container, Overlay, Content } from "./styles";

interface Props {
  editing: boolean;
  children: string;
}

export default function Text({ editing, children }: Props) {
  return (
    <Container>
      {editing && <Overlay />}
      <Content
        className={String(editing && "highlightedTranslation")}
        editing={editing}
      >
        {children}
      </Content>
    </Container>
  );
}
