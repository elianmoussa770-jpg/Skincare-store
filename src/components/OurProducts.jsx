import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";

export default function OurProducts() {

  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Glow Serum",
      price: 25,
      img: "https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/original/QNUpscLJI-1184843_1.jpg"
    },
    {
      id: 2,
      name: "Hydra Cream",
      price: 30,
      img: "https://www.dyou.co/cdn/shop/files/126_6d637373-7743-413f-ab9a-e6b120c57ffb.png?v=1775647312&width=1180"
    },
    {
      id: 3,
      name: "Vitamin Mask",
      price: 20,
      img: "https://www.dyou.co/cdn/shop/files/Duo_Sachet_Website-11.jpg?v=1766059386"
    },
    {
      id: 4,
      name: "Treat & Repair Duo",
      price: 35,
      img: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/6/f/6f92598DYOUX00000008_1.jpg"
    },
    {
      id: 5,
      name: "Hydration Mist",
      price: 18,
      img: "https://m.media-amazon.com/images/I/412Tm5A6muL.jpg"
    },
    {
      id: 6,
      name: "Skin Glow Mask",
      price: 28,
      img: "https://smytten-image.gumlet.io/discover_product/1768556555_DYOU000AA01_1.jpg?w=500"
    }
  ];

  return (
    <section>

      <h2>Our Products</h2>

      <div className="products-scroll">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <button
          className="view-all-btn"
          onClick={() => navigate("/shop")}
        >
          View All Products
        </button>
      </div>

    </section>
  );
}