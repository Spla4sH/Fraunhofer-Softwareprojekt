import React from 'react';
import { Box, Typography, TextField } from '@mui/material';

function SubjectLine({ inputValue, setInputValue, error }) {

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': {
                    width: '100%'
                },
            }}
            noValidate
            autoComplete="off"
        >
            {/* H3 */}
            <Typography
                variant="h3"
                sx={{
                    fontFamily: "Arial, Helvetica, sans-serif",
                    fontSize: "16px",
                    color: "black",
                    fontWeight: "bold",
                    fontStyle: "normal",
                    marginBottom: "0.5em",
                }}
            >
                Betreff

                <Box
                    component="span"
                    sx={{
                        color: "red",
                        marginLeft: "0.2em",
                    }}
                >
                    *
                </Box>
            </Typography>

            {/* TextField */}
            <TextField
                placeholder="Betreff"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                error={error}
                helperText={error ? "Bitte fügen Sie einen Betreff ein." : ""}
                sx={{
                    width: '100%',
                }}
            />
        </Box>
    );
}

export default SubjectLine;