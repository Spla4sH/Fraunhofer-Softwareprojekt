import React from "react";
import {
  Box,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Tooltip,
} from "@mui/material";
import {
  ArrowBack as ArrowBackIcon,
  Assignment as TicketIcon,
  Dashboard as PinnwandIcon,
  Notifications as ReminderIcon,
} from "@mui/icons-material";
import { useNavigation } from "./NavigationProvider";

const Menu = ({ onClose }) => {
    const { navigateTo } = useNavigation();

    const handleDashboardClick = () => {
    navigateTo("dashboard");
    onClose(); // Close the menu after navigation
    };

  // toImplement
  // const handlePinnwallClick = () => {}

  // toImplement
  // const handleMemoryClick = () => {}
  

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0, // Menu starts directly from the top
        left: 0,
        height: "100%",
        width: "250px",
        bgcolor: "white",
        boxShadow: "2px 0px 10px rgba(0, 0, 0, 0.1)",
        zIndex: 1000,
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.3s ease-in-out",
      }}
    >
      {/* Back Arrow and Menu Text */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          pt: 2,
          pl: 3, // Padding left for "Menu" text
        }}
      >
        {/* Menu Text */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            color: "black",
            mr: 2, // Space between "Menu" and arrow
          }}
        >
          Menu
        </Typography>

        {/* Back Arrow Icon */}
        <Tooltip title="Close Menu">
          <IconButton
            onClick={onClose}
            sx={{
              backgroundColor: "#f2f2f2",
              "&:hover": { backgroundColor: "#e0e0e0" },
            }}
          >
            <ArrowBackIcon />
          </IconButton>
        </Tooltip>
      </Box>

      {/* Menu Items */}
      <List sx={{ mt: 2 }}>
        {/* Tickets */}
        <ListItem
          button
          sx={{
            display: "flex",
            justifyContent: "space-between",
            px: 3,
            py: 2,
            "&:hover": {
              bgcolor: "#f0f0f0",
              cursor: "pointer",
            },
          }}
            onClick={handleDashboardClick}
        >
          <ListItemText
            primary="Tickets"
            sx={{
              fontSize: "16px",
              fontWeight: "bold",
              color: "black",
            }}
          />
          <TicketIcon sx={{ color: "#009374" }} />
        </ListItem>

        {/* Pinnwand */}
        <ListItem
          button
          sx={{
            px: 3,
            py: 2,
            "&:hover": {
              bgcolor: "#f0f0f0",
              cursor: "pointer",
            },
          }}
          // onClick={handlePinnwallClick}
        >
          <ListItemText
            primary="Pinnwand"
            sx={{
              fontSize: "16px",
              fontWeight: "bold",
              color: "black",
            }}
          />
          <PinnwandIcon sx={{ color: "#009374" }} />
        </ListItem>

        {/* Erinnerung */}
        <ListItem
          button
          sx={{
            px: 3,
            py: 2,
            "&:hover": {
              bgcolor: "#f0f0f0",
              cursor: "pointer",
            },
          }}
          // onClick={handleMemoryClick}
        >
          <ListItemText
            primary="Erinnerung"
            sx={{
              fontSize: "16px",
              fontWeight: "bold",
              color: "black",
            }}
          />
          <ReminderIcon sx={{ color: "#009374" }} />
        </ListItem>
      </List>
    </Box>
  );
};

export default Menu;
