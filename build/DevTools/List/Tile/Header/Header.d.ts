import { Dictionary } from "../../../../constants";
interface Props {
    open: boolean;
    children: string;
    data: Dictionary;
    index: number;
    setCode: (code: string) => void;
}
export default function Header({ children, data, open, index, setCode }: Props): JSX.Element;
export {};
