export default function Newsletter() {
  return (
    <section className="newsletter">

      <h2>Join Our Newsletter</h2>

      <p>
        Get skincare tips, exclusive offers, and updates.
      </p>

      <div className="newsletter-box">

        <input
          type="email"
          placeholder="Enter your email"
        />

        <button className="main-btn">
          Subscribe
        </button>

      </div>

    </section>
  );
}