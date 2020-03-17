import { Dictionary } from "../../../constants";
interface Props {
    title: string;
    data: Dictionary;
    language: string;
    languages: Array<string>;
    index: number;
}
export default function Tile({ title, language, languages, data, index }: Props): JSX.Element;
export {};
