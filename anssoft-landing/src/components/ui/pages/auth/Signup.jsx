import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "../../Navbar";


/**
 * Signup Component
 * - Renders a signup form where users can create a new account.
 * - Includes form fields for name, email, password, and confirm password.
 *
 * Suggestions for Backend Integration:
 * - Instead of directly storing an auth flag in localStorage, send a POST request to your backend's signup endpoint.
 * - Handle server responses, errors, and validations on the backend.
 * - Upon successful signup, receive a token and store it securely (e.g., using HTTP-only cookies or secure storage).
 * - Consider using libraries like Axios for HTTP requests and handling interceptors for token refresh.
 */

const Signup = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  // State to manage form data for the signup form.
  const [formData, setFormData] = useState({ name: "", email: "", password: "", confirmPassword: "" });

  /**
   * handleChange:
   * - Updates the formData state when any input field changes.
   *
   
   */

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /**
   * handleSubmit:
   * - Handles form submission, validates that passwords match, and performs signup.
   *
   * Suggestions for Backend Integration:
   * - Replace the localStorage auth flag with an API call to your signup endpoint.
   * - For example, use fetch or axios to post formData to your server.
   * - Process the server response to handle errors or success.
   * - Store the received authentication token securely.
   */

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple client-side validation for password matching.
    if (formData.password === formData.confirmPassword) {

      // TODO: Replace the following localStorage logic with a backend API call.
      // Example:
      // axios.post('/api/signup', formData)
      //   .then(response => {
      //     // On success, store the token securely (consider HTTP-only cookies)
      //     // and navigate to the dashboard.
      //     navigate("/dashboard");
      //   })
      //   .catch(error => {
      //     // Handle error responses (e.g., show error messages to the user)
      //     console.error("Signup error:", error);
      //   });
      
      // For now, simply mark the user as authenticated and navigate to the dashboard.
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
        <h2 className="text-3xl font-bold mb-6">{t("signup.title")}</h2>
        <form className="bg-black/[0.8] p-8 rounded-lg shadow-lg w-80" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm mb-1">{t("signup.name")}</label>
            <input 
              type="text" 
              name="name" 
              className="w-full p-2 bg-gray-800 rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.name} 
              onChange={handleChange} 
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-1">{t("signup.email")}</label>
            <input 
              type="email" 
              name="email" 
              className="w-full p-2 bg-gray-800 rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.email} 
              onChange={handleChange} 
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-1">{t("signup.password")}</label>
            <input 
              type="password" 
              name="password" 
              className="w-full p-2 bg-gray-800 rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.password} 
              onChange={handleChange} 
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-1">{t("signup.confirmPassword")}</label>
            <input 
              type="password" 
              name="confirmPassword" 
              className="w-full p-2 bg-gray-800 rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.confirmPassword} 
              onChange={handleChange} 
              required
            />
          </div>
          <button 
            type="submit" 
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded text-white font-bold"
          >
            {t("signup.button")}
          </button>
          <p className="text-center text-sm mt-4">
            {t("signup.haveAccount")} <Link to="/login" className="text-blue-400 hover:underline">{t("signup.login")}</Link>
          </p>
        </form>
      </motion.div>
    </>
  );
};

export default Signup;
