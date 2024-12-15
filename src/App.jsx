import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import theme from "./theme/theme";
import { ThemeProvider } from "@mui/material/styles";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Dashboard />
      </ThemeProvider>
    </>
  );
}

export default App;
