import React from "react";
import { render } from "@testing-library/react";
import List from "../List";
import "@testing-library/jest-dom/extend-expect";
var get;
var list = null;
var mock = {
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
var Environment = function () { return React.createElement(List, { language: "en", contexts: mock }); };
beforeEach(function () {
    var getByTestId = render(React.createElement(Environment, null)).getByTestId;
    get = getByTestId;
    list = get("locale_devTools_list");
});
describe("The List of contexts", function () {
    it("should render a tile for each context", function () {
        expect(list === null || list === void 0 ? void 0 : list.children.length).toBe(2);
        expect(list === null || list === void 0 ? void 0 : list.childNodes.forEach(function (child, index) {
            return expect(child).toHaveTextContent(!index ? "Test" : "Other");
        }));
    });
});
//# sourceMappingURL=List.test.js.map