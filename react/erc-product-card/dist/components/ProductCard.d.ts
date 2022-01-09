import React, { CSSProperties } from 'react';
import { InitialValues, onChangeArgs, Product, ProductCardHandlers } from '../interfaces/interfaces';
interface ProductContextProps {
    counter: number;
    increaseBy: (value: number) => void;
    product: Product;
    maxCount?: number;
}
export declare const ProductContext: React.Context<ProductContextProps>;
export interface Props {
    product: Product;
    children: (args: ProductCardHandlers) => JSX.Element;
    customClassName?: string;
    customStyle?: CSSProperties;
    customOnChange?: (args: onChangeArgs) => void;
    customValue?: number;
    initialValues?: InitialValues;
}
export declare const ProductCard: ({ children, product, customClassName, customStyle, customOnChange, customValue, initialValues, }: Props) => JSX.Element;
export {};
