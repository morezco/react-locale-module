import styled from "styled-components";
import { prefix } from "../../DevTools";

export const Container = styled.div.attrs(() => ({
  "data-testid": `${prefix}_list`
}))``;
