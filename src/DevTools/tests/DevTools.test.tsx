import React from "react";
import { render, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { DevTools } from "../DevTools";
import { Localised, useLocale } from "../../index";
import "@testing-library/jest-dom/extend-expect";

import { prefix } from "../DevTools";

let get: any;

const prefixed = (element?: string) =>
  element ? `${prefix}_${element}` : prefix;
const el = (element?: string) => e[prefixed(element)];

let e: { [x: string]: HTMLElement | null } = {
  status: null,
  [prefix]: null,
  [prefixed("title")]: null,
  [prefixed("header")]: null,
  [prefixed("logo")]: null,
  [prefixed("list")]: null,
  lang: null
};

const Environment = () => {
  const { language, devTools } = useLocale("Test", {
    pt: {
      Adimo: "Potestas"
    }
  });

  return (
    <>
      <div data-testid="status">{String(devTools)}</div>
      <div data-testid="lang">{language}</div>
    </>
  );
};

beforeAll(() => {
  const store: any = {};

  spyOn(localStorage, "getItem").and.callFake((key: string) =>
    store[key] !== undefined ? store[key] : null
  );
  spyOn(localStorage, "setItem").and.callFake(
    (key: string, value: any) => (store[key] = value)
  );
  spyOn(localStorage, "removeItem").and.callFake(
    (key: string) => delete store[key]
  );
});

beforeEach(() => {
  const { getByTestId } = render(
    <Localised>
      <Environment />
      <DevTools />
    </Localised>
  );

  get = getByTestId;

  Object.keys(e).forEach((key: string) => (e[key] = get(key)));
});

describe("Localisation", () => {
  it("starts minimised", () => {
    expect(e.status).toHaveTextContent("false");
  });

  it("renders a black, 0.5 opacity box on the top right of the screen about 80px down", () => {
    expect(el()).toHaveStyle("background-color: #00000044;");
    expect(el()).toHaveStyle("position: fixed;");
    expect(el()).toHaveStyle("top: 80px;");
    expect(el()).toHaveStyle("right: 0;");
    expect(el()).toHaveStyle("height: 80px;");
  });

  it("starts at english by default", () => {
    expect(e[`${prefix}_title`]).toHaveTextContent("en");
  });

  it("renders a globe by the side of the icon", () => {
    expect(el("logo")).not.toBe(null);
  });

  it("changes language upon single-click, only while minimised", () => {
    expect(e.status).toHaveTextContent("false");
    expect(e.lang).toHaveTextContent("en");

    act(() => {
      el("header")!.click();
    });

    expect(e.status).toHaveTextContent("false");
    expect(e.lang).toHaveTextContent("pt");
  });

  it("opens upon double-clicking", () => {
    expect(e.status).toHaveTextContent("false");

    act(() => {
      userEvent.dblClick(el()!);
    });

    expect(e.status).toHaveTextContent("true");
  });

  it("renders a header with globe, a collapsable list of languages, a pin button", () => {
    expect(el("logo")).toBeInTheDocument();
  });

  it("renders a list with smaller collapsable lists pertaining to every context currently registered", () => {
    expect(el("list")).toBeInTheDocument();
    expect(el("list")!.children.length).toBe(1);
  });
});
