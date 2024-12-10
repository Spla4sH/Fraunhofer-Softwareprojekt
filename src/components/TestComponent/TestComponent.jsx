import React, { useEffect } from "react";
import { postTicket } from "../../api/api";
import { Typography, Box, Button } from "@mui/material";

function TestComponent({ name }) {
  async function postTest() {
    const tst = await postTicket(); // Warten auf die Daten
    console.log("BUTTTOn");
  }

  return (
    <Box>
      <Typography> Hello {name}</Typography>
      <Button variant="contained" onClick={postTest}>
        Dummy Ticket hinzufügen
      </Button>
    </Box>
  );
}

export default TestComponent;
