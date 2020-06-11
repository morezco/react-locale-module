import React from "react";
import styled from "styled-components";
import { prefix } from "../../../../DevTools";

interface Props {
  index: number;
  open?: boolean;
}

export const Container = styled.header.attrs(({ index }: Props) => ({
  "data-testid": `${prefix}_tileHeader${index}`,
}))<Props>`
  overflow: hidden;
  transition: all 0.3s ease-in-out;

  background-color: ${({ open }) => (!open ? "#00000044" : "#00000088")};

  display: flex;
  align-items: center;

  padding: 0 20px;

  height: 50px;

  cursor: pointer;
`;

export const Title = styled.h1.attrs(({ index }: Props) => ({
  "data-testid": `${prefix}_tileHeaderTitle${index}`,
}))<Props>`
  margin: 0;
`;

export const Code = (props: any) => (
  <div {...props} style={{ margin: "0 15px 0px 0px", fontSize: "2em" }} />
);
