interface Props {
    children: string;
    context: string;
    language: string;
    languages: Array<string>;
    original: string;
}
export default function Text({ original, children, context, language, languages, }: Props): JSX.Element | null;
export {};
