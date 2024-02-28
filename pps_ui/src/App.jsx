import React from "react";
import { CssBaseline, ThemeProvider, createTheme, Paper } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header1 from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Registration from "./components/Registration";
import { SnackbarProvider } from "./context/SnackbarProvider";
import PpApps from "./components/PpApps";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./components/Home";
import PreviewApp from "./components/PreviewApp";
import { LoadingProvider } from "./context/LoadingContext";
import NoAuthRequiredRoute from "./components/NoAuthRequiredRoute";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#263238", // Update this to your desired primary color
      },
      secondary: {
        main: "#607d8b", // Update this to your desired secondary color
      },
    },
  });

  //const theme = createTheme();

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
    },
    mainContent: {
      flex: 1,
    },
    footer: {
      flexShrink: 0,
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LoadingProvider>
        <Router>
          <SnackbarProvider>
            <Paper style={styles.container}>
              <Header1 />
              <div style={styles.mainContent}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/" element={<PrivateRoute />}>
                    <Route path="/ppapps" element={<PpApps />} />
                    <Route
                      path="/ppapps/preview/:appName"
                      element={<PreviewApp />}
                    />
                  </Route>
                  <Route path="/" element={<NoAuthRequiredRoute />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Registration />} />
                  </Route>
                </Routes>
              </div>
              <Footer style={styles.footer} />
            </Paper>
          </SnackbarProvider>
        </Router>
      </LoadingProvider>
    </ThemeProvider>
  );
}

export default App;
