import styled from "styled-components";

interface ContentProps {
  editing: boolean;
  children: string;
}

export const Container = styled.div``;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000000;

  width: 100vw;
  height: 100vh;

  background-color: #00000077;
`;

export const Content = styled.span<ContentProps>`
  transition: all 0.3s ease-in-out;

  ${({ editing }) =>
    editing
      ? `
        color: white;
        position: relative;
        border: 1px solid white;
        z-index: 1000000000;
    `
      : ``}
`;
