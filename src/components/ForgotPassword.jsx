import React, { useState } from "react";
import "../styles/ForgotPassword.css";

export default function ForgotPasswordOptions() {
  const [method, setMethod] = useState(""); // Email, SMS, Call
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1); // 1 = enter info, 2 = OTP

  const handleMethodSelect = (selectedMethod) => {
    setMethod(selectedMethod);
    setStep(1); // Reset to step 1
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 1) {
      // Step 1: Send email/OTP
      if (method === "Email") {
        alert(`Password reset link sent to ${email}`);
        setEmail("");
      } else if (method === "SMS" || method === "Call") {
        alert(`OTP sent to ${phone}`);
        setStep(2); // Move to OTP input
      }
    } else if (step === 2) {
      // Step 2: Verify OTP
      if (otp) {
        alert(`OTP verified. You can now reset your password.`);
        setOtp("");
        setPhone("");
        setMethod("");
        setStep(1);
      } else {
        alert("Please enter the OTP sent to your phone.");
      }
    }
  };

  const handleBack = () => {
    if (step === 2) {
      setStep(1); // Back to phone/email input
    } else {
      setMethod(""); // Back to method selection
      setStep(1);
      setPhone("");
      setEmail("");
    }
  };

  return (
    <div className="forgot-container">
      {!method ? (
        <>
          <h1 className="forgot-title">Reset Password</h1>
          <p className="forgot-subtitle">Choose a method to reset your password</p>
          <div className="method-buttons">
            <button onClick={() => handleMethodSelect("Email")}>Via Email</button>
            <button onClick={() => handleMethodSelect("SMS")}>Via SMS OTP</button>
            <button onClick={() => handleMethodSelect("Call")}>Via Phone Call</button>
          </div>
        </>
      ) : step === 1 ? (
        <>
          <h1 className="forgot-title">Reset via {method}</h1>
          <form className="forgot-form" onSubmit={handleSubmit}>
            {method === "Email" && (
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            )}
            {(method === "SMS" || method === "Call") && (
              <input
                type="text"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            )}
            <button type="submit" className="forgot-btn">Proceed</button>
            <button type="button" className="back-btn" onClick={handleBack}>Back</button>
          </form>
        </>
      ) : (
        <>
          <h1 className="forgot-title">Enter OTP</h1>
          <p className="forgot-subtitle">We sent an OTP to {phone}</p>
          <form className="forgot-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
            <button type="submit" className="forgot-btn">Verify OTP</button>
            <button type="button" className="back-btn" onClick={handleBack}>Back</button>
          </form>
        </>
      )}
    </div>
  );
}
