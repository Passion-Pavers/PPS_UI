// Header.js
import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

const Header = () => {
  return (
    <Box sx={{ textAlign: "center", p: 4 }}>
      <img
        src="/pps_logo.png"
        alt="PPS Logo"
        style={{ maxWidth: "80%", marginBottom: "20px" }}
      />
      <Typography variant="h4" gutterBottom>
        Passion Pavers Services (PPS)
      </Typography>
      <Typography variant="subtitle1" color="textSecondary">
        "Path to build your Passion"
      </Typography>
      <Typography variant="body1" mt={2}>
        We are Passion Pavers Services (PPS), dedicated to building digital
        experiences and beautiful websites. Our mission is to help companies
        transform their digital presence through a combination of beautiful
        design and innovative technology. Let us pave the path to showcase your
        passion and elevate your online presence.
      </Typography>
    </Box>
  );
};

export default Header;
