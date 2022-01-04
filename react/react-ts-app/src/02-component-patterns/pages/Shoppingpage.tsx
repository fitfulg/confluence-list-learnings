import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from '../components';
import { products } from '../data/products';
import '../styles/custom-styles.css';

const product = products[0];

export const Shoppingpage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <ProductCard
        product={product}
        customClassName="bg-dark text-white "
        key={product.id}
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        {/* funcion como children que retorna JSX  */}
        {({ reset, count, increaseBy, isMaxCountReached, maxCount }) => (
          <>
            <ProductImage
              customClassName="custom-image"
              customStyle={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}
            />
            <ProductTitle customClassName="text-bold" />
            <ProductButtons customClassName="custom-buttons" />

            <button onClick={reset}>Reset</button>
            <button onClick={() => increaseBy(-2)}>-2</button>
            {!isMaxCountReached && (
              <button onClick={() => increaseBy(+2)}>+2</button>
            )}

            <span>
              {count} - {maxCount}
            </span>
          </>
        )}
      </ProductCard>
    </div>
  );
};
