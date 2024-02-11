// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { Container, Box, Typography, Button } from "@mui/material";
// import theme from "./theme";
// import CssBaseline from "@mui/material/CssBaseline";
// import { useState, useEffect } from "react";
// import "./App.css";
// import Notification from "./components/Notification";
// import Footer from "./components/Footer";
// import loginService from "./services/login";
// import ppAppsService from "./services/ppapps";
// import PpHome from "./components/PpHome";
// import LoginForm from "./components/LoginForm";
// import RegistrationForm from "./components/RegistrationForm";
// import LandingPage from "./components/LandingPage";
// import Header from "./components/Header";

// // const theme = createTheme({
// //   palette: {
// //     primary: {
// //       main: "#1976d2",
// //     },
// //     secondary: {
// //       main: "#f50057",
// //     },
// //   },
// // });

// const App = () => {
//   const [user, setUser] = useState(null);
//   const [displayLogin, setDisplayLogin] = useState(true);
//   const [displayRegistration, setDisplayRegistration] = useState(false);
//   const [showLoginForm, setShowLoginForm] = useState(true);

//   const toggleForm = () => {
//     setShowLoginForm(!showLoginForm);
//   };
//   const [message, setMessage] = useState({
//     messageContent: null,
//     error: false,
//   });
//   const [registrationRequest, setRegistrationRequest] = useState({
//     name: "",
//     email: "",
//     phoneNumber: "",
//     password: "",
//     role: "",
//   });
//   const [loginRequest, setLoginRequest] = useState({
//     userName: "",
//     password: "",
//   });

//   const handleRegistrationRequestChange = (e) => {
//     const { name, value } = e.target;
//     setRegistrationRequest({
//       ...registrationRequest,
//       [name]: value,
//     });
//   };

//   const handleLoginRequestChange = (e) => {
//     const { name, value } = e.target;
//     setLoginRequest({
//       ...loginRequest,
//       [name]: value,
//     });
//   };

//   const handleRegistration = async (event) => {
//     event.preventDefault();
//     try {
//       const registerResponse = await loginService.register(registrationRequest);
//       const success = registerResponse?.isSuccess;
//       console.log("Registration success :", success);
//       setRegistrationRequest({
//         name: "",
//         email: "",
//         phoneNumber: "",
//         password: "",
//         role: "",
//       });
//       if (success) {
//         setMessage({ messageContent: "Registration Successful", error: false });
//         setTimeout(() => {
//           setMessage({ messageContent: null, error: false });
//         }, 5000);
//       }
//     } catch (exception) {
//       setMessage({ messageContent: "Registration Failed", error: false });
//       setTimeout(() => {
//         setMessage({ messageContent: null, error: false });
//       }, 5000);
//     }
//   };

//   const handleLogin = async (event) => {
//     event.preventDefault();

//     try {
//       const loginResponse = await loginService.login(loginRequest);
//       const user = loginResponse?.result;
//       window.localStorage.setItem("loggedNoteappUser", JSON.stringify(user));
//       console.log("Login success- Token from login", user);
//       ppAppsService.setToken(user.token);
//       setUser(user);
//       setLoginRequest({
//         userName: "",
//         password: "",
//       });
//     } catch (exception) {
//       setMessage({ messageContent: "Wrong credentials", error: true });
//       setTimeout(() => {
//         setMessage({ messageContent: null, error: false });
//       }, 5000);
//     }
//   };

//   const handleLogout = () => {
//     window.localStorage.clear();
//     setUser(null);
//     setDisplayLogin(true);
//     setDisplayRegistration(false);
//   };

//   const redirectToRegister = () => {
//     setDisplayRegistration(true);
//     setDisplayLogin(false);
//   };

//   const redirectToLogin = () => {
//     setDisplayRegistration(false);
//     setDisplayLogin(true);
//   };

//   useEffect(() => {
//     const loggedUserJSON = window.localStorage.getItem("loggedNoteappUser");
//     if (loggedUserJSON) {
//       const user = JSON.parse(loggedUserJSON);
//       setUser(user);
//       console.log("loggedUserJSON from localStorage", user);
//       ppAppsService.setToken(user.token);
//     }
//   }, []);

