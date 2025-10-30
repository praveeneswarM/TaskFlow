import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem("token"); // or any auth flag you store
  return isLoggedIn ? children : <Navigate to="/login" replace />;
}

export default ProtectedRoute;