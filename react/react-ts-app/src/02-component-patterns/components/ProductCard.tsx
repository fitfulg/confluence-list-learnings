import { useProduct } from '../hooks/useProducts';
import { createContext, CSSProperties, ReactElement } from 'react';
import {
  InitialValues,
  onChangeArgs,
  Product,
  ProductCardHandlers,
} from '../interfaces/interfaces';
import styles from '../styles/styles.module.css';

// product context creation:
interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
  maxCount?: number;
}
export const ProductContext = createContext({} as ProductContextProps);
const { Provider, Consumer } = ProductContext;
////////////////////////////////////////////////////////////////////////////////
export interface Props {
  product: Product;
  // children: ReactElement | ReactElement[]
  children: (args: ProductCardHandlers) => JSX.Element;
  customClassName?: string;
  customStyle?: CSSProperties;
  customOnChange?: (args: onChangeArgs) => void;
  customValue?: number;
  initialValues?: InitialValues;
}

export const ProductCard = ({
  children,
  product,
  customClassName,
  customStyle,
  customOnChange,
  customValue,
  initialValues,
}: Props) => {

  const { counter, increaseBy, maxCount, isMaxCountReached, reset } 
        = useProduct({ customOnChange, product, customValue, initialValues});

  return (
    <Provider value={{ counter, increaseBy, product, maxCount }}>
      <div
        className={`${styles.productCard} ${customClassName}`}
        style={customStyle}
      >
        {
        children({
          count: counter,
          isMaxCountReached,
          maxCount: initialValues?.maxCount,
          product,
          increaseBy,
          reset
        })
        }
      </div>
    </Provider>
  );
};
