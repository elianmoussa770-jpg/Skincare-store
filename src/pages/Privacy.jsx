export default function Privacy() {
  return (
    <div className="legal-page">

      <h1>Privacy Policy, Terms & Returns</h1>

      {/* PRIVACY POLICY */}
      <section className="legal-section">
        <h2>Privacy Policy</h2>
        <p>
          We respect your privacy and only collect necessary information to process orders.
        </p>
        <p>
          Your data is never sold or shared with third parties.
        </p>
      </section>

      {/* TERMS */}
      <section className="legal-section">
        <h2>Terms & Conditions</h2>
        <p>
          By using this website, you agree to our terms and conditions.
        </p>
        <p>
          We reserve the right to update prices, products, and policies at any time.
        </p>
      </section>

      {/* RETURNS */}
      <section className="legal-section">
        <h2>Returns Policy</h2>
        <p>
          Returns are accepted within 7–14 days if the product is unused.
        </p>
        <p>
          Refunds are processed after inspection of returned items.
        </p>
      </section>

    </div>
  );
}