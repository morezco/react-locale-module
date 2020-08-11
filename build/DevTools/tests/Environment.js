import React from "react";
import { DevTools, useLocale, Localised } from "../../index";
import "@testing-library/jest-dom/extend-expect";
export var Environment = function () {
    return (React.createElement(Localised, null, (function SomeComponent() {
        useLocale("Test", {
            pt: {
                Adimo: "Potestas"
            }
        });
        return React.createElement(DevTools, null);
    })()));
};
//# sourceMappingURL=Environment.js.map