import { useParams } from "react-router-dom";

export default function Category() {
  const { name } = useParams();

  const data = {
    cleansers: {
      title: "Cleansers",
      desc: "Gentle cleansing removes dirt and oil while protecting your skin barrier.",
      how: "Use morning and night, massage for 30 seconds then rinse.",
      skin: "All skin types, especially oily and sensitive skin."
    },

    serums: {
      title: "Serums",
      desc: "Concentrated ingredients targeting skin concerns.",
      how: "Apply 2–3 drops after cleansing before moisturizer.",
      skin: "Acne, dull, or aging skin."
    },

    moisturizers: {
      title: "Moisturizers",
      desc: "Locks hydration and strengthens skin barrier.",
      how: "Use after serum, morning and night.",
      skin: "All skin types."
    },

    masks: {
      title: "Masks",
      desc: "Deep treatment for glow and detox.",
      how: "Use 2–3 times per week for 10–15 minutes.",
      skin: "Tired or congested skin."
    }
  };

  const item = data[name];

  if (!data[name]) {
  return (
    <div style={{ padding: "100px" }}>
      Category not found
    </div>
  );
} <h2>Category not found</h2>;

  return (
  <div className="category-page">

    <h1>{item.title}</h1>

    <div className="category-card">
      <p><b>Description:</b> {item.desc}</p>
      <p><b>How to use:</b> {item.how}</p>
      <p><b>Best for:</b> {item.skin}</p>
    </div>

  </div>
);
}