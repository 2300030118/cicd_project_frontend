<div className="chatbot-container">
  {/* Header */}
  <div className="chatbot-header">
    <span
      className={userType === "student" ? "active-type" : ""}
      onClick={() => setUserType("student")}
    >
      Student
    </span>
    |
    <span
      className={userType === "parent" ? "active-type" : ""}
      onClick={() => setUserType("parent")}
    >
      Parent
    </span>
  </div>

  {/* Chat messages */}
  <div className="chatbot-body">
    {messages.map((msg, i) => (
      <div
        key={i}
        className={`chat-message ${msg.sender === "bot" ? "bot" : "user"}`}
      >
        {msg.text}
      </div>
    ))}
  </div>

  {/* Send a message bar */}
  <div className="chatbot-input-container">
    <label className="chatbot-label">
      {userType === "student"
        ? "Send a message (academic question):"
        : "Send a message (movie question):"}
    </label>
    <div className="chatbot-input">
      <input
        type="text"
        placeholder={
          userType === "student"
            ? "Type your academic question..."
            : "Type your movie question..."
        }
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && handleSend()}
      />
      <button onClick={handleSend}>Send</button>
    </div>
  </div>
</div>
