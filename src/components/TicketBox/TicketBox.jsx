import * as React from 'react';
import { Box } from '@mui/material';
import HeaderCreateTicket from "./HeaderCreateTicket";
import SubjectLine from './SubjectLine';
import Description from "./Description";
import TicketButton from "./TicketButton";
import CheckboxesTags from "./CheckboxesTags";
import CheckboxSingle from "./CheckboxSingle";

function TicketBox() {
    //TODO: make the background adapt to changes in the box

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
            <Box
                sx={{
                    minHeight: "650px",
                    width: "954px",
                    borderRadius: "8px",
                    boxShadow:
                        "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                    backgroundColor: "white",
                    padding: "2em 3em",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <Box
                    sx={{
                        marginBottom: "3em",
                        width: "100%",
                    }}
                >
                    <HeaderCreateTicket />
                </Box>
                <Box
                    sx={{
                        marginBottom: "2em",
                        width: "100%",
                    }}
                >
                    <SubjectLine />
                </Box>
                <Box
                    sx={{
                        marginBottom: "2em",
                        width: "100%",
                        display: "flex",
                        alignItems: "stretch",
                        gap: "1em",
                    }}
                >
                    <Box sx={{ flex: 1 }}>
                        <CheckboxesTags headingText="Betroffene Geräte" />
                    </Box>
                    <Box sx={{ flexShrink: 0 }}>
                        <CheckboxSingle />
                    </Box>
                </Box>
                <Box
                    sx={{
                        marginBottom: "2em",
                        width: "100%",
                    }}
                >
                    <Description />
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                    }}
                >
                    <TicketButton />
                </Box>
            </Box>
        </Box>
    );
}

export default TicketBox;
