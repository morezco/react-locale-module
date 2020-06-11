import { ContextDependantString } from "../../../../../constants";
interface Props {
    name: string;
    value: string;
    context: string;
    language: string;
    children: ContextDependantString;
}
export default function Variable({ name, value, context, language, children, }: Props): JSX.Element;
export {};
