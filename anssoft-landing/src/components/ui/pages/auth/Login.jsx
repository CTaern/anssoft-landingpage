import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "../../Navbar";


/**
 * Login Component
 * - Renders a login form that accepts email and password.
 * - On successful login, sets an auth flag and navigates to the dashboard.
 *
 * Suggestions for Backend Integration:
 * - Replace the localStorage-based auth flag with an API-based authentication process.
 * - Make a POST request to your backend login endpoint with the form data.
 * - On a successful response, securely store the token (e.g., in HTTP-only cookies) and navigate to the dashboard.
 * - Handle error responses from the backend and display user-friendly error messages.
 */

const Login = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  /**
   * handleChange:
   * - Updates form data state when an input value changes.
   */
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  /**
   * handleSubmit:
   * - Handles the login form submission.
   * - Validates the form and logs the user in.
   *
   * Suggestions for Backend Integration:
   * - Instead of directly setting a localStorage flag, send a POST request with formData to your backend login endpoint.
   * - Example:
   *     axios.post('/api/login', formData)
   *       .then(response => {
   *         // Store token securely (e.g., in HTTP-only cookies) and navigate to the dashboard.
   *         navigate("/dashboard");
   *       })
   *       .catch(error => {
   *         // Handle errors (e.g., show error message to the user).
   *         console.error("Login failed:", error);
   *       });
   * - Always validate the response on the server and handle errors appropriately.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
     // Basic client-side validation.
    if (formData.email && formData.password) {
      // TODO: Replace the following temporary authentication logic with a backend API call.
      localStorage.setItem("auth", "true"); // Store authentication state
      navigate("/dashboard");
    }
  };

  return (
    <>
      <Navbar />
      <motion.div 
        className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-gray-900 to-black text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h2 className="text-3xl font-bold mb-6">{t("login.title")}</h2>
        <form className="bg-black/[0.8] p-8 rounded-lg shadow-lg w-80" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm mb-1">{t("login.email")}</label>
            <input 
              type="email" 
              name="email" 
              className="w-full p-2 bg-gray-800 rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.email} 
              onChange={handleChange} 
              required
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm mb-1">{t("login.password")}</label>
            <input 
              type="password" 
              name="password" 
              className="w-full p-2 bg-gray-800 rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.password} 
              onChange={handleChange} 
              required
            />
          </div>
          <div className="mb-4 text-right">
            <Link to="/forgot-password" className="text-blue-400 text-sm hover:underline">{t("login.forgotPassword")}</Link>
          </div>
          <button 
            type="submit" 
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded text-white font-bold"
          >
            {t("login.button")}
          </button>
          <p className="text-center text-sm mt-4">
            {t("login.noAccount")} <Link to="/signup" className="text-blue-400 hover:underline">{t("login.signup")}</Link>
          </p>
        </form>
      </motion.div>
    </>
  );
};

export default Login;
