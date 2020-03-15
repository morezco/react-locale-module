import React from "react";

import { Container } from "./styles";
import { Dictionary } from "../../../constants";

import Header from "./Header/Header";

interface Props {
  title: string;
  data: Dictionary;
}

export default function Tile({ title, data }: Props) {
  return (
    <Container>
      <Header>{title}</Header>
    </Container>
  );
}
