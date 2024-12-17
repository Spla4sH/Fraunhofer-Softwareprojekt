import {FormControlLabel, Checkbox, IconButton, Box} from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

function CheckboxSingle() {
    return (
        <Box>
            <FormControlLabel control={<Checkbox defaultChecked color="success"/>} 
                    label="IT-Department"
                    sx={{
                        color: "black", // Change the color of the label
                        "& .MuiTypography-root": {
                          color: "black", // Ensure the typography inside is also black
                        },
                      }}
            />
            <IconButton aria-label="helpOutline" >
                <HelpOutlineIcon />
            </IconButton>
        </Box>
    );
}

export default CheckboxSingle;


