import { ContextCollection } from "../../constants";
interface Props {
    language: string;
    languages: Array<string>;
    contexts: ContextCollection;
    setCode: (code: string) => void;
}
export default function List({ language, languages, contexts, setCode, }: Props): JSX.Element;
export {};
