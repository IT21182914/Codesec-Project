// RegisterForm.js

import React, { useState } from "react";
import "./RegisterForm.css";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    passwordError: "",
    phoneError: "",
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

    if (name === "phoneNumber") {
      const re = /^[0-9\b]+$/;
      if (value.length > 10 || !re.test(value)) {
        setErrors({
          ...errors,
          phoneError: "Phone number must be numeric and contain 10 digits",
        });
      } else {
        setErrors({
          ...errors,
          phoneError: "",
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
    // Add your registration logic here
    console.log(formData);
  };

  return (
    <div className="register-form">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="column">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
            />
            <label>First Name</label>
          </div>
          <div className="gap" />
          <div className="empty-space" />
          <div className="column">
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
            />
            <label>Last Name</label>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
            />
            <label>Email</label>
          </div>
          <div className="gap" />
          <div className="empty-space" />
          <div className="column">
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
            />
            <label>Phone Number</label>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
            />
            <label>Password</label>
            {errors.passwordError && (
              <span className="error">{errors.passwordError}</span>
            )}
          </div>
          <div className="gap" />
          <div className="empty-space" />
          <div className="column">
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
            />
            <label>Confirm Password</label>
          </div>
        </div>
        <button type="submit" className="submit-button">
          Create Account
        </button>
      </form>
      <p className="login-link">
        Already have an account? <span>Login</span>
      </p>
    </div>
  );
};

export default RegisterForm;
