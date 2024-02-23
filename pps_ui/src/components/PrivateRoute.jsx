// src/components/PrivateRoute.js

import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
  //const { authToken } = useAuth();
  const authToken = window.localStorage.getItem("authToken");
  return authToken ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
