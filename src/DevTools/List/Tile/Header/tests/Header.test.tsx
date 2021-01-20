import React from "react";
import { render } from "@testing-library/react";
import { Environment } from "../../../../tests/Environment";
import "@testing-library/jest-dom/extend-expect";

import { prefix } from "../../../../DevTools";

let title: null | HTMLElement;

beforeEach(() => {
  const { getByTestId } = render(<Environment />);

  title = getByTestId(`${prefix}_tileHeaderTitle0`);
});

describe("Locale DevTools list tile", () => {
  it("Renders its correct title", () => {
    expect(title).toHaveTextContent("DevTools");
  });
});
