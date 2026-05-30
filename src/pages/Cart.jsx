import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
export default function Cart() {

  const { cart, setCart } = useContext(ShopContext);

  const removeFromCart = (id) => {
    setCart(cart.filter((item, index) => index !== id));
  };

  // total price
  const total = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );
<Link to="/checkout">
  <button
    className="main-btn"
    style={{ marginTop: "20px" }}
  >
    Proceed to Checkout
  </button>
</Link>
  return (
    <div style={{ padding: "40px" }}>

      <h2>My Cart</h2>

      {cart.length === 0 ? (

        <p style={{ textAlign: "center" }}>
          Your cart is empty.
        </p>

      ) : (

        <>
          <div className="products-grid">

            {cart.map((item, index) => (

              <div className="shop-card" key={index}>

                <img src={item.img} alt={item.name} />

                <h3>{item.name}</h3>

                <p>${item.price}</p>

                <p>Quantity: {item.qty}</p>

                <p>
                  Total: ${item.price * item.qty}
                </p>

                <button
                  className="main-btn"
                  onClick={() => removeFromCart(index)}
                >
                  Remove
                </button>

              </div>

            ))}

          </div>

          {/* CART TOTAL */}
          <div
            style={{
              marginTop: "40px",
              textAlign: "center"
            }}
          >
            <h3>Total Cart Price: ${total}</h3>
            <Link to="/checkout">
  <button
    className="main-btn"
    style={{ marginTop: "20px" }}
  >
    Proceed to Checkout
  </button>
</Link>
          </div>
        </>

      )}

    </div>
  );
}