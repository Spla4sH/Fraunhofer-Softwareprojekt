import "./App.css";
import TestComponent from "./components/TestComponent/TestComponent";
import Dashboard from "./pages/dashboard/dashboard";
import theme from "./theme/theme";
import { ThemeProvider } from "@mui/material/styles";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Dashboard />
        <TestComponent name="Anton" />
      </ThemeProvider>
    </>
  );
}

export default App;
