'use client';

import React, { useState } from 'react';
import styles from './QuantityCounter.module.scss';

export interface QuantityCounterProps {
  initialValue?: number;
  min?: number;
  max?: number;
  onChange?: (value: number) => void;
}

const QuantityCounter: React.FC<QuantityCounterProps> = ({
  initialValue = 1,
  min = 1,
  max = 99,
  onChange,
}) => {
  const [quantity, setQuantity] = useState(initialValue);

  const increment = () => {
    if (quantity < max) {
      const newValue = quantity + 1;
      setQuantity(newValue);
      onChange?.(newValue);
    }
  };

  const decrement = () => {
    if (quantity > min) {
      const newValue = quantity - 1;
      setQuantity(newValue);
      onChange?.(newValue);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= min && value <= max) {
      setQuantity(value);
      onChange?.(value);
    }
  };

  return (
    <div className={styles.counter}>
      <button
        className={styles.button}
        onClick={decrement}
        disabled={quantity <= min}
        aria-label='Decrease quantity'
      >
        −
      </button>
      <input
        type='number'
        className={styles.input}
        value={quantity}
        onChange={handleChange}
        min={min}
        max={max}
        aria-label='Quantity'
      />
      <button
        className={styles.button}
        onClick={increment}
        disabled={quantity >= max}
        aria-label='Increase quantity'
      >
        +
      </button>
    </div>
  );
};

export default QuantityCounter;
