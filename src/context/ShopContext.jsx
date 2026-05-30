import { createContext, useState } from "react";

export const ShopContext = createContext(null);

export default function ShopProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [search, setSearch] = useState("");

  return (
    <ShopContext.Provider
      value={{
        cart,
        setCart,
        wishlist,
        setWishlist,
        search,
        setSearch
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}