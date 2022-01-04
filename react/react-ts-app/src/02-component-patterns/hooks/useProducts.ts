import { useEffect, useRef, useState } from 'react';
import { onChangeArgs, Product, InitialValues } from '../interfaces/interfaces';

interface useProductArgs {
  product: Product;
  customOnChange?: (args: onChangeArgs) => void;
  customValue?: number;
  initialValues?: InitialValues;
  maxCount?: number;
}

export const useProduct = ({
  customOnChange,
  product,
  customValue = 0,
  initialValues,
}: useProductArgs) => {
  const [counter, setCounter] = useState<number>(
    initialValues?.count || customValue,
  );
  const isMounted = useRef(false);

  const increaseBy = (value: number) => {
    let newValue = Math.max(counter + value, 0);
    if (initialValues?.maxCount) {
      newValue = Math.min(newValue, initialValues.maxCount);
    }

    setCounter(newValue);
    customOnChange && customOnChange({ count: newValue, product });
  };

  const reset = () => {
    setCounter(initialValues?.count || customValue);
  };

  useEffect(() => {
    if (!isMounted.current) return;
    setCounter(customValue);
  }, [customValue]);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  return {
    counter,
    isMaxCountReached:!!initialValues?.maxCount && counter === initialValues.maxCount,
    maxCount: initialValues?.maxCount,

    increaseBy,
    reset,
  };
};
