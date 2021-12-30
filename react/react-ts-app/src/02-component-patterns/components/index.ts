import { ProductCard as ProductCardHOC } from './ProductCard';
import { ProductCardHOCProps } from '../interfaces/interfaces';

import { ProductButtons } from './ProductButtons';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';

export { ProductButtons } from './ProductButtons';
export { ProductImage } from './ProductImage';
export { ProductTitle } from './ProductTitle';


//   ProductCardHOCProps {
//   ({ children, product }: ProductCardProps): JSX.Element;

//   Title: ({ title }: { title?: string }) => JSX.Element;
//   Image: ({ img }: { img?: string }) => JSX.Element;
//   Buttons: () => JSX.Element;
// }
export const ProductCard: ProductCardHOCProps = Object.assign(
  ProductCardHOC, 
  {
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ProductButtons,
  }
);

export default ProductCard;
