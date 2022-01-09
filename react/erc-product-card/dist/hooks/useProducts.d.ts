import { onChangeArgs, Product, InitialValues } from '../interfaces/interfaces';
interface useProductArgs {
    product: Product;
    customOnChange?: (args: onChangeArgs) => void;
    customValue?: number;
    initialValues?: InitialValues;
    maxCount?: number;
}
export declare const useProduct: ({ customOnChange, product, customValue, initialValues, }: useProductArgs) => {
    counter: number;
    isMaxCountReached: boolean;
    maxCount: number | undefined;
    increaseBy: (value: number) => void;
    reset: () => void;
};
export {};
