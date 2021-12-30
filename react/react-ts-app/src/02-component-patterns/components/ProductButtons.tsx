import { useContext } from 'react';
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';
import { CSSProperties } from 'react';

export interface Props {
  customClassName?: string;
  customStyle?: CSSProperties;
}

export const ProductButtons = ({ customClassName, customStyle }: Props) => {
  const { increaseBy, counter } = useContext(ProductContext);

  return (
    <div
      className={`${styles.buttonsContainer} ${customClassName}`}
      style={customStyle}
    >
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>

      <div className={styles.countLabel}>{counter}</div>

      <button className={styles.buttonAdd} onClick={() => increaseBy(+1)}>
        +
      </button>
    </div>
  );
};
