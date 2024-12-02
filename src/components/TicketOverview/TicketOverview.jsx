import AddIcon from "@mui/icons-material/Add";
import { Box, Button, Tab, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import * as React from "react";
import Tabs from "../../components/Tabs/Tabs";
import TicketTable from "../TicketTable/TicketTable";
import ticketData from "../../data/tickets.json";
import { useEffect, useState } from "react";

function TabAll() {
  return (
    <>
      <TicketTable tickets={ticketData} />
    </>
  );
}

function TabOpen() {
  const [ticketsOpen, setTicketsOpen] = useState();

  useEffect(() => {
    setTicketsOpen(
      ticketData.filter((ticket) => ticket.status.label === "Open")
    );
  }, [ticketData]);
  return (
    <>
      <TicketTable tickets={ticketsOpen} />
    </>
  );
}

function TabInProgress() {
  const [ticketsInProgress, setTicketsInProgress] = useState();

  useEffect(() => {
    setTicketsInProgress(
      ticketData.filter((ticket) => ticket.status.label === "In Progress")
    );
  }, [ticketData]);
  return (
    <>
      <TicketTable tickets={ticketsInProgress} />
    </>
  );
}
function TabClosed() {
  const [ticketsClosed, setTicketsClosed] = useState();

  useEffect(() => {
    setTicketsClosed(
      ticketData.filter((ticket) => ticket.status.label === "Closed")
    );
  }, [ticketData]);
  return (
    <>
      <TicketTable tickets={ticketsClosed} />
    </>
  );
}

export default function TicketOveriew() {
  const tabContent = [
    { label: "Alle", content: <TabAll /> },
    { label: "Offen", content: <TabOpen /> },
    { label: "In Bearbeitung", content: <TabInProgress /> },
    { label: "Abgeschlossen", content: <TabClosed /> },
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
      <Stack direction="column" spacing={2}>
        <Box sx={{ backgroundColor: "transparent", width: "100vw" }}>
          <Button variant="contained" startIcon={<AddIcon />}>
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
