import React, { useState } from "react";
import LoginForm from "./LoginForm";
import WelcomeMessage from "./WelcomeMessage";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (username, password) => {
    if (username == "admin" && password == 12345) {
      setUser(username);
    } else if (username == "" && password == "") {
      alert("Please fill out the text fields.");
    } else {
      alert("Invalid username and password.");      
    }
  };

  return (
    <div className="app-container">
      {!user ? (
        <LoginForm onLogin={handleLogin} />
      ) : (
        <WelcomeMessage username={user} />
      )}
    </div>
  );
}

export default App;
