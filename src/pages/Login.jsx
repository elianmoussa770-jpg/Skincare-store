import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    // 🚀 just go to shop (no saving anything)
    navigate("/shop");
  };

  return (
    <div className="login-container">

      <h2>Login</h2>

      <input
        type="email"
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

      <button className="main-btn" onClick={handleSubmit}>
        Submit
      </button>

    </div>
  );
}