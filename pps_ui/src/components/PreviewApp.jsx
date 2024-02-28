// src/components/PreviewApp.jsx

import React from "react";
import { useMatch } from "react-router-dom";
import { Button, Box, Typography } from "@mui/material";

const PreviewApp = () => {
  // Dynamically create the URL based on the appName
  const match = useMatch("/ppapps/preview/:appName");
  const appName = match.params.appName;
  let appUrl;
  switch (appName) {
    case "CredStore":
      appUrl = "http://localhost:3000/";
      break;
    case "AnotherApp":
      appUrl = "http://localhost:3000/";
      break;
    // Add more cases as needed
    default:
      appUrl = "";
  }
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="flex-start" // Align to the top
      minHeight="70vh"
    >
      <Typography variant="h5">
        You are seeing the preview of the {appName} App
      </Typography>
      <Typography variant="body1">
        Customize {appName} App to match your requirements.{" "}
        <Button variant="contained" color="primary">
          Customize
        </Button>
      </Typography>

      <iframe
        title={appName}
        src={appUrl}
        width="90%"
        height="500px"
        frameBorder="0"
        scrolling="auto"
      ></iframe>
    </Box>
  );
};

export default PreviewApp;
