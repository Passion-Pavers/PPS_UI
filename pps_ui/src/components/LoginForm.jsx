// Login.js
import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  CssBaseline,
  Box,
  Typography,
} from "@mui/material";
import loginService from "../services/login";
import ppAppsService from "../services/ppapps";

const LoginForm = ({ onLoginSuccess, onLoginFailure }) => {
  const [loginRequest, setLoginRequest] = useState({
    userName: "",
    password: "",
  });

  const handleLoginRequestChange = (e) => {
    const { name, value } = e.target;
    setLoginRequest({
      ...loginRequest,
      [name]: value,
    });
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    if (loginRequest.userName && loginRequest.password) {
      try {
        const loginResponse = await loginService.login(loginRequest);
        const user = loginResponse?.result;
        window.localStorage.setItem("loggedInUser", JSON.stringify(user));
        console.log("Login success- Token from login", user);
        ppAppsService.setToken(user.token);
        onLoginSuccess();
      } catch (exception) {
        onLoginFailure();
      }
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box component="form" noValidate onSubmit={handleLogin} sx={{ mt: 3 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="userName"
            label="Username"
            name="userName"
            value={loginRequest.userName}
            onChange={handleLoginRequestChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="password"
            label="Password"
            name="password"
            type="password"
            value={loginRequest.password}
            onChange={handleLoginRequestChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginForm;
