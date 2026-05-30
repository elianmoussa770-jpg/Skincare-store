import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">

      {/* SHOP */}
      <div className="footer-col">
        <h4>Shop</h4>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/shop">All Products</Link>
      </div>

      {/* HELP */}
      <div className="footer-col">
        <h4>Help</h4>
        <Link to="/faq">FAQ</Link>
      </div>

      {/* POLICIES */}
      <div className="footer-col">
        <h4>Policies</h4>
        <Link to="/privacy">Privacy Policy</Link>
      </div>

      {/* BRAND (optional but usually you had it) */}
      <div className="footer-col">
        <h3>D'you</h3>
        <p>Glow naturally with skincare that feels simple and effective.</p>
      </div>

    </footer>
  );
}