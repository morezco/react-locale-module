import React, { useContext, useCallback, useMemo } from "react";
import { LocaleDevTools } from "../../DevTools";

import { Container } from "./styles";
import { Dictionary, Translation } from "../../../constants";

import Header from "./Header/Header";
import List from "./List/List";
interface Props {
  title: string;
  data: Dictionary;
  language: string;
  languages: Array<string>;
  index: number;
}

export default function Tile({
  title,
  language,
  languages,
  data,
  index
}: Props) {
  const { tiles, openTile, closeTile } = useContext(LocaleDevTools);

  const open = useMemo(() => tiles.includes(title), [tiles, title]);
  const toggle = useCallback(
    () => (!open ? openTile(title) : closeTile(title)),
    [title, open, closeTile, openTile]
  );

  return (
    <Container index={index} onClick={toggle} open={open}>
      <Header index={index} open={open} data={data}>
        {title}
      </Header>

      <List context={title} languages={languages} language={language}>
        {data[language] as { [original: string]: Translation }}
      </List>
    </Container>
  );
}
