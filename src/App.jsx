import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import "./App.css";
import {
  NavigationProvider,
  useNavigation,
} from "./components/Menu/NavigationProvider";
import CreateTicket from "./pages/CreateTicket/CreateTicket";
import Dashboard from "./pages/Dashboard/Dashboard";
import theme from "./theme/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationProvider>
          <AppContent />
        </NavigationProvider>
      </ThemeProvider>
    </>
  );
}

const AppContent = () => {
  const { currentPage } = useNavigation();

  switch (currentPage) {
    case "dashboard":
      return <Dashboard />;
    case "createTicket":
      return <CreateTicket />;
    default:
      return <Dashboard />;
  }
};

export default App;
