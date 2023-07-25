"use client"
import { createContext, FC, useContext, useState, useEffect } from "react";

type ContextValues = {
  handleAddToCart: (data: any, quantity: number) => void;
  cartItems: BasketItem[];

};

type BasketItem = {
  name: string;
  price: number;
  quantity: number;
};

const AppContext = createContext<ContextValues | null>(null);

const AppContextProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [quantity, setQuantity] = useState(1);
  const [cartItems, setCartItems] = useState<BasketItem[]>([]);

  const handleQuantity = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = parseInt(event.target.value);
    setQuantity(inputValue);
  };

  useEffect(() => {
    // Load cart data from localStorage on component mount
    const cartDataJSON = localStorage.getItem("cartData");
    const cartData: BasketItem[] = cartDataJSON ? JSON.parse(cartDataJSON) : [];
    const cartDataArray = Object.values(cartData);

    setCartItems(cartDataArray)
    
  }, []);


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

    const updatedCartItems: BasketItem[] = Object.values(cartData);
    setCartItems(updatedCartItems);
  };

  const contextValues: ContextValues = {
    handleAddToCart,
    cartItems,

  };

  return <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>;
};

export { AppContext, AppContextProvider };
