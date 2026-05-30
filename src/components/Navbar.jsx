import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { createPortal } from "react-dom";
export default function Navbar() {

  const { cart, wishlist } = useContext(ShopContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar">

      <div className="left-nav">

        <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        {/* BRAND */}
        <h2>D'you</h2>

      </div>

      {/* NAV LINKS */}
      <div className="nav-links">

        <Link to="/">Home</Link>

        {/* ✅ THIS FIXES SHOP PAGE */}
        <Link to="/shop">Shop</Link>

        <Link to="/login">Login</Link>

        <Link to="/wishlist" className="icon">
          ❤️

          {wishlist.length > 0 && (
            <span className="dot"></span>
          )}
        </Link>

        <Link to="/cart" className="icon">
          🛒

          {cart.length > 0 && (
            <span className="badge">
              {cart.length}
            </span>
          )}
        </Link>

      </div>

      {/* DROPDOWN MENU */}
      {menuOpen &&
  createPortal(
    <div className="sidebar-overlay" onClick={() => setMenuOpen(false)}>
      <div className="sidebar" onClick={(e) => e.stopPropagation()}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/shop" onClick={() => setMenuOpen(false)}>Shop</Link>
        <Link to="/wishlist" onClick={() => setMenuOpen(false)}>Wishlist</Link>
        <Link to="/cart" onClick={() => setMenuOpen(false)}>Cart</Link>
        <Link to="/faq" onClick={() => setMenuOpen(false)}>
  FAQ
</Link>

<Link to="/privacy" onClick={() => setMenuOpen(false)}>
  Privacy Policy
</Link>
      </div>
    </div>,
    document.body
  )
}

    </div>
  );
}