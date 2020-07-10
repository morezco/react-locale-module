import React from "react";
interface Props {
    children: React.ReactNode;
    forgetful?: boolean;
    localStorageKey?: string;
}
export declare const Localised: ({ children, forgetful, localStorageKey }: Props) => JSX.Element;
export {};
