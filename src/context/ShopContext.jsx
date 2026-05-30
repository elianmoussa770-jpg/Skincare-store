import { createContext, useState } from "react";

export const ShopContext = createContext();

export default function ShopProvider({ children }) {

  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // ✅ ADD THIS (you used it before)
  const [showLogin, setShowLogin] = useState(false);

  return (
    <ShopContext.Provider value={{
      cart,
      setCart,
      wishlist,
      setWishlist,
      showLogin,
      setShowLogin
    }}>
      {children}
    </ShopContext.Provider>
  );
}