import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "../styles/Payment.css";

export default function Payment() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const navigate = useNavigate();

  const plans = [
    {
      id: "free",
      title: "Free Trial Plan",
      price: "₹0 (1 Month Free)",
      fun: "Access to limited shows, movies & quizzes for one month free.",
      subscriptionType: "FREE",
    },
    {
      id: "student",
      title: "Student Plan",
      price: "₹199/month",
      fun: "Enjoy educational shows, documentaries, and interactive quizzes.",
      subscriptionType: "BASIC",
    },
    {
      id: "kids",
      title: "Kids Plan",
      price: "₹149/month",
      fun: "Unlimited cartoons, animated movies, and fun learning videos.",
      subscriptionType: "BASIC",
    },
    {
      id: "elder",
      title: "Elders Plan",
      price: "₹249/month",
      fun: "Classic movies, devotional content, and health shows.",
      subscriptionType: "BASIC",
    },
    {
      id: "allmix",
      title: "All-in-One Mix Plan",
      price: "₹399/month",
      fun: "Full access: Kids, Students, Elders + Fun & Entertainment pack.",
      subscriptionType: "PREMIUM",
    }
  ];

  const updateSubscription = async (userId, subscriptionType) => {
    const res = await fetch(`/api/users/${userId}/subscription`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ subscriptionType }),
    });
    return res;
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    if (!selectedPlan) {
      alert("⚠ Please select a plan first.");
      return;
    }

    try {
      const userId = localStorage.getItem("userId");
      if (!userId) {
        alert("User not found. Please sign up again.");
        navigate("/signup");
        return;
      }

      // Update subscription for any plan (FREE included)
      const subType = selectedPlan.subscriptionType;
      const resp = await updateSubscription(userId, subType);
      const data = await resp.json();
      if (!resp.ok) {
        const msg = data?.message || "Failed to update subscription";
        alert(msg);
        return;
      }

      if (selectedPlan.id === "free") {
        alert(
          `🎉 Free Trial Activated!\n\nPlan: ${selectedPlan.title}\nPrice: ${selectedPlan.price}`
        );
      } else {
        alert(
          `✅ Payment Successful!\n\nPlan: ${selectedPlan.title}\nPrice: ${selectedPlan.price}\nMethod: ${paymentMethod.toUpperCase()}`
        );
      }

      navigate("/login");
    } catch (error) {
      alert("Network error while updating subscription");
    }
  };

  return (
    <div className="payment-container">
      <h1 className="heading">Choose Your Streaming Plan</h1>

      <div className="plans">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`plan-card ${selectedPlan?.id === plan.id ? "selected" : ""}`}
            onClick={() => setSelectedPlan(plan)}
          >
            <h2>{plan.title}</h2>
            <p className="price">{plan.price}</p>
            <p className="fun">{plan.fun}</p>
          </div>
        ))}
      </div>

      {selectedPlan && selectedPlan.id !== "free" && (
        <form className="payment-form" onSubmit={handlePayment}>
          <h2>Payment Method</h2>
          <div className="payment-options">
            <label>
              <input
                type="radio"
                value="card"
                checked={paymentMethod === "card"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              Card
            </label>
            <label>
              <input
                type="radio"
                value="upi"
                checked={paymentMethod === "upi"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              UPI
            </label>
          </div>

          {paymentMethod === "card" && (
            <div className="card-details">
              <input type="text" placeholder="Card Number" required />
              <input type="text" placeholder="Name on Card" required />
              <div className="row">
                <input type="text" placeholder="MM/YY" required />
                <input type="text" placeholder="CVV" required />
              </div>
            </div>
          )}

          {paymentMethod === "upi" && (
            <div className="upi-details">
              <input type="text" placeholder="Enter UPI ID" required />
            </div>
          )}

          <button type="submit" className="pay-btn">
            Pay Now
          </button>
        </form>
      )}

      {selectedPlan?.id === "free" && (
        <button onClick={handlePayment} className="pay-btn">
          Activate Free Plan
        </button>
      )}
    </div>
  );
}
