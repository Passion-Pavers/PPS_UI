// src/components/Footer.jsx

import React from "react";
import { Typography, Link, Paper, Grid } from "@mui/material";
import { styled } from "@mui/system";

const StyledFooter = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginTop: theme.spacing(2),
  backgroundColor: theme.palette.primary.main, // Set your desired background color
  color: theme.palette.primary.contrastText, // Set your desired text color
  width: "100%",
}));

const Footer = () => {
  return (
    <StyledFooter elevation={5}>
      <Grid container justifyContent="space-between">
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom>
            Cred Store
          </Typography>
          <Typography variant="caption" gutterBottom>
            One store for all your Credentials @2024
          </Typography>
          <Typography>Your address goes here.</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom>
            Contact Us
          </Typography>
          <Typography>Email: your.email@example.com</Typography>
          <Link href="/contact" color="inherit">
            Contact Form
          </Link>
        </Grid>
      </Grid>
    </StyledFooter>
  );
};

export default Footer;
