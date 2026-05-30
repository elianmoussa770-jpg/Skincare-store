import { useState } from "react";

export default function Newsletter() {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubscribe = () => {
    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
    }, 2500);
  };

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

        <button className="main-btn" onClick={handleSubscribe}>
          Subscribe
        </button>

      </div>

      {/* POPUP */}
      {showPopup && (
        <div className="popup">
          Successfully subscribed 🎉
        </div>
      )}

    </section>
  );
}