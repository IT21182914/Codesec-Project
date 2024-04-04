import React, { useState } from "react";
import "./LoginForm.css";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    passwordError: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "password") {
      if (value.length < 6) {
        setErrors({
          ...errors,
          passwordError: "Password must have at least 6 characters",
        });
      } else {
        setErrors({
          ...errors,
          passwordError: "",
        });
      }
    }
  };

  const handleFocus = (e) => {
    e.target.parentElement.classList.add("active");
  };

  const handleBlur = (e) => {
    if (!e.target.value.trim()) {
      e.target.parentElement.classList.remove("active");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log(formData);
  };

  const handleLabelClick = (e) => {
    const inputId = e.target.htmlFor;
    document.getElementById(inputId).focus();
  };

  return (
    <div className="login-form-container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="column">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className={formData.email ? "active" : ""}
                required
              />
              <label htmlFor="email" onClick={handleLabelClick}>
                Email
              </label>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className={formData.password ? "active" : ""}
                required
              />
              <label htmlFor="password" onClick={handleLabelClick}>
                Password
              </label>
              {errors.passwordError && (
                <span className="error">{errors.passwordError}</span>
              )}
            </div>
          </div>
          <button type="submit" className="submit-button">
            SIGN IN
          </button>
        </form>
        <p className="register-link">
          Don't have an account? <span>Create an account</span>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
