import { useProduct } from '../hooks/useProducts';
import { createContext, ReactElement } from 'react';
import { Product, ProductContextProps } from '../interfaces/interfaces';
import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider, Consumer } = ProductContext;

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
}

export const ProductCard = ({ children, product }: Props) => {
  const { counter, increaseBy } = useProduct();

  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={styles.productCard}>{children}</div>
    </Provider>
  );
};
