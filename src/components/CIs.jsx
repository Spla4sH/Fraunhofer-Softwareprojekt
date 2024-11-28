import React from 'react';
import { IconButton, TextField } from "@mui/material";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

function CIs() {
    return (
        <div>
            <div className='HelperIcon'>
                <h3>Betroffene Geräte</h3>
                <IconButton aria-label="helpOutline" >
                    <HelpOutlineIcon />
                </IconButton>
            </div>

            <div>
                <TextField
                    required
                    placeholder="..."
                />
            </div>
        </div>
    );
}

export default CIs;