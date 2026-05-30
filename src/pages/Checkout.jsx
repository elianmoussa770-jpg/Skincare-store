import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";

export default function Checkout() {

  const { cart, setCart } = useContext(ShopContext);

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    card: ""
  });

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleOrder = () => {

    if (
      !form.name ||
      !form.email ||
      !form.address ||
      !form.card
    ) {
      alert("Please fill all fields");
      return;
    }

    // clear cart
    setCart([]);

    // go success page
    navigate("/success");
  };

  return (
    <div className="checkout-container">

      <h2>Checkout</h2>

      <div className="checkout-box">

        {/* LEFT */}
        <div className="checkout-form">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />

          <input
            type="text"
            name="address"
            placeholder="Shipping Address"
            onChange={handleChange}
          />

          <input
            type="text"
            name="card"
            placeholder="Card Number"
            onChange={handleChange}
          />

        </div>

        {/* RIGHT */}
        <div className="checkout-summary">

          <h3>Order Summary</h3>

          {cart.map((item, index) => (
            <div key={index} className="summary-item">
              <p>{item.name}</p>
              <p>
                {item.qty} x ${item.price}
              </p>
            </div>
          ))}

          <h3>Total: ${total}</h3>

          <button
            className="main-btn"
            onClick={handleOrder}
          >
            Place Order
          </button>

        </div>

      </div>

    </div>
  );
}