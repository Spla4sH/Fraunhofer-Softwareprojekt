import React from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigation } from "../Menu/NavigationProvider";


export default function TicketButton({  subjectInputValue, descriptionInputValue, setSubjectError, setDescriptionError }) {
  const { navigateTo } = useNavigation();

  const handleCancelClick = () => {
    navigateTo("dashboard");
  };

  const handleCreateTicketClick = () => {
    let subjectIsValid = true;
    let descriptionIsValid = true;

    if (subjectInputValue.trim() === "") {
      setSubjectError(true);
      subjectIsValid = false;
    } else {
      setSubjectError(false);
    }

    if (descriptionInputValue.trim() === "") {
      setDescriptionError(true);
      descriptionIsValid = false;
    } else {
      setDescriptionError(false);
    }

    if (subjectIsValid && descriptionIsValid) {
      console.log("Ticket created successfully");
    }
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
          onClick={handleCreateTicketClick}
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