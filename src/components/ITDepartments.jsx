import {FormControl, MenuItem, Select, IconButton} from '@mui/material';
import * as React from 'react';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

function ITDepartments() {
    const [departement, setdepartement] = React.useState('');

    const handleChange = (event) => {
        setdepartement(event.target.value);
    };

    return (
        <div>
            <div className='HelperIcon'>
                <h3>IT - Abteilung</h3>
                <IconButton aria-label="helpOutline" >
                    <HelpOutlineIcon />
                </IconButton>
            </div>

            <FormControl
                style={{ width: '250px' }}
            >
                <Select
                    value={departement}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}                   
                >
                    <MenuItem value=""><em>Bitte auswählen</em></MenuItem>
                    <MenuItem value={1}>Linux</MenuItem>
                    <MenuItem value={2}>Windows</MenuItem>
                    <MenuItem value={3}>Zentral-Dispatcher</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}

export default ITDepartments;