import { ContextCollection } from "../../constants";
interface Props {
    language: string;
    contexts: ContextCollection;
}
export default function List({ language, contexts }: Props): JSX.Element;
export {};
