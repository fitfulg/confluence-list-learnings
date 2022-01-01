import { useState } from 'react';
import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from '../components';
import { useShoppingCart } from '../hooks/useShoppingCart';
import { Product } from '../interfaces/interfaces';
import { products } from '../data/products';
import '../styles/custom-styles.css';

export const Shoppingpage = () => {
  const { shoppingCart, onProductCountChange } = useShoppingCart();

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        {products.map((product: Product) => (
          <ProductCard
            product={product}
            customClassName="bg-dark text-white "
            key={product.id}
            customValue={shoppingCart[product.id]?.count || 0}
            customOnChange={(e) => onProductCountChange(e)}
          >
            <ProductImage
              customClassName="custom-image"
              customStyle={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}
            />
            <ProductTitle customClassName="text-bold" />
            <ProductButtons customClassName="custom-buttons" />
          </ProductCard>
        ))}
      </div>
      {/* CARRITO DE COMPRAS: */}
      <div className="shopping-cart">
        {Object.entries(shoppingCart).map(([key, product]) => (
          <ProductCard
            key={key}
            product={product}
            customClassName="bg-dark text-white "
            customStyle={{ width: '100px' }}
            customValue={product.count}
            customOnChange={(e) => onProductCountChange(e)}
          >
            <ProductImage
              customClassName="custom-image"
              customStyle={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}
            />
            <ProductTitle customClassName="text-bold" />

            <ProductButtons
              customClassName="custom-buttons"
              customStyle={{ display: 'flex', justifyContent: 'center' }}
            />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};
