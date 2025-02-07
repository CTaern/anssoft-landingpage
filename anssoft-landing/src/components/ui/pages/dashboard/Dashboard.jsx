import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../../Navbar";

const Dashboard = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  /**
   * handleLogout:
   * - Clears client-side authentication state.
   * - Navigates the user to the login page.
   *
   * Suggestions for backend integration:
   * - Instead of only removing the auth flag from localStorage, consider making an API call
   *   to a backend logout endpoint to invalidate the user's session or token.
   * - Handle errors from the backend logout call and provide user feedback.
   * - Use secure HTTP-only cookies or token management libraries for a more robust solution.
   */

  const handleLogout = () => {
    // Remove the authentication flag from localStorage.
    localStorage.removeItem("auth"); // Remove authentication state

    // Suggested Backend Integration:
    // Uncomment and adjust the following code to integrate with your backend logout API.
    //
    // fetch('/api/logout', {
    //   method: 'POST',
    //   credentials: 'include', // Include cookies if using them for authentication.
    // })
    //   .then(response => {
    //     if (response.ok) {
    //       // Successful logout, navigate to login page.
    //       navigate("/login");
    //     } else {
    //       // Handle errors returned by the backend.
    //       console.error("Failed to log out on the backend.");
    //     }
    //   })
    //   .catch(error => {
    //     // Handle network or other errors.
    //     console.error("Logout error:", error);
    //   });
    //
    // For now, simply navigate to the login page:
    navigate("/login");
  };

  return (
    <>
      <Navbar />
      <motion.div 
        className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-gray-900 to-black text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h2 className="text-3xl font-bold mb-6">{t("dashboard.welcome")}</h2>
        <p className="text-lg text-gray-300 mb-6">{t("dashboard.description")}</p>
        <button 
          onClick={handleLogout} 
          className="py-2 px-6 bg-red-600 hover:bg-red-700 rounded text-white font-bold"
        >
          {t("dashboard.logout")}
        </button>
      </motion.div>
    </>
  );
};

export default Dashboard;