import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";

export default function ProductCard({ product }) {

  const { cart, setCart, wishlist, setWishlist } = useContext(ShopContext);
  const [qty, setQty] = useState(1);

  // ❤️ WISHLIST TOGGLE
  const isInWishlist = wishlist.find((p) => p.id === product.id);

  const toggleWishlist = () => {
    if (isInWishlist) {
      setWishlist(wishlist.filter((p) => p.id !== product.id));
    } else {
      setWishlist([...wishlist, product]);
    }
  };

  // 🛒 ADD TO CART
  const addToCart = () => {
    setCart([...cart, { ...product, qty }]);
  };

  return (
    <div className="product-card">

      {/* ❤️ WISHLIST */}
      <div className="wishlist-icon" onClick={toggleWishlist}>
        {isInWishlist ? "❤️" : "🤍"}
      </div>

      <img src={product.img} alt={product.name} />

      <h3>{product.name}</h3>
      <p>${product.price}</p>

      {/* ➖ QTY CONTROLS */}
      <div className="qty">
        <button onClick={() => setQty(qty > 1 ? qty - 1 : 1)}>-</button>
        <span>{qty}</span>
        <button onClick={() => setQty(qty + 1)}>+</button>
      </div>

      {/* 🛒 ADD TO CART */}
      <button className="main-btn" onClick={addToCart}>
        Add to Cart
      </button>

    </div>
  );
}