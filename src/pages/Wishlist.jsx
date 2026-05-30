import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
export default function Wishlist() {

  const { wishlist, setWishlist } = useContext(ShopContext);

  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  return (
    <div style={{ padding: "40px" }}>

      <h2>My Wishlist</h2>

      {wishlist.length === 0 ? (
        <p style={{ textAlign: "center" }}>
          Your wishlist is empty.
        </p>
      ) : (
        <div className="products-grid">

          {wishlist.map((item) => (
            <div className="shop-card" key={item.id}>

              <img src={item.img} alt={item.name} />

              <h3>{item.name}</h3>

              <p>${item.price}</p>

              <button
                className="main-btn"
                onClick={() => removeFromWishlist(item.id)}
              >
                Remove
              </button>

            </div>
          ))}

        </div>
      )}

    </div>
  );
}