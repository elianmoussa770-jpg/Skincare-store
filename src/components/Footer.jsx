import { Link } from "react-router-dom";


<Link to="/shop">Shop</Link>
export default function Footer() {
  return (
    <footer className="footer">

      {/* BRAND */}
      <div className="footer-col">
        <h3>D'you</h3>
      </div>

      {/* SHOP */}
      <div className="footer-col">
        <h4>Shop</h4>
        <a href="/">Home</a>
        <a href="/shop">Shop</a>
<Link to="/shop">All Products</Link>
      </div>

      {/* HELP */}
      <div className="footer-col">
        <h4>Help</h4>
        <Link to="/faq">FAQ</Link>
<Link to="/faq">Contact</Link>
<Link to="/faq">Shipping</Link>
      </div>

      {/* POLICIES */}
      <div className="footer-col">
        <h4>Policies</h4>
<Link to="/privacy">Privacy Policy</Link>
        <Link to="/privacy">Terms & Conditions</Link>
<Link to="/privacy">Returns</Link>
      </div>

    </footer>
  );
}