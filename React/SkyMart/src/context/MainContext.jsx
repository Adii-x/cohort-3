import { createContext, useEffect, useState } from "react";

export const MainStore = createContext();

export const MainProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cart")) || [],
  );

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const total = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );

    setTotalPrice(total);
  }, [cartItems]);

  return (
    <MainStore.Provider
      value={{
        cartItems,
        setCartItems,
        totalPrice,
        setTotalPrice,
      }}
    >
      {children}
    </MainStore.Provider>
  );
};
