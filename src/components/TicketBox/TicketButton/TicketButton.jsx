import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigation } from "../../Menu/NavigationProvider";
import { createTicket } from "../../../api/api";

export default function TicketButton({
  subjectInputValue,
  descriptionInputValue,
  setSubjectError,
  setDescriptionError,
  selectedConfigItems,
}) {
  const { navigateTo } = useNavigation();

  const handleCancelClick = () => {
    navigateTo("dashboard");
  };

  const handleCreateTicketClick = async () => {
    let subjectIsValid = true;
    let descriptionIsValid = true;

    if (subjectInputValue.trim() === "") {
      setSubjectError(true);
      subjectIsValid = false;
      console.log("Subjectline is not valid");
    } else {
      setSubjectError(false);
    }

    const isDescriptionEmpty =
      descriptionInputValue === "<p></p>" ||
      descriptionInputValue.trim() === "";
    if (isDescriptionEmpty) {
      setDescriptionError(true);
      descriptionIsValid = false;
      console.log("Description is not valid");
    } else {
      setDescriptionError(false);
    }

    if (subjectIsValid && descriptionIsValid) {
      const ticketData = {
        subject: subjectInputValue,
        description: descriptionInputValue,
        ci_id: selectedConfigItems,
        author: "TestAuthor",
        author_id: "2222",
      };

      try {
        const response = await createTicket(ticketData);
        console.log("Ticket erfolgreich erstellt:", response);

        navigateTo("dashboard");
      } catch (error) {
        console.error("Fehler beim Erstellen des Tickets:", error);
      }
    }
  };

  const isButtonDisabled =
    subjectInputValue.trim() === "" || descriptionInputValue.trim() === "";

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
        onClick={async () => await handleCreateTicketClick()}
        // disabled={isButtonDisabled}
        sx={{
          height: "50px",
          minWidth: "162px",
          bgcolor: isButtonDisabled ? "#c7c7cc" : "#009374",
          color: "white",
          "&:hover": {
            bgcolor: isButtonDisabled ? "#c7c7cc" : "#007D63",
          },
        }}
      >
        Ticket erstellen
      </Button>
    </Stack>
  );
}
