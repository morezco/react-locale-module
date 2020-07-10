import { Translation } from "../../../../constants";
interface Props {
    children: {
        [x: string]: Translation;
    };
    context: string;
    language: string;
    languages: Array<string>;
}
export default function List({ context, language, languages, children, }: Props): JSX.Element;
export {};
