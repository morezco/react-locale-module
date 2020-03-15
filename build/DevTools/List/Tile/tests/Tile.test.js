var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from "react";
import { render } from "@testing-library/react";
import Tile from "../Tile";
import "@testing-library/jest-dom/extend-expect";
import { prefix } from "../../../DevTools";
var tile;
var props = {
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
var Environment = function () { return React.createElement(Tile, __assign({}, props)); };
beforeEach(function () {
    var getByTestId = render(React.createElement(Environment, null)).getByTestId;
    tile = getByTestId(prefix + "_tile");
});
describe("Locale DevTools list tile", function () {
    it.todo("has an internal open state that begins on false");
    it.todo("renders its name upon first paint");
    it.todo("is a 50px tall rectangle while closed");
    it.todo("has a title and an export code button when closed");
    it.todo("toggles the open state upon click");
    it.todo("is an at-most 300px tall list when open");
});
//# sourceMappingURL=Tile.test.js.map