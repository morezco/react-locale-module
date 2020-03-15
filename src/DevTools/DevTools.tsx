import React from "react";
import { useLocale } from "../index";

import { Container, Header, Title, Logo, Pin } from "./styles";

import List from "./List/List";

export const prefix = "locale_devTools";

export function DevTools() {
  const {
    language,
    contexts,
    switchl,
    devTools,
    toggleDevTools
  } = useLocale("DevTools", { pt: {} });

  return (
    <Container onDoubleClick={toggleDevTools} open={devTools}>
      <Header open={devTools} onClick={() => !devTools && switchl()}>
        <Logo />
        <Title>{language}</Title>
        {devTools && <Pin onClick={toggleDevTools} />}
      </Header>

      <List language={language} contexts={contexts} />
    </Container>
  );
}
