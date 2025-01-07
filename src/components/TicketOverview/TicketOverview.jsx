import AddIcon from "@mui/icons-material/Add";
import { Box, Button, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import * as React from "react";
import { useEffect, useState } from "react";
import { getTicket, getTickets } from "../../api/api";
import Tabs from "../../components/Tabs/Tabs";
import TicketTableCollapsable from "../TicketTable/TicketTableCollapsable";
import { useNavigation } from "../Menu/NavigationProvider";

export default function TicketOveriew() {

  // Buttonfunctions

  const { navigateTo } = useNavigation();
    
  const handleNewTicketClick = () => {
      navigateTo("createTicket");}

  
  // Datafunctions
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
  //Data
  useEffect(() => {
    async function fetchTickets() {
      const allTickets = await getTickets(); // Warten auf die Daten
      setTicketData(allTickets); // Daten in den State setzen
      console.log("abc", allTickets);
      const ticketX = await getTicket("1");
      console.log(ticketX);
    }

    fetchTickets(); // Asynchrone Funktion aufrufen
  }, []);
  const tabContent = [
    {
      status: "Alle",
      content: <TicketTableCollapsable tickets={getTicketDataForTab("all")} />,
    },
    {
      status: "Offen",
      content: <TicketTableCollapsable tickets={getTicketDataForTab("Offen")} />,
    },
    {
      status: "In Bearbeitung",
      content: (
        <TicketTableCollapsable tickets={getTicketDataForTab("In Arbeit")} />
      ),
    },
    {
      status: "Abgeschlossen",
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
          <Button variant="contained" startIcon={<AddIcon />} onClick={handleNewTicketClick}>
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
