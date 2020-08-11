interface Props {
    open: boolean;
}
interface SubtitleProps {
    selected: boolean;
}
interface InputProps {
    align?: string;
}
export declare const Container: import("styled-components").StyledComponent<"div", any, Props, never>;
export declare const Header: import("styled-components").StyledComponent<"header", any, Props, never>;
export declare const Body: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const Icon: () => JSX.Element;
export declare const Equal: () => JSX.Element;
export declare const Title: import("styled-components").StyledComponent<"h1", any, {}, never>;
export declare const Input: import("styled-components").StyledComponent<"input", any, InputProps, never>;
export declare const Subtitle: import("styled-components").StyledComponent<"h3", any, SubtitleProps, never>;
export declare const Listing: import("styled-components").StyledComponent<"div", any, SubtitleProps, never>;
export {};
