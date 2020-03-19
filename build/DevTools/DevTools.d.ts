import React from "react";
export declare const prefix = "locale_devTools";
declare type LocaleDevToolsContext = {
    openTile: (name: string) => void;
    closeTile: (name: string) => void;
    tiles: Array<string>;
    change: (context: string, language: string, key: string, value?: any, current?: string) => void;
};
export declare const LocaleDevTools: React.Context<LocaleDevToolsContext>;
export declare function DevTools(): JSX.Element;
export {};
