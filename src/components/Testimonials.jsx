export default function Testimonials() {

  const reviews = [
    {
      id: 1,
      name: "Sarah M.",
      text: "These products completely changed my skin. It feels smoother and healthier than ever.",
      rating: "★★★★★"
    },
    {
      id: 2,
      name: "Lina K.",
      text: "Very clean and gentle skincare. I noticed results within a week!",
      rating: "★★★★★"
    },
    {
      id: 3,
      name: "Maya R.",
      text: "The packaging, texture, and results are all premium quality. Highly recommend.",
      rating: "★★★★★"
    }
  ];

  return (
    <section>

<h2 style={{ textAlign: "center", marginBottom: "40px" }}>
  Customer Testimonials
</h2>
      <div className="testimonials-grid">

        {reviews.map((r) => (
          <div key={r.id} className="testimonial-card">

            <div className="stars">{r.rating}</div>

            <p className="quote">"{r.text}"</p>

            <h4 className="name">- {r.name}</h4>

          </div>
        ))}

      </div>

    </section>
  );
}