import React from "react";
import { render, act } from "@testing-library/react";
import { Localised } from "../../../../engine";
import { Environment } from "../../../tests/Environment";
import "@testing-library/jest-dom/extend-expect";

import { prefix } from "../../../DevTools";

let tile: null | HTMLElement;

beforeEach(() => {
  const { getByTestId } = render(
    <Localised>
      <Environment />
    </Localised>
  );

  tile = getByTestId(`${prefix}_tile0`);
});

describe("Locale DevTools list tile", () => {
  it("gets an external open state that begins on false", () => {
    // max-height shall be 50px if open state turns out to be false; 300px otherwise
    expect(tile).toHaveStyle("max-height: 50px;");
  });

  it("toggles the open state upon click", () => {
    act(() => {
      tile!.click();
    });

    expect(tile).toHaveStyle("max-height: 300px;");
  });
});
