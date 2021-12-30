import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from '../components';
import '../styles/custom-styles.css';

const product = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: './coffee-mug.png',
};

export const Shoppingpage = () => {
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
        {/* PATRON TIPO 1: */}
        <ProductCard product={product} customClassName="bg-dark text-white ">
          <ProductCard.Image customClassName="custom-image" />
          <ProductCard.Title customClassName="text-bold" />
          <ProductCard.Buttons customClassName="custom-buttons" />
        </ProductCard>

        {/* PATRON TIPO 2: */}
        <ProductCard product={product} customClassName="bg-dark text-white ">
          <ProductImage
            customClassName="custom-image"
            customStyle={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}
          />
          <ProductTitle customClassName="text-bold" />
          <ProductButtons customClassName="custom-buttons" />
        </ProductCard>

        {/* PATRON TIPO 2 again: */}
        <ProductCard
          product={product}
          customStyle={{ backgroundColor: '#70D1F8' }}
        >
          <ProductImage
            customStyle={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}
          />
          <ProductTitle customStyle={{ fontWeight: 'bold' }} />
          <ProductButtons
            customStyle={{ display: 'flex', justifyContent: 'end' }}
          />
        </ProductCard>
      </div>
    </div>
  );
};
