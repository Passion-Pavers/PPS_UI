// src/components/Login.jsx

import React, { useState } from "react";
import {
  TextField,
  IconButton,
  InputAdornment,
  Paper,
  Button,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import loginService from "../services/authService";
import { useSnackbar } from "../context/SnackbarProvider";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";
import { useLoading } from "../context/LoadingContext";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    showPassword: false,
  });
  const { showLoading, hideLoading } = useLoading();

  const navigate = useNavigate();
  const { login } = useAuth();
  const showSnackbar = useSnackbar();

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleLogin = async (event) => {
    showLoading();
    event.preventDefault();
    const loginRequest = {
      userName: values.email,
      password: values.password,
    };
    if (loginRequest.userName && loginRequest.password) {
      try {
        const loginResponse = await loginService.login(loginRequest);
        const user = loginResponse?.data?.result;
        const authToken = user.token;
        login(authToken);
        setTimeout(() => {
          navigate("/ppapps");
        }, 250);
      } catch (error) {
        console.error("Login failure Exception:", error);
        const errorMessage = error?.response?.data?.message
          ? error.response.data.message
          : "Login failed. Please try again";
        // Show Error Snackbar
        showSnackbar(errorMessage, "error");
      } finally {
        setTimeout(() => {
          hideLoading();
        }, 250);
      }
    }
  };

  return (
    <>
      <Paper
        elevation={3}
        style={{ padding: 16, maxWidth: 400, margin: "auto", marginTop: 50 }}
      >
        <form onSubmit={handleLogin}>
          <h2>Login</h2>
          <TextField
            label="User Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={values.email}
            onChange={handleChange("email")}
            required
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            margin="normal"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>
        </form>
      </Paper>
      <LoadingSpinner />
    </>
  );
};

export default Login;
