import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function TicketButton() {
  return (
    <Stack spacing={2} direction="row">
        <Button variant="outlined" color="error">Abbrechen</Button>
        <Button variant="contained" color="success">Ticket erstellen</Button>
    </Stack>
  );
}