import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute"; // Importing the extracted ProtectedRoute
import "./index.css"; // Tailwind CSS styles

// Lazy load components for code splitting

// For SplineSceneBasic (a named export), we lazy load by converting it into a default export.
const SplineSceneBasic = lazy(() =>
  import("./components/ui/code.demo.jsx").then(module => ({ default: module.SplineSceneBasic }))
);

// Lazy loaded page components
const AboutPage = lazy(() => import("./components/ui/pages/AboutPage.jsx"));
const ServicesPage = lazy(() => import("./components/ui/pages/ServicesPage.jsx"));
const ProductsPage = lazy(() => import("./components/ui/pages/ProductsPage.jsx"));
const NotFoundPage = lazy(() => import("./components/ui/pages/NotFoundPage.jsx"));
const Signup = lazy(() => import("./components/ui/pages/auth/Signup.jsx"));
const Login = lazy(() => import("./components/ui/pages/auth/Login.jsx"));
const Dashboard = lazy(() => import("./components/ui/pages/dashboard/Dashboard.jsx"));
const ForgotPassword = lazy(() => import("./components/ui/pages/auth/ForgetPassword.jsx"));

function App() {
  return (
    // Enable client-side routing
    <BrowserRouter>
      {/* Suspense displays fallback UI ("Loading...") until lazy components are loaded */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Landing Page Scroll Routes */}
          <Route path="/" element={<SplineSceneBasic />} />
          <Route path="whatarewe" element={<SplineSceneBasic />} />
          <Route path="whatwedo" element={<SplineSceneBasic />} />
          <Route path="solutions" element={<SplineSceneBasic />} />
          <Route path="contact" element={<SplineSceneBasic />} />

          {/* Separate Content Pages */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/products" element={<ProductsPage />} />

          {/* Authentication Pages */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* Protected Dashboard Route */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          {/* 404 Not Found Route */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
