import "./ITDepartments.css"
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
// import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
// import IconButton from "@mui/material/IconButton";

function ITDepartments() {
    return (
        <div>
            <h3>IT-Abteilung</h3>

            {/* <IconButton aria-label="HelpLabel" size="small">
                <HelpOutlineIcon fontSize="small" />
            </IconButton> */}

            <FormControl
                style={{ width: '250px' }}
            >
                {/* <InputLabel id="demo-simple-select-label">IT-Abteilung</InputLabel> */}
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                // value={ITDepartment}
                // onChange={handleChange}                        
                >
                    <MenuItem value={1}>Linux</MenuItem>
                    <MenuItem value={2}>Windows</MenuItem>
                    <MenuItem value={3}>IT-Zentral-Dispatcher</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}

export default ITDepartments;