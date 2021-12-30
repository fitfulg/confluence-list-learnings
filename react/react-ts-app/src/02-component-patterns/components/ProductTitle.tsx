import { CSSProperties, useContext } from 'react';
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';

export interface Props {
  customClassName?: string;
  customStyle?: CSSProperties;
  title?: string;
}

export const ProductTitle = ({
  title,
  customClassName,
  customStyle,
}: Props) => {
  const { product } = useContext(ProductContext);

  return (
    <span
      className={`${styles.productDescription} ${customClassName}`}
      style={customStyle}
    >
      {title ? title : product.title}
    </span>
  );
};
