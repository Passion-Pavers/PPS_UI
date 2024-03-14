// src/components/Footer.jsx

import React from "react";
import { Typography, Link, Paper, Grid } from "@mui/material";
import { styled } from "@mui/system";
import { useAppDispConfig } from "../context/AppDisplayConfigContext";

const StyledFooter = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginTop: theme.spacing(2),
  backgroundColor: theme.palette.primary.main, // Set your desired background color
  color: theme.palette.primary.contrastText, // Set your desired text color
  width: "100%",
}));

const Footer = () => {
  const { appDisplayConfig } = useAppDispConfig();
  return (
    <StyledFooter elevation={5}>
      <Grid container justifyContent="space-between">
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom>
            {appDisplayConfig?.footer?.appName}
          </Typography>
          <Typography variant="caption" gutterBottom>
            {appDisplayConfig?.footer?.appTagLine}
          </Typography>
          <Typography>{appDisplayConfig?.footer?.contactAddress} </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom>
            Contact Us
          </Typography>
          <Typography>
            Email: {appDisplayConfig?.footer?.contactEmail}{" "}
          </Typography>
          <Link href="/contact" color="inherit">
            Contact Form
          </Link>
        </Grid>
      </Grid>
    </StyledFooter>
  );
};

export default Footer;
