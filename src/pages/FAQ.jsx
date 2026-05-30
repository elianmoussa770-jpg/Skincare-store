export default function FAQ() {
  return (
    <div className="faq-page">

      <h1>FAQ</h1>

      <div className="faq-section">
        <h2>Orders</h2>

        <div className="faq-item">
          <h3>How do I place an order?</h3>
          <p>You can add products to cart and checkout.</p>
        </div>

        <div className="faq-item">
          <h3>Can I cancel my order?</h3>
          <p>Yes, before it is shipped.</p>
        </div>
      </div>

      <div className="faq-section">
        <h2>Shipping</h2>

        <div className="faq-item">
          <h3>How long does shipping take?</h3>
          <p>Usually 3–7 business days.</p>
        </div>

        <div className="faq-item">
          <h3>Do you ship internationally?</h3>
          <p>Yes, selected countries.</p>
        </div>
      </div>

      <div className="faq-section">
        <h2>Contact</h2>

        <div className="faq-item">
          <p>Email: support@dyou.com</p>
          <p>Phone: +12345678</p>
        </div>
      </div>

    </div>
  );
}