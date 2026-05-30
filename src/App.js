import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import FAQ from "./pages/FAQ";
import Privacy from "./pages/Privacy";

export default function App() {
  return (
    <>
      <Navbar />

      <Home />

      <Footer />
    </>
  );
}