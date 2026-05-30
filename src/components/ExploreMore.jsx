import { useNavigate } from "react-router-dom";
export default function ExploreMore() {
  const navigate = useNavigate();
  const categories = [
    {
      id: 1,
      title: "Cleansers",
      img: "https://www.dyou.co/cdn/shop/files/Butter_Smooth_cover.png",
      desc: "Gentle daily cleansing for glowing skin"
    },
    {
      id: 2,
      title: "Moisturizers",
      img: "https://www.dyou.co/cdn/shop/files/132_10d30757-fd8b-451a-8254-e9ac9dc53806.png?v=1757072198",
      desc: "Hydration that lasts all day"
    },
    {
      id: 3,
      title: "Serums",
      img: "https://www.dyou.co/cdn/shop/files/92.png?v=1756705244",
      desc: "Targeted treatment for radiant skin"
    },
    {
      id: 4,
      title: "Masks",
      img: "https://m.media-amazon.com/images/I/61l+05xzJ7L._AC_UF350,350_QL80_.jpg",
      desc: "Deep care for instant glow"
    }
  ];

  return (
    <section>

      {/* TITLE */}
      <h2 style={{ textAlign: "center" }}>
        Explore More
      </h2>

      {/* QUOTE UNDER TITLE */}
      <p style={{
        textAlign: "center",
        color: "#777",
        marginTop: "10px",
        marginBottom: "40px",
        fontStyle: "italic"
      }}>
        “Skincare is not vanity, it’s self-care in its purest form.”
      </p>

      {/* CARDS */}
      <div className="explore-grid">

        {categories.map((c) => (
<div
  key={c.id}
  className="explore-card"
  onClick={() => navigate(`/category/${c.title.toLowerCase()}`)}
>
            <img src={c.img} alt={c.title} />

            <div className="overlay">
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}