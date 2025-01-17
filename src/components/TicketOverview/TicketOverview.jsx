import React, { useEffect, useState } from "react";
import TicketTableCollapsable from "../TicketTable/TicketTableCollapsable";
import { Box, Button, Stack, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Tabs from "../../components/Tabs/Tabs";
import { useNavigation } from "../Menu/NavigationProvider";
import { getTicket, getTickets } from "../../api/api";

export default function TicketOverview() {
  const { navigateTo } = useNavigation();
  const handleNewTicketClick = () => {
    navigateTo("createTicket");
  };

  const [ticketData, setTicketData] = useState([]);

  function getTicketDataForTab(status) {
    if (!ticketData) {
      return [];
    }
    if (status === "all") {
      return ticketData;
    } else {
      return ticketData.filter((ticket) => ticket.status === status);
    }
  }

  useEffect(() => {
    async function fetchTickets() {
      try {
        const allTickets = await getTickets(); // Alle Tickets abrufen
        setTicketData(allTickets); // Tickets in den State speichern
        console.log("Fetched tickets:", allTickets);

        const ticketX = await getTicket(1); // Ein bestimmtes Ticket abrufen
        console.log("Fetched single ticket:", ticketX);
      } catch (error) {
        console.error("Error during ticket fetching:", error);
      }
    }

    fetchTickets();
  }, []);

  const tabContent = [
    {
      label: "Alle",
      content: <TicketTableCollapsable tickets={getTicketDataForTab("all")} />,
    },
    {
      label: "Offen",
      content: <TicketTableCollapsable tickets={getTicketDataForTab("Offen")} />,
    },
    {
      label: "In Bearbeitung",
      content: (
        <TicketTableCollapsable tickets={getTicketDataForTab("In Arbeit")} />
      ),
    },
    {
      label: "Abgeschlossen",
      content: (
        <TicketTableCollapsable tickets={getTicketDataForTab("Geschlossen")} />
      ),
    },
  ];

  return (
    <Box
      sx={{
        p: 3,
        display: "flex",
        alignItems: "start",
        justifyContent: "center",
        width: "100vw",
        height: "fit-content",
        backgroundColor: "transparent",
      }}
    >
      <Stack
        direction="column"
        spacing={2}
        sx={{ backgroundColor: "transparent", width: "80%" }}
      >
        <Box sx={{ backgroundColor: "transparent", width: "100%" }}>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={handleNewTicketClick}
          >
            Ticket erstellen
          </Button>
          <Typography
            sx={{
              marginTop: 3,
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: 14,
              lineHeight: "17px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#797979",
            }}
          >
            Meine Ticket Übersicht
          </Typography>
        </Box>
        <Tabs content={tabContent}></Tabs>
      </Stack>
    </Box>
  );
}
