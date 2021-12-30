import { CSSProperties, useContext } from 'react';
import { ProductContext } from './ProductCard';
import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';

export interface Props {
  img?: string;
  customClassName?: string;
  customStyle?: CSSProperties;
}

export const ProductImage = ({ img, customClassName, customStyle }: Props) => {
  const { product } = useContext(ProductContext);
  let imgToShow: string;
  if (img) {
    imgToShow = img;
  } else if (product.img) {
    imgToShow = product.img;
  } else {
    imgToShow = noImage;
  }

  return (
    <div className={`${customClassName}`}>
      <img
        // className={`${styles.productImg}${customClassName}`}
        className={styles.productImg}
        style={customStyle}
        src={imgToShow}
        alt="Product"
      />
    </div>
  );
};
