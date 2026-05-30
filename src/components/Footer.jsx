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
        <Link to="/faq">Shipping</Link>
        <Link to="/faq">Contact Us</Link>
      </div>

      {/* POLICIES */}
      <div className="footer-col">
        <h4>Policies</h4>
        <Link to="/privacy">Privacy Policy</Link>
        <Link to="/privacy">Terms & Conditions</Link>
        <Link to="/privacy">Return Policy</Link>
      </div>

      {/* BRAND */}
      <div className="footer-col">
        <h3>D'you</h3>
        <p>Glow naturally with skincare that feels simple and effective.</p>
      </div>

    </footer>
  );
}