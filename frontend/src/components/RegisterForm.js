import React, { useState } from "react";
import axios from "axios"; // Import Axios for making HTTP requests
import { Link } from "react-router-dom";
import "./RegisterForm.css";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    passwordError: "",
    phoneError: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Only allow numbers in the phone number field
    if (name === "phone" && isNaN(value)) {
      return;
    }

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

    if (name === "phone") {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.phone.length !== 10) {
        setErrors({
          ...errors,
          phoneError: "Phone number must contain exactly 10 digits",
        });
        return; // Exit early if phone number is not valid
      }
      // Additional validation logic if needed

      const response = await axios.post(
        "http://localhost:8080/api/auth/register",
        formData
      );
      console.log(response.data);
      setSuccessMessage("Registration successful!");
    } catch (error) {
      console.error(error);
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        if (error.response.data.errors && error.response.data.errors.phone) {
          setErrors({
            ...errors,
            phoneError: error.response.data.errors.phone.message,
          });
        }
      } else if (error.request) {
        // The request was made but no response was received
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
    }
  };

  const handleLabelClick = (e) => {
    const inputId = e.target.htmlFor;
    document.getElementById(inputId).focus();
  };

  return (
    <div className="register-form-container">
      <br /> <br />
      <br /> <br />
      <div className="register-form">
        <br />
        <h2>Register</h2>
        {successMessage && <p className="success-message">{successMessage}</p>}
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
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className={formData.phone ? "active" : ""}
                required // Add the required attribute
              />

              <label htmlFor="phone" onClick={handleLabelClick}>
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
          Already have an account?{" "}
          <Link to="/" style={{ textDecoration: "underline", color: "pink" }}>
            <span style={{ textDecoration: "none" }}>Login</span>
          </Link>
        </p>
      </div>
      <br /> <br />
      <br /> <br />
    </div>
  );
};

export default RegisterForm;
