import * as React from 'react';
import { Typography, Box } from '@mui/material';

function HeaderCreateTicket() {
    return (
        <Box>
            {/* H1 */}
            <Typography
                variant="h1"
                sx={{
                    fontFamily: "Arial, Helvetica, sans-serif",
                    fontSize: "24px",
                    color: "black",
                    lineHeight: "10px",
                    marginBottom: "0.5em",
                }}
            >
                Ticket erstellen
            </Typography>

            {/* H2 */}
            <Typography
                variant="h2"
                sx={{
                    fontFamily: "Arial, Helvetica, sans-serif",
                    fontSize: "16px",
                    color: "#757575",
                    lineHeight: "20px",
                    fontWeight: "normal",
                }}
            >
                Bitte füllen Sie die Felder aus.
            </Typography>
        </Box>
    )
}

export default HeaderCreateTicket;