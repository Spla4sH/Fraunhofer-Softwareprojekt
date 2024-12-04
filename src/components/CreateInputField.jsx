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
            <h3>
                {headingText} {isRequired && <span>*</span>}
            </h3>
            <div>
                <TextField
                    style={{ width: isFullWidth ? '100%' : '250px' }}
                    required
                    placeholder= {headingText}
                />
            </div>
        </Box>
    );
}

export default CreateInputField;