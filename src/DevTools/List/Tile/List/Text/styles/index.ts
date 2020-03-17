import styled from "styled-components";

interface Props {
  missing: boolean;
}

export const Container = styled.div<Props>`
  width: 100%;

  min-height: 50px;
  max-height: 100px;

  display: flex;
  align-items: center;

  padding: 10px;

  color: ${({ missing }) => (missing ? "yellow" : "white")};

  background-color: #00000066;

  overflow: hidden;

  border-bottom: 2px solid #00000022;
`;

export const Input = styled.textarea`
  background-color: #00000000;
  border: none;
  outline: none;

  color: white;

  font-size: 1em;

  width: 90%;

  height: 90%;

  border-bottom: 1px solid white;
`;
