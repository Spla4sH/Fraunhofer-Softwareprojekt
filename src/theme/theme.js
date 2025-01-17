// Import necessary modules from Material-UI
import { createTheme } from "@mui/material/styles";

// Define the custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#009374", // Green
    },
    secondary: {
      main: "#dc004e", // Pinkish red
    },
    background: {
      default: "#f5f5f5", // Light gray background
      paper: "#ffffff", // White for paper elements
    },
    text: {
      primary: "#000000", // Black text
      secondary: "#757575", // Gray text
    },
    status: {
      open: "#8ab3f9", // blue
      inProgress: "#f7cb85", // orange
      closed: "#009374", // Green
      reminder: "#f9a2a5", // red
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
    },
    button: {
      textTransform: "none", // Prevent uppercase transformation
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px", // Rounded buttons
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: "16px", // Add default padding to paper
        },
      },
    },
  },
  spacing: 8, // Default spacing scale (8px increments)
});

// Export the theme to use in your app
export default theme;
