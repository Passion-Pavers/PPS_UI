import { React } from "react";
import { CssBaseline, ThemeProvider, createTheme, Paper } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Registration from "./components/Registration";
import { SnackbarProvider } from "./context/SnackbarProvider";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./components/Home";
import MyCreds from "./components/MyCreds";
import NoAuthRequiredRoute from "./components/NoAuthRequiredRoute";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#455a64", // Update this to your desired primary color
      },
      secondary: {
        main: "#37474f", // Update this to your desired secondary color
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
      <Router>
        <SnackbarProvider>
          <Paper style={styles.container}>
            <Header />
            <div style={styles.mainContent}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/" element={<PrivateRoute />}>
                  <Route path="/mycreds" element={<MyCreds />} />
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
    </ThemeProvider>
  );
}

export default App;
