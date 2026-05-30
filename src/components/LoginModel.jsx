import { useState, useContext } from "react";
import { ShopContext } from "../context/ShopContext";

export default function LoginModel() {

  const { showLogin, setShowLogin, setCart } = useContext(ShopContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (!showLogin) return null;

  const handleLogin = () => {

    if (!email || !password) {
      alert("Fill all fields");
      return;
    }

    // add item after login (demo logic)
    setCart((prev) => [...prev, { name: "Product", qty: 1 }]);

    setShowLogin(false);
  };

  return (
    <div style={overlayStyle}>

      <div style={boxStyle}>

        <h2>Login to continue</h2>

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="main-btn" onClick={handleLogin}>
          Login
        </button>

        <button onClick={() => setShowLogin(false)}>
          Cancel
        </button>

      </div>

    </div>
  );
}

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const boxStyle = {
  background: "white",
  padding: "30px",
  borderRadius: "12px",
  textAlign: "center",
  width: "300px"
};