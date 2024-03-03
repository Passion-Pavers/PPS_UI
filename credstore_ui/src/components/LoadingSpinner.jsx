// src/components/LoadingSpinner.jsx
import React from "react";
import { CircularProgress, Box } from "@mui/material";
import { useLoading } from "../context/LoadingContext";

const LoadingSpinner = () => {
  const { loading } = useLoading();

  return loading ? (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100%"
      position="fixed"
      top={0}
      left={0}
      right={0}
      bottom={0}
      zIndex={9999}
      backgroundColor="rgba(255, 255, 255, 0.7)"
    >
      <CircularProgress />
    </Box>
  ) : null;
};

export default LoadingSpinner;
