import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Menu from "../Menu/Menu";
import React, { useState } from "react";

export default function TopBar({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <Box>
      {/* AppBar remains static and stays at the top */}
      <AppBar
        position="static"
        sx={{
          height: "8vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          backgroundColor: "primary.main",
          boxShadow: {
            xs: 1,
            md: "none",
          },
          zIndex: 1,
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleMenuToggle}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Render Menu component if the menu is open */}
      {isMenuOpen && <Menu onClose={handleCloseMenu} />}
      {children}
    </Box>
  );
}
