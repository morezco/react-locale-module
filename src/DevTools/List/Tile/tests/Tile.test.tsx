import React from "react";
import { render, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Tile from "../Tile";
import "@testing-library/jest-dom/extend-expect";

import { prefix } from "../../../DevTools";

let tile;

const props = {
  title: "Adimo",
  data: {
    en: {
      Adimo: "Adimo"
    },
    pt: {
      Adimo: "Potestas"
    }
  }
};

const Environment = () => <Tile {...props} />;

beforeEach(() => {
  const { getByTestId } = render(<Environment />);

  tile = getByTestId(`${prefix}_tile`);
});

describe("Locale DevTools list tile", () => {
  it.todo("has an internal open state that begins on false");
  it.todo("renders its name upon first paint");
  it.todo("is a 50px tall rectangle while closed");
  it.todo("has a title and an export code button when closed");
  it.todo("toggles the open state upon click");
  it.todo("is an at-most 300px tall list when open");
});
