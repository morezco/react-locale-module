import { Dictionary } from "../../../../constants";
interface Props {
    open: boolean;
    children: string;
    data: Dictionary;
    index: number;
}
export default function Header({ children, data, open, index }: Props): JSX.Element;
export {};
