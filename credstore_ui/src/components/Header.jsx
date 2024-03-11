// src/components/Header.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import styled from "@mui/system/styled";
import { useAuth } from "../context/AuthContext";

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  margin: 0 10px;
  padding: 8px;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const { logout } = useAuth();
  const authToken = window.localStorage.getItem("authToken");

  const handleClick = (event) => {
    if (authToken) {
      setMenuItems([
        { path: "/profile", label: "Profile" },
        { path: "/mycreds", label: "My Creds" },
        { path: "/contact", label: "Contact Us" },
        { path: "/login", label: "Logout", action: logout },
      ]);
    } else {
      setMenuItems([
        { path: "/mycreds", label: "My Creds" },
        { path: "/login", label: "Login" },
        { path: "/register", label: "Register" },
        { path: "/aboutus", label: "About Us" },
      ]);
    }
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Cred Store
        </Typography>
        {/* Always visible in the header */}
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/mycreds">My Creds</StyledLink>
        {!authToken && (
          <>
            <StyledLink to="/login">Login</StyledLink>
            <StyledLink to="/register">Register</StyledLink>
          </>
        )}
        <StyledLink to="/aboutus">About Us</StyledLink>
        <IconButton
          size="large"
          edge="end"
          color="inherit"
          onClick={handleClick}
        >
          <MenuIcon />
        </IconButton>
        {/* Visible in the hamburger menu */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {menuItems.map((item) => (
            <MenuItem key={item.label} onClick={handleClose}>
              <StyledLink to={item.path} onClick={item.action || (() => {})}>
                {item.label}
              </StyledLink>
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
