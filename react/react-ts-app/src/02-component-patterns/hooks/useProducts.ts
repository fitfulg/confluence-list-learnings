import { useEffect, useRef, useState } from 'react';
import { onChangeArgs, Product } from '../interfaces/interfaces';

interface useProductArgs {
  product: Product;
  customOnChange?: (args: onChangeArgs) => void;
  customValue?: number;
}

export const useProduct = ({
  customOnChange,
  product,
  customValue = 0,
}: useProductArgs) => {
  const [counter, setCounter] = useState(customValue);
  const isControlled = useRef(!!customOnChange);

  const increaseBy = (value: number) => {
    if (isControlled.current) {
      return customOnChange!({ product, count: value });
    }

    const newValue = Math.max(counter + value, 0);
    setCounter(newValue);
    customOnChange && customOnChange({ count: newValue, product });
  };

  useEffect(() => {
    setCounter(customValue);
  }, [customValue]);

  return {
    counter,
    increaseBy,
  };
};
