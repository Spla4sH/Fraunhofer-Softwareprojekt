import AddIcon from "@mui/icons-material/Add";
import { Box, Button, Typography, Chip } from "@mui/material";
import Stack from "@mui/material/Stack";
import * as React from "react";
import { useEffect, useState } from "react";
import Tabs from "../../components/Tabs/Tabs";
import ticketData from "../../data/tickets.json";
import TicketTable from "../TicketTable/TicketTable";
import TicketTableCollapsable from "../TicketTable/TicketTableCollapsable";

function TabAll() {
  return (
    <>
      <TicketTableCollapsable tickets={ticketData} />
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
      <TicketTableCollapsable tickets={ticketsOpen} />
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
      <TicketTableCollapsable tickets={ticketsInProgress} />
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
      <TicketTableCollapsable tickets={ticketsClosed} />
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
