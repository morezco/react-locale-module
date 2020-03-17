import styled from "styled-components";
import { prefix } from "../../../DevTools";

interface Props {
  open: boolean;
  index: number;
}

export const Container = styled.div.attrs(({ index }: Props) => ({
  "data-testid": `${prefix}_tile${index}`
}))<Props>`
  max-height: ${({ open }) => (open ? "300px" : "50px")};

  overflow: hidden;
  transition: all 0.3s ease-in-out;

  font-size: 0.8em;
`;
