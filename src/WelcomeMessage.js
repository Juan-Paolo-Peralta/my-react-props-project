import React from "react";

function WelcomeMessage({ username }) {
  return (
    <div className="welcome-container">
      <h2>Thank you for logging in, {username}! 😁</h2>
      <p>Refresh the page to try again!</p>
    </div>
  );
}

export default WelcomeMessage;
