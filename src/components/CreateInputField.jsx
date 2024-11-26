import React from 'react';
import { TextField, Box } from '@mui/material';

function CreateInputField({ headingText, isRequired, isFullWidth }) {
    return (
        <Box
            component="form"
            sx={{ '& .MuiTextField-root': { m: 0, width: '25ch' } }}
            noValidate
            autoComplete="off"
        >
            <div>
                <h3>
                    {headingText} {isRequired && <span>*</span>}
                </h3>
            </div>
            <div>
                <TextField
                    style={{ width: isFullWidth ? '100%' : '250px' }}
                    required
                    defaultValue={headingText}
                />
            </div>
        </Box>
    );
}

export default CreateInputField;
