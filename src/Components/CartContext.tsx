import React, { ReactNode, createContext, useContext, useState } from "react";

interface CartContextType {
  count: number;
  increaseCount: () => void;
}

interface CartProviderProps {
  children: ReactNode;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount(count + 1);
  };
  return (
    <CartContext.Provider value={{ count, increaseCount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
const [count, setcount] = useState(0);
const [cartClose, setCartClose] = useState(true);
const handleIncrement = () => {
  setcount(count + 1);
};
const handleDecrement = () => {
  setcount(count - 1);
  if (count == 0) {
    setcount(0);
  }
};
const cartOpen = () => {
  setCartClose(!cartClose);
};
