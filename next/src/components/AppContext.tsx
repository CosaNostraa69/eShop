"use client"
import { createContext, FC, useContext, useState } from "react";

type ContextValues = {
  handleAddToCart: (data: any, quantity: number) => void;
};

const AppContext = createContext<ContextValues | null>(null);

const AppContextProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = parseInt(event.target.value);
    setQuantity(inputValue);
  };

  const handleAddToCart = (data: any, quantity: number) => {
    const existingCartData = localStorage.getItem("cartData");
    const cartData = existingCartData ? JSON.parse(existingCartData) : {};
    const productId = data.data.id;

    if (quantity === 0) {
      return;
    }

    if (cartData[productId]) {
      cartData[productId].quantity += quantity;
    } else {
      cartData[productId] = {
        name: data.data.Name,
        price: data.data.Price,
        quantity: quantity,
      };
    }
    localStorage.setItem("cartData", JSON.stringify(cartData));
  };

  const contextValues: ContextValues = {
    handleAddToCart,
  };

  return <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>;
};

export { AppContext, AppContextProvider };
