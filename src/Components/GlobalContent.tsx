import { FC, createContext, useContext, useState } from "react";

export interface GlobalContent {
  count: number;
  cartClose: boolean;
  handleIncrement: () => void;
  handleDecrement: () => void;
  cartOpen: () => void;
}
interface GlobalContentProviders {
  children: React.ReactNode;
}
//create context

const myGlobalContext = createContext<GlobalContent | undefined>(undefined);

//create custon hook to use context

export const useGlobalContent = (): GlobalContent => {
  const context = useContext(myGlobalContext);
  if (!context) {
    throw new Error(
      "useGlobalContent must be used within a GlobalContentProvider"
    );
  }
  return context;
};

//create provider
export const GlobalContentProvider: FC<GlobalContentProviders> = ({
  children,
}) => {
  const [count, setCount] = useState(0);
  const [cartClose, setCartClose] = useState(true);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => Math.max(0, prevCount - 1));
  };

  const cartOpen = () => {
    setCartClose((prevCartClose) => !prevCartClose);
  };
  const value: GlobalContent = {
    count,
    cartClose,
    handleIncrement,
    handleDecrement,
    cartOpen,
  };
  return (
    <myGlobalContext.Provider value={value}>
      {children}
    </myGlobalContext.Provider>
  );
};