//   return (
//     <ThemeProvider theme={theme}>
//       <Container maxWidth="xl" sx={{ display: "flex", height: "100vh" }}>
//         <Box sx={{ width: "60%", p: 4, boxSizing: "border-box" }}>
//           <Header />
//         </Box>
//         <Box
//           sx={{
//             flex: 1,
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           {showLoginForm ? (
//             <LoginForm
//               loginRequest={loginRequest}
//               handleLoginRequestChange={handleLoginRequestChange}
//               handleLogin={handleLogin}
//             />
//           ) : (
//             <RegistrationForm
//               registrationRequest={registrationRequest}
//               handleRegistrationRequestChange={handleRegistrationRequestChange}
//               handleRegistration={handleRegistration}
//             />
//           )}
//           <Box sx={{ mt: 2 }}>
//             <Typography>
//               {showLoginForm
//                 ? "Don't have an account?"
//                 : "Already have an account?"}
//               <Button onClick={toggleForm} color="primary">
//                 {showLoginForm ? "Register" : "Login"}
//               </Button>
//             </Typography>
//           </Box>
//         </Box>

//         {/* {false && (
//           <div>
//             <h2>Passion Paver Services</h2>
//             {message.messageContent && <Notification message={message} />}
//             {!user && displayLogin && (
//               <div className="registration-form-container"></div>
//             )}
//             {!user && displayRegistration && (
//               <div className="registration-form-container">
//                 <RegistrationForm
//                   registrationRequest={registrationRequest}
//                   handleRegistrationRequestChange={
//                     handleRegistrationRequestChange
//                   }
//                   handleRegistration={handleRegistration}
//                   redirectToLogin={redirectToLogin}
//                 />
//               </div>
//             )}
//             {user && (
//               <div>
//                 <p>{user?.user?.name} logged in</p>
//                 <PpHome handleLogout={handleLogout} />
//               </div>
//             )}

//             <Footer />
//           </div>
//         )} */}
//       </Container>
//     </ThemeProvider>
//   );
// };

// export default App;

// App.js
import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import {
  Container,
  Box,
  Button,
  Typography,
  Snackbar,
  IconButton,
  AppBar,
  Toolbar,
} from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";
import Header from "./components/Header";
import PpsApps from "./components/PpsApps";
import theme from "./theme"; // Import your custom theme

function App() {
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [notification, setNotification] = useState({
    open: false,
    message: "",
    color: "",
  });

  const toggleForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  const handleLoginSuccess = () => {
    setLoggedIn(true);
  };

  const handleRegistrationSuccess = () => {
    setNotification({
      open: true,
      message: "Registration Successful",
      color: "green",
    });
    setShowLoginForm(true); // Display the login form after successful registration
  };

  const handleRegistrationFailure = () => {
    setNotification({
      open: true,
      message: "Registration Failed, Please try again",
      color: "red",
    });
  };

  const handleLoginFailure = () => {
    setNotification({
      open: true,
      message: "Login Failed, Please check your credentials",
      color: "red",
    });
  };

  const handleLogout = () => {
    window.localStorage.clear();
    setLoggedIn(false);
    setShowLoginForm(true);
  };

  const handleCloseNotification = () => {
    setNotification({ ...notification, open: false });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" sx={{ display: "flex", height: "100vh" }}>
        <Box sx={{ width: "60%", p: 4, boxSizing: "border-box" }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                PPS
              </Typography>
              {isLoggedIn && (
                <Button color="inherit" onClick={handleLogout}>
                  Logout
                </Button>
              )}
            </Toolbar>
          </AppBar>
          <Header />
        </Box>
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {isLoggedIn ? (
            <PpsApps />
          ) : (
            <>
              {showLoginForm ? (
                <LoginForm
                  onLoginSuccess={handleLoginSuccess}
                  onLoginFailure={handleLoginFailure}
                />
              ) : (
                <RegistrationForm
                  onRegistrationSuccess={handleRegistrationSuccess}
                  onRegistrationFailure={handleRegistrationFailure}
                />
              )}
              <Box sx={{ mt: 2 }}>
                <Typography>
                  {showLoginForm
                    ? "Don't have an account? Please "
                    : "Already have an account? Please "}
                  <Button onClick={toggleForm} color="primary">
                    {showLoginForm ? "Register" : "Login"}
                  </Button>
                </Typography>
              </Box>
            </>
          )}
          <Snackbar
            open={notification.open}
            autoHideDuration={6000}
            onClose={handleCloseNotification}
            message={notification.message}
            action={
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleCloseNotification}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            }
            sx={{ backgroundColor: notification.color }}
          />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
