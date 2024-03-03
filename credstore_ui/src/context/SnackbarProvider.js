// SnackbarProvider.js

import React, { createContext, useContext, useState } from "react";
import SnackbarMessage from "../components/SnackbarMessage";

const SnackbarContext = createContext();

export const useSnackbar = () => {
  return useContext(SnackbarContext);
};

export const SnackbarProvider = ({ children }) => {
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
    anchorOrigin: { vertical: "top", horizontal: "center" },
  });

  const showSnackbar = (
    message,
    severity = "success",
    anchorOrigin = { vertical: "top", horizontal: "center" }
  ) => {
    setSnackbar({
      open: true,
      message,
      severity,
      anchorOrigin,
    });
  };

  const hideSnackbar = () => {
    setSnackbar((prev) => ({
      ...prev,
      open: false,
    }));
  };

  return (
    <SnackbarContext.Provider value={showSnackbar}>
      {children}
      {/* Reusable SnackbarMessage component */}
      <SnackbarMessage {...snackbar} onClose={hideSnackbar} />
    </SnackbarContext.Provider>
  );
};
