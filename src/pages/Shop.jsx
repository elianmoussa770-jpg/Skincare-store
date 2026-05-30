import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductCard from "../components/ProductCard";

export default function Shop() {

  const { cart, setCart, wishlist, setWishlist } = useContext(ShopContext);

  const products = [
  {
    id: 1,
    name: "Hydrating Serum",
    price: 25,
    img: "https://www.distacart.com/cdn/shop/files/fMJyKt5EIk_600x.png?v=1722606817"
  },
  {
    id: 2,
    name: "Glow Moisturizer",
    price: 30,
    img: "https://m.media-amazon.com/images/I/414gNYwafJL.jpg"
  },
  {
    id: 3,
    name: "Vitamin C Mask",
    price: 22,
    img: "https://d2c3d01lcpw2ui.cloudfront.net/gl/data/item/1642487043/sayyoudrew.jpg"
  },
  {
    id: 4,
    name: "Repair Night Cream",
    price: 35,
    img: "https://us.no7beauty.com/images?url=https://static.thcdn.com/productimg/original/13193312-2085177655534066.jpg&format=webp&auto=avif&width=1000&height=1000&fit=cover&v=2"
  },
  {
    id: 5,
    name: "Hydration Mist",
    price: 18,
    img: "https://m.media-amazon.com/images/I/41-V-Vy2p-L.jpg"
  },
  {
    id: 6,
    name: "Gentle Cleanser",
    price: 20,
    img: "https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/original/Tira_Combos/D_You/Dyou/1122774_combo_1.jpg"
  },
  {
    id: 7,
    name: "Brightening Toner",
    price: 24,
    img: "https://cafe24img.poxo.com/beautyboxkorea/web/product/big/202405/5e7195c72f9aef344de29b3a65cec038.jpg"
  },
  {
    id: 8,
    name: "Eye Repair Patches",
    price: 28,
    img: "https://m.media-amazon.com/images/I/51QAiZIl+PL.jpg"
  },
  {
    id: 9,
    name: "Skin Renewal Oil",
    price: 32,
    img: "https://api.photon.aremedia.net.au/wp-content/uploads/sites/3/2025/02/go-to-face-hero-688ab909d6b00.jpg?fit=1024%2C576&resize=1920%2C1080"
  },
  {
    id: 10,
    name: "SPF Protection Cream",
    price: 27,
    img: "https://m.media-amazon.com/images/I/41Sq6gWkIkL.jpg"
  },
  {
    id: 11,
    name: "Collagen Booster",
    price: 40,
    img: "https://m.media-amazon.com/images/I/61apQ9MOrnL.jpg"
  },
  {
    id: 12,
    name: "Aloe Soothing Gel",
    price: 19,
    img: "https://www.shop.eva-cosmetics.com/cdn/shop/files/NzdXLhs12eW7pxzAUc6BHa3ccLG192W5r6QIQtN3.webp?v=1759434229"
  },
  {
    id: 13,
    name: "Pore Refining Serum",
    price: 26,
    img: "https://chardike-bucket.s3.amazonaws.com/media/product/main_image/POUR_LA_PEAU_pore_refining_serum_30ml.jpg"
  },
  {
    id: 14,
    name: "Anti-Aging Cream",
    price: 38,
    img: "https://www.sadeliva.com/wp-content/uploads/2025/09/image_1950-9.webp"
  },
  {
    id: 15,
    name: "Skin Glow Set",
    price: 55,
    img: "https://m.media-amazon.com/images/I/51sCqzeD6ML.jpg"
  }
];

  const addToCart = (product, qty) => {
    setCart([...cart, { ...product, qty }]);
  };

  const toggleWishlist = (product) => {
    if (wishlist.find(p => p.id === product.id)) {
      setWishlist(wishlist.filter(p => p.id !== product.id));
    } else {
      setWishlist([...wishlist, product]);
    }
  };

  return (
    <div style={{ padding: "40px" }}>

      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
        Our Products
      </h2>

      <div className="products-grid">

        {products.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            addToCart={addToCart}
            toggleWishlist={toggleWishlist}
          />
        ))}

      </div>

    </div>
  );
}