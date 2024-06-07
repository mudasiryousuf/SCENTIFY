import React, { createContext, useState } from "react";
import { PRODUCTS } from "../componants/Products";
import Product from "../componants/pages/shop/Product";

export const ShopContext = createContext(null);
const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart);

  const getTotalCartAmout = () => {
    let totalAmout = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((Product) => Product.id === Number(item));
        totalAmout += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmout;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItem = (newAmout, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmout }));
  };
  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItem,
    getTotalCartAmout,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
