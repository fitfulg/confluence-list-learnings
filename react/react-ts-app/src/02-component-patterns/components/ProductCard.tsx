import { useProduct } from '../hooks/useProducts';
import { createContext, CSSProperties, ReactElement } from 'react';
import { Product } from '../interfaces/interfaces';
import styles from '../styles/styles.module.css';

// product context creation:
interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}
export const ProductContext = createContext({} as ProductContextProps);
const { Provider, Consumer } = ProductContext;
////////////////////////////////////////////////////////////////////////////////
export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  customClassName?: string;
  customStyle?: CSSProperties;
}

export const ProductCard = ({
  children,
  product,
  customClassName,
  customStyle,
}: Props) => {
  const { counter, increaseBy } = useProduct();

  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div
        className={`${styles.productCard} ${customClassName}`}
        style={customStyle}
      >
        {children}
      </div>
    </Provider>
  );
};
