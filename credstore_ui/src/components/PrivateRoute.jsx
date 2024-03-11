// src/components/PrivateRoute.js

import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
  //const { authToken } = useAuth();
  const authToken = window.localStorage.getItem("authToken");

  if (!authToken) {
    window.sessionStorage.setItem("previousPath", window.location.pathname);
    return <Navigate to="/login" />;
  } else {
    window.sessionStorage.removeItem("previousPath");
    return <Outlet />;
  }
};

export default PrivateRoute;
