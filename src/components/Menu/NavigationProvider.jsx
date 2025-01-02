import React, { createContext, useContext, useState } from "react";

// Create Context
const NavigationContext = createContext();

// Hook for easy access to the context
export const useNavigation = () => useContext(NavigationContext);

// Provider Component
export const NavigationProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState("dashboard");

  // Function to change the current page
  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  return (
    <NavigationContext.Provider value={{ currentPage, navigateTo }}>
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationProvider;