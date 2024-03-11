// src/components/NoAuthRequiredRoute.jsx

import React from "react";
import { Outlet } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const NoAuthRequiredRoute = () => {
  const authToken = window.localStorage.getItem("authToken");
  return authToken ? (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open="true"
      autoHideDuration={6000}
    >
      <Alert severity="error" sx={{ width: "100%" }}>
        <b>Invalid path! Please go to Home</b>
      </Alert>
    </Snackbar>
  ) : (
    <Outlet />
  );
};

export default NoAuthRequiredRoute;
