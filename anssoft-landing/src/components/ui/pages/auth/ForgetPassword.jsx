import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Navbar } from "../../Navbar";

/**
 * ForgotPassword Component
 * - Renders a form for users to enter their email address to reset their password.
 * - Displays a success message upon form submission.
 *
 * Suggestions for Backend Integration:
 * - Replace the simulated success message with an API call to your backend's password reset endpoint.
 * - Use an HTTP client (e.g., Axios or Fetch) to POST the email address.
 * - Handle various responses from the backend (e.g., email not found, server errors) and display appropriate messages.
 * - Ensure to implement rate limiting and other security measures on your backend for password reset requests.
 */

const ForgotPassword = () => {
    const { t } = useTranslation();
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    /**
     * handleSubmit:
     * - Handles the form submission for password reset.
     * - Prevents the default form submission behavior.
     * - Simulates a successful password reset request by setting a message.
     *
     * Suggestions for Backend Integration:
     * - Replace the simulated response with an API call to your backend.
     * - For example:
     *
     *   fetch('/api/forgot-password', {
     *     method: 'POST',
     *     headers: { 'Content-Type': 'application/json' },
     *     body: JSON.stringify({ email }),
     *   })
     *     .then(response => response.json())
     *     .then(data => {
     *       if(data.success) {
     *         setMessage(t("forgotPassword.successMessage"));
     *       } else {
     *         // Display error message from backend
     *         setMessage(data.error);
     *       }
     *     })
     *     .catch(error => {
     *       // Handle network or other errors
     *       console.error("Error during password reset:", error);
     *       setMessage(t("forgotPassword.errorMessage"));
     *     });
     *
     * - Also, consider adding client-side validations before sending the request.
     */

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(t("forgotPassword.successMessage"));
    };

    return (
        <>
            <Navbar />
            <motion.div
                className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-gray-900 to-black text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <h2 className="text-3xl font-bold mb-6">{t("forgotPassword.title")}</h2>
                <form className="bg-black/[0.8] p-8 rounded-lg shadow-lg w-80" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm mb-1">{t("forgotPassword.email")}</label>
                        <input
                            type="email"
                            name="email"
                            className="w-full p-2 bg-gray-800 rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded text-white font-bold"
                    >
                        {t("forgotPassword.button")}
                    </button>
                    {message && <p className="text-green-400 mt-4 text-center">{message}</p>}
                    <p className="text-center text-sm mt-4">
                        <Link to="/login" className="text-blue-400 hover:underline">{t("forgotPassword.backToLogin")}</Link>
                    </p>
                </form>
            </motion.div>
        </>
    );
};

export default ForgotPassword;
