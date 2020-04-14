import { Dictionary } from "../../../constants";
interface Props {
    title: string;
    data: Dictionary;
    language: string;
    languages: Array<string>;
    index: number;
    setCode: (code: string) => void;
}
export default function Tile({ title, language, languages, setCode, data, index }: Props): JSX.Element;
export {};
