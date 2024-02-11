import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  CssBaseline,
  Box,
  Typography,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";
import loginService from "../services/login";

const RegistrationForm = ({ onRegistrationSuccess, onRegistrationFailure }) => {
  const [registrationRequest, setRegistrationRequest] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
  });

  const handleRegistrationRequestChange = (e) => {
    const { name, value } = e.target;
    setRegistrationRequest({
      ...registrationRequest,
      [name]: value,
    });
  };

  const handleRegistration = async (event) => {
    event.preventDefault();
    try {
      const registerResponse = await loginService.register(registrationRequest);
      const success = registerResponse?.isSuccess;
      console.log("Registration success :", success);
      if (success) {
        onRegistrationSuccess();
      }
    } catch (exception) {
      onRegistrationFailure();
    }
  };
  return (
    <div>
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
            Register
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleRegistration}
            sx={{ mt: 3 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              value={registrationRequest.name}
              onChange={handleRegistrationRequestChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              type="email"
              value={registrationRequest.email}
              onChange={handleRegistrationRequestChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="phoneNumber"
              label="Phone Number"
              name="phoneNumber"
              type="tel"
              value={registrationRequest.phoneNumber}
              onChange={handleRegistrationRequestChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              label="Password"
              name="password"
              type="password"
              value={registrationRequest.password}
              onChange={handleRegistrationRequestChange}
            />
            <FormControl fullWidth margin="normal" required>
              <InputLabel id="role-label">Role</InputLabel>
              <Select
                labelId="role-label"
                id="role"
                name="role"
                value={registrationRequest.role}
                onChange={handleRegistrationRequestChange}
              >
                <MenuItem value="admin">Admin</MenuItem>
                <MenuItem value="user">User</MenuItem>
              </Select>
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default RegistrationForm;
