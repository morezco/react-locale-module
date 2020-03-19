import React from "react";
import styled from "styled-components";
import { Memory } from "@styled-icons/material/Memory";
import { Equals } from "@styled-icons/typicons/Equals";

interface Props {
  open: boolean;
}

interface SubtitleProps {
  selected: boolean;
}

interface InputProps {
  align?: string;
}

export const Container = styled.div<Props>`
  max-height: ${({ open }) => (open ? "100vh" : "50px")};

  height: auto;

  overflow: hidden;
  transition: all 0.3s ease-in-out;

  font-size: 0.8em;

  background-color: #00000066;

  border-bottom: 2px solid #00000022;

  &,
  * {
    transition: all 0.3s ease-in-out;
  }
`;

export const Header = styled.header<Props>`
  display: flex;
  align-items: center;

  cursor: pointer;

  height: 50px;

  padding: 0 ${({ open }) => (open ? "40px" : "0px")};

  position: sticky;
  top: 0px;
`;

export const Body = styled.div`
  padding: 0 20px;

  max-width: 300px;

  overflow: hidden;

  div {
    display: flex;
    justify-content: space-between;

    padding: 0 20px;
  }
`;

export const Icon = () => <Memory size={24} />;

export const Equal = () => <Equals size={16} />;

export const Title = styled.h1`
  margin: 0 5px;

  display: flex;
`;

export const Input = styled.input<InputProps>`
  background-color: #00000000;

  font: 1em Nanum Gothic;

  text-indent: 0.2em;

  display: inline;

  text-align: ${({ align }) => align || "left"};

  outline: none;

  border: none;
`;

export const Subtitle = styled.h3<SubtitleProps>`
  ${({ selected }) => selected && `*, & {color: #31C7FF;}`}

  cursor: pointer;
`;

export const Listing = styled.div<SubtitleProps>`
  ${({ selected }) => selected && `*, & {color: #31C7FF;}`}
`;
