import { ContextCollection } from "../../constants";
interface Props {
    language: string;
    languages: Array<string>;
    contexts: ContextCollection;
}
export default function List({ language, languages, contexts }: Props): JSX.Element;
export {};
