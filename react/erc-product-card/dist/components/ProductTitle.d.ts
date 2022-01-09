import { CSSProperties } from 'react';
export interface Props {
    customClassName?: string;
    customStyle?: CSSProperties;
    title?: string;
}
export declare const ProductTitle: ({ title, customClassName, customStyle, }: Props) => JSX.Element;
