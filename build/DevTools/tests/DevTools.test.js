var _a;
import React from "react";
import { render, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { DevTools } from "../DevTools";
import { Localised, useLocale } from "../../index";
import "@testing-library/jest-dom/extend-expect";
import { prefix } from "../DevTools";
var get;
var prefixed = function (element) {
    return element ? prefix + "_" + element : prefix;
};
var el = function (element) { return e[prefixed(element)]; };
var e = (_a = {
        status: null
    },
    _a[prefix] = null,
    _a[prefixed("title")] = null,
    _a[prefixed("header")] = null,
    _a[prefixed("logo")] = null,
    _a[prefixed("list")] = null,
    _a.lang = null,
    _a);
var Environment = function () {
    var _a = useLocale("Test", {
        pt: {
            Adimo: "Potestas"
        }
    }), language = _a.language, devTools = _a.devTools;
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { "data-testid": "status" }, String(devTools)),
        React.createElement("div", { "data-testid": "lang" }, language)));
};
beforeEach(function () {
    var getByTestId = render(React.createElement(Localised, null,
        React.createElement(Environment, null),
        React.createElement(DevTools, null))).getByTestId;
    get = getByTestId;
    Object.keys(e).forEach(function (key) { return (e[key] = get(key)); });
});
describe("Localisation", function () {
    it("starts minimised", function () {
        expect(e.status).toHaveTextContent("false");
    });
    it("renders a black, 0.5 opacity box on the top right of the screen about 80px down", function () {
        expect(el()).toHaveStyle("background-color: #00000044;");
        expect(el()).toHaveStyle("position: fixed;");
        expect(el()).toHaveStyle("top: 80px;");
        expect(el()).toHaveStyle("right: 0;");
        expect(el()).toHaveStyle("height: 80px;");
    });
    it("starts at english by default", function () {
        expect(e[prefix + "_title"]).toHaveTextContent("en");
    });
    it("renders a globe by the side of the icon", function () {
        expect(el("logo")).not.toBe(null);
    });
    it("changes language upon single-click, only while minimised", function () {
        expect(e.status).toHaveTextContent("false");
        expect(e.lang).toHaveTextContent("en");
        act(function () {
            el("header").click();
        });
        expect(e.status).toHaveTextContent("false");
        expect(e.lang).toHaveTextContent("pt");
    });
    it("opens upon double-clicking", function () {
        expect(e.status).toHaveTextContent("false");
        act(function () {
            userEvent.dblClick(el());
        });
        expect(e.status).toHaveTextContent("true");
    });
    it("renders a header with globe, a collapsable list of languages, a pin button", function () {
        expect(el("logo")).toBeInTheDocument();
    });
    it("renders a list with smaller collapsable lists pertaining to every context currently registered", function () {
        expect(el("list")).toBeInTheDocument();
        expect(el("list").children.length).toBe(1);
    });
});
//# sourceMappingURL=DevTools.test.js.map