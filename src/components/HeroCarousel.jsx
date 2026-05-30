import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function HeroCarousel() {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={5000}
      showThumbs={false}
      showStatus={false}
      showIndicators={true}
      showArrows={true}
      stopOnHover={false}
    >

      {/* SLIDE 1 */}
      <div style={{ position: "relative" }}>
        <img
          src="https://www.dyou.co/cdn/shop/files/A_vegan_shopping_guide.png"
          alt="Skincare"
          style={{
            width: "100%",
            height: "750px",
            objectFit: "cover"
          }}
        />

        <div
          style={{
            position: "absolute",
            top: "78%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            color: "white",
            textShadow: "0 2px 10px rgba(0,0,0,0.5)"
          }}
        >
          <h1 style={{ fontSize: "50px", marginBottom: "10px" }}>
            Glow Naturally
          </h1>

          <p style={{ fontSize: "18px", marginBottom: "15px" }}>
            Luxury skincare for radiant skin
          </p>

          <button
            style={{
              padding: "12px 25px",
              borderRadius: "30px",
              background: "#ff4f8b",
              color: "white",
              border: "none"
            }}
          >
            Shop Now
          </button>
        </div>
      </div>

      {/* SLIDE 2 (TOP FOCUS FIX) */}
      <div style={{ position: "relative" }}>
        <img
          src="https://www.dyou.co/cdn/shop/files/sweatshirt.png?v=1755778999"
          alt="Luxury skincare"
          style={{
            width: "100%",
            height: "750px",
            objectFit: "cover",
            objectPosition: "center top"
          }}
        />

        <div
          style={{
            position: "absolute",
            top: "78%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            color: "white",
            textShadow: "0 2px 10px rgba(0,0,0,0.5)"
          }}
        >
          <h1 style={{ fontSize: "50px", marginBottom: "10px" }}>
            Hydrate & Protect
          </h1>

          <p style={{ fontSize: "18px", marginBottom: "15px" }}>
            Premium skincare made simple
          </p>

          <button
            style={{
              padding: "12px 25px",
              borderRadius: "30px",
              background: "#ff4f8b",
              color: "white",
              border: "none"
            }}
          >
            Explore
          </button>
        </div>
      </div>

      {/* SLIDE 3 */}
      <div style={{ position: "relative" }}>
        <img
          src="https://www.dyou.co/cdn/shop/files/Website_Banner-15_Web.jpg?v=1777394489&width=2367"
          alt="Beauty"
          style={{
            width: "100%",
            height: "750px",
            objectFit: "cover"
          }}
        />

        <div
          style={{
            position: "absolute",
            top: "78%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            color: "white",
            textShadow: "0 2px 10px rgba(0,0,0,0.5)"
          }}
        >
          <h1 style={{ fontSize: "50px", marginBottom: "10px" }}>
            Feel Confident
          </h1>

          <p style={{ fontSize: "18px", marginBottom: "15px" }}>
            Beauty that speaks for itself
          </p>

          <button
            style={{
              padding: "12px 25px",
              borderRadius: "30px",
              background: "#ff4f8b",
              color: "white",
              border: "none"
            }}
          >
            Shop Now
          </button>
        </div>
      </div>

    </Carousel>
  );
}