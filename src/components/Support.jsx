import { useState, useEffect } from "react";
import "../styles/Support.css";

export default function HelpSupport() {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true);
  }, []);

  const faqs = [
    { q: "How do I reset my password?", a: "Go to settings → Reset Password and follow instructions." },
    { q: "How can I contact support?", a: "You can use the Contact page or email support@example.com." },
    { q: "Where can I find tutorials?", a: "Check our Knowledge Base under Help & Support." },
  ];

  return (
    <div className={`help-page ${fade ? "fade-in" : ""}`}>
      <h1 className="help-title">Help & Support</h1>
      <p className="help-subtitle">
        Find answers to common questions or reach out for assistance.
      </p>

      <div className="faq-container">
        {faqs.map((item, index) => (
          <div key={index} className="faq-item">
            <h3 className="faq-question">{item.q}</h3>
            <p className="faq-answer">{item.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
