import React from "react";
import { DevTools, useLocale, Localised } from "../../index";
import "@testing-library/jest-dom/extend-expect";

export const Environment = () => {
  return (
    <Localised>
      {(function SomeComponent() {
        useLocale("Test", {
          pt: {
            Adimo: "Potestas"
          }
        });

        return <DevTools />;
      })()}
    </Localised>
  );
};
