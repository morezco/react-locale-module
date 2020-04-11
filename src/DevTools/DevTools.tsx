import React, { useState, createContext } from "react";
import { useLocale } from "../index";

import { Container, Header, Title, Logo, Pin, Code } from "./styles";

import List from "./List/List";

export const prefix = "locale_devTools";

type LocaleDevToolsContext = {
  openTile: (name: string) => void;
  closeTile: (name: string) => void;
  tiles: Array<string>;
  change: (
    context: string,
    language: string,
    key: string,
    value?: any,
    current?: string
  ) => void;
};

export const LocaleDevTools = createContext<LocaleDevToolsContext>({
  openTile: () => {},
  closeTile: () => {},
  tiles: [],
  change: () => () => {}
});

export function DevTools() {
  const {
    languages,
    language,
    contexts,
    switchl,
    devTools,
    change,
    toggleDevTools,
    setDevToolsCode,
    code
  } = useLocale("DevTools", { pt: {} });

  const [tiles, setTiles] = useState<Array<string>>([]);
  const openTile = (name: string) => setTiles([...tiles, name]);
  const closeTile = (name: string) =>
    setTiles(tiles.filter((x: string) => x !== name));

  return (
    <LocaleDevTools.Provider
      value={{
        tiles,
        openTile,
        closeTile,
        change
      }}
    >
      <Container open={devTools}>
        <div onDoubleClick={e => e.stopPropagation()}>
          <Header
            open={devTools}
            onClick={switchl}
            onDoubleClick={toggleDevTools}
          >
            <Logo />
            <Title>{language}</Title>
            {devTools && <Pin onClick={toggleDevTools} />}
          </Header>

          <List
            languages={languages}
            language={language}
            contexts={contexts}
            setCode={setDevToolsCode}
          />
          {code && <Code onClick={() => setDevToolsCode("")}>{code}</Code>}
        </div>
      </Container>
    </LocaleDevTools.Provider>
  );
}
