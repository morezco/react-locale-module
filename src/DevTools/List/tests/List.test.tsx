import React from "react";
import { render } from "@testing-library/react";
import List from "../List";
import "@testing-library/jest-dom/extend-expect";

let get: any;
let list: null | HTMLElement = null;

const mock = {
  Test: {
    en: {
      Adimo: "Adimo"
    },
    pt: {
      Adimo: "Potestas"
    }
  },
  Other: {
    en: {
      tua: "tua"
    },
    pt: {
      tua: "quae"
    }
  }
};

const Environment = () => <List language={"en"} contexts={mock} />;

beforeEach(() => {
  const { getByTestId } = render(<Environment />);

  get = getByTestId;
  list = get("locale_devTools_list");
});

describe("The List of contexts", () => {
  it("should render a tile for each context", () => {
    expect(list?.children.length).toBe(2);
    expect(
      list?.childNodes.forEach((child: ChildNode, index: number) =>
        expect(child).toHaveTextContent(!index ? "Test" : "Other")
      )
    );
  });
});
