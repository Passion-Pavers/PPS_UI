// theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#303f9f", // Adjust the main color for the primary theme
    },
    secondary: {
      main: "#3f51b5", // Adjust the main color for the secondary theme
    },
    background: {
      default: "#9fa8da", // Light indigo background color
    },
    text: {
      primary: "#eeeeee", // Brightest white text color
    },
  },
});

export default theme;
