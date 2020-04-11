import "../assets/fonts";
interface Props {
    open: boolean;
}
export declare const Container: import("styled-components").StyledComponent<"main", any, {
    "data-testid": string;
} & Props, "data-testid">;
export declare const Header: import("styled-components").StyledComponent<"header", any, {
    "data-testid": string;
} & Props, "data-testid">;
export declare const Title: import("styled-components").StyledComponent<"h1", any, {
    "data-testid": string;
}, "data-testid">;
export declare const Logo: () => JSX.Element;
export declare const Pin: (props: any) => JSX.Element;
export declare const Code: import("styled-components").StyledComponent<"pre", any, {}, never>;
export {};
