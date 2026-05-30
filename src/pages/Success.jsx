import { Link } from "react-router-dom";

export default function Success() {

  return (
    <div
      style={{
        textAlign: "center",
        padding: "120px 20px"
      }}
    >

      <h1>✨ Order Placed Successfully ✨</h1>

      <p style={{ margin: "20px 0" }}>
        Thank you for shopping with D'you.
      </p>

      <Link to="/">
        <button className="main-btn">
          Back Home
        </button>
      </Link>

    </div>
  );
}