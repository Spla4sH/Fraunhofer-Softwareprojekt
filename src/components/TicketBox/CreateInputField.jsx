import React from 'react';
import { Box, Typography, TextField } from '@mui/material';

function CreateInputField({ headingText, isRequired, isFullWidth }) {
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': {  
                    width: isFullWidth ? '100%' : '250px' },
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
                {headingText}
                {isRequired && (
                    <Box
                        component="span"
                        sx={{
                            color: "red",
                            marginLeft: "0.2em",
                        }}
                    >
                        *
                    </Box>
                )}
            </Typography>

            {/* TextField */}
            <TextField
                required={isRequired}
                placeholder={headingText}
                sx={{
                    width: isFullWidth ? '100%' : '250px',
                }}
            />
        </Box>
    );
}

export default CreateInputField;