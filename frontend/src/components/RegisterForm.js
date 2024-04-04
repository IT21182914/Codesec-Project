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
      if (value.length !== 10 || !re.test(value)) {
        setErrors({
          ...errors,
          phoneError:
            "Phone number must be numeric and contain exactly 10 digits",
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
    if (formData.password !== formData.confirmPassword) {
      setErrors({
        ...errors,
        passwordError: "Passwords do not match",
      });
      return;
    }

    // Add your registration logic here
    console.log(formData);
  };

  const handleLabelClick = (e) => {
    const inputId = e.target.htmlFor;
    document.getElementById(inputId).focus();
  };

  return (
    <div className="register-form">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="column">
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className={formData.firstName ? "active" : ""}
              required
            />
            <label htmlFor="firstName" onClick={handleLabelClick}>
              First Name
            </label>
          </div>
          <div className="gap" />
          <div className="empty-space" />
          <div className="column">
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className={formData.lastName ? "active" : ""}
              required
            />
            <label htmlFor="lastName" onClick={handleLabelClick}>
              Last Name
            </label>
          </div>
        </div>
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
          <div className="gap" />
          <div className="empty-space" />
          <div className="column">
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className={formData.phoneNumber ? "active" : ""}
              required
            />
            <label htmlFor="phoneNumber" onClick={handleLabelClick}>
              Phone Number
            </label>
            {errors.phoneError && (
              <span className="error">{errors.phoneError}</span>
            )}
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
          <div className="gap" />
          <div className="empty-space" />
          <div className="column">
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className={formData.confirmPassword ? "active" : ""}
              required
            />
            <label htmlFor="confirmPassword" onClick={handleLabelClick}>
              Confirm Password
            </label>
            {formData.confirmPassword &&
              formData.password !== formData.confirmPassword && (
                <span className="error">Passwords do not match</span>
              )}
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
