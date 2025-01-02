import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigation } from "../Menu/NavigationProvider";


export default function TicketButton() {

  const { navigateTo } = useNavigation();

  const handleCancelClick = () => {
    navigateTo("dashboard");
  };

  return (
    
    <Stack spacing={2} direction="row">
        <Button
          variant="contained"
          onClick={handleCancelClick}
              sx={{
                bgcolor: "#FFE4E4",
                color: "black",
                "&:hover": {
                  bgcolor: "#FFD1D1",
                },
              }}
            >
              Abbrechen
            </Button>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#009374",
                color: "white",
                "&:hover": {
                  bgcolor: "#007D63",
                },
              }}
            >
              Ticket erstellen
            </Button>
    </Stack>
  );
}