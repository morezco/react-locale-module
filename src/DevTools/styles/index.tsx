import React from "react";
import styled from "styled-components";
import { Globe } from "@styled-icons/octicons/Globe";
import { Pin as PinIcon } from "@styled-icons/entypo/Pin";
import "../assets/fonts";

import { prefix } from "../DevTools";

interface Props {
  open: boolean;
}

export const Container = styled.main.attrs(() => ({
  "data-testid": `${prefix}`,
}))<Props>`
  position: fixed;
  right: 0;

  overflow: hidden;

  &,
  * {
    font-family: Nanum Gothic;
    color: white;
  }

  > div {
    position: relative;
  }

  ${({ open }) => `
    top: ${open ? "0" : "80px"};
    height: ${open ? "100vh" : "80px"};
  `}

  transition: all 0.3s ease-in-out;

  width: 300px;

  background-color: #00000044;

  z-index: 100000000;
`;

export const Header = styled.header.attrs((props: any) => ({
  "data-testid": `${prefix}_header`,
}))<Props>`
  display: flex;
  align-items: center;

  ${({ open }) =>
    (open && "justify-content: space-around;") || "* { margin: 0px 10px; }"}

  * {
    cursor: pointer;
  }

  height: 80px;
`;

export const Title = styled.h1.attrs(() => ({
  "data-testid": `${prefix}_title`,
}))``;

export const Logo = () => (
  <Globe
    data-testid={`${prefix}_logo`}
    style={{
      color: "white",
    }}
    size={48}
  />
);

export const Pin = (props: any) => (
  <PinIcon
    data-testid={`${prefix}_pin`}
    style={{ color: "white" }}
    size={32}
    {...props}
  />
);

export const Code = styled.pre`
  position: absolute;
  top: 0;
  left: 0;

  min-width: 95%;
  min-height: 100vh;
  padding: 0 5px;

  background-color: #000000aa;
  color: white;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 0.75em;
`;
