import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const context = useContext(ShopContext);

  const cart = context?.cart || [];
  const wishlist = context?.wishlist || [];
const { search, setSearch } = useContext(ShopContext);
const [showSearch, setShowSearch] = useState(false);
const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar">

      <div className="left-nav">
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        <h2>D'you</h2>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/login">Login</Link>
<div className="search-container">

  {/* ICON */}
  <span onClick={() => setShowSearch(!showSearch)}>
    🔍
  </span>

  {/* INPUT */}
  {showSearch && (
    <input
      autoFocus
      placeholder="Search products..."
      value={search}
      onChange={(e) => {
        setSearch(e.target.value);
        navigate("/shop"); 
      }}
      className="nav-search"
    />
  )}

</div>
        <Link to="/wishlist">
          ❤️ {wishlist.length > 0 && <span>•</span>}
        </Link>

        <Link to="/cart">
          🛒 {cart.length > 0 && <span>{cart.length}</span>}
        </Link>
      </div>

      {menuOpen &&
        createPortal(
          <div className="sidebar-overlay" onClick={() => setMenuOpen(false)}>
            <div className="sidebar" onClick={(e) => e.stopPropagation()}>
              <Link to="/">Home</Link>
              <Link to="/shop">Shop</Link>
              <Link to="/wishlist">Wishlist</Link>
              <Link to="/cart">Cart</Link>
              <div className="mobile-search">
  <input
    type="text"
    placeholder="Search products..."
    value={search}
    onChange={(e) => {
      setSearch(e.target.value);
      navigate("/shop");
    }}
  />
</div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}