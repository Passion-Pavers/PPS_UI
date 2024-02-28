// Registration.js

import React, { useState } from "react";
import {
  TextField,
  Button,
  Paper,
  Grid,
  InputAdornment,
  IconButton,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import loginService from "../services/authService";
import { useSnackbar } from "../context/SnackbarProvider";
import LoadingSpinner from "./LoadingSpinner";
import { useLoading } from "../context/LoadingContext";

const Registration = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    showPassword: false,
  });
  const { showLoading, hideLoading } = useLoading();
  const navigate = useNavigate();
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

  const handleRegistration = async (event) => {
    showLoading();
    event.preventDefault();

    try {
      // Assuming you want to create a registrationRequest object
      const registrationRequest = {
        name: values.firstName + values.lastName,
        email: values.email,
        phoneNumber: values.phoneNumber,
        password: values.password,
        role: values.role,
      };

      // Add your logic to handle the registration request
      console.log("Registration Request:", registrationRequest);
      const registerResponse = await loginService.register(registrationRequest);
      const success = registerResponse?.data?.isSuccess;
      console.log("Registration success :", success);
      if (registerResponse.status === 200) {
        // Show Success Snackbar
        showSnackbar("Registration successful! Please Login", "success");
        // Redirect to the login page after successful registration
        // Delay navigation slightly to ensure Snackbar is displayed
        setTimeout(() => {
          navigate("/login");
        }, 250);
      }
    } catch (error) {
      console.error("Registration error:", error);
      const errorMessage = error?.response?.data?.message
        ? error.response.data.message
        : "Registration failed. Please try again.";
      // Show Error Snackbar
      showSnackbar(errorMessage, "error");
    } finally {
      setTimeout(() => {
        hideLoading();
      }, 250);
    }
  };

  return (
    <>
      <Paper
        elevation={3}
        style={{ padding: 16, maxWidth: 400, margin: "auto", marginTop: 50 }}
      >
        <form onSubmit={handleRegistration}>
          <h2>Registration</h2>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                label="First Name"
                variant="outlined"
                fullWidth
                margin="normal"
                value={values.firstName}
                required
                onChange={handleChange("firstName")}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Last Name"
                variant="outlined"
                fullWidth
                margin="normal"
                value={values.lastName}
                required
                onChange={handleChange("lastName")}
              />
            </Grid>
          </Grid>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            type="email"
            value={values.email}
            required
            onChange={handleChange("email")}
          />
          <TextField
            label="Phone Number"
            variant="outlined"
            fullWidth
            margin="normal"
            type="tel"
            value={values.phoneNumber}
            required
            onChange={handleChange("phoneNumber")}
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            margin="normal"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            required
            onChange={handleChange("password")}
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
          <FormControl fullWidth margin="normal" variant="outlined">
            <InputLabel htmlFor="role" required>
              Role
            </InputLabel>
            <Select
              label="Role"
              id="role"
              value={values.role}
              onChange={handleChange("role")}
            >
              <MenuItem value="" disabled>
                Select Role
              </MenuItem>
              <MenuItem value="admin">Admin</MenuItem>
              <MenuItem value="user">User</MenuItem>
            </Select>
          </FormControl>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Register
          </Button>
        </form>
      </Paper>
      <LoadingSpinner />
    </>
  );
};

export default Registration;
