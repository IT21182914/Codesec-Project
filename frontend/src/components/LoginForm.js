// src/components/LoginForm.js

import React, { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/login", {
        username,
        password,
      });
      // Handle successful login (e.g., store token in local storage, redirect to dashboard)
    } catch (error) {
      console.error(error);
      // Handle login error (e.g., display error message)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        style={{ backgroundColor: "#F56A9C", color: "white" }}
        type="submit"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
