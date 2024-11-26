import "./CIs.css"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'
import CreateInputField from "./CreateInputField";

function CIs() {
    return (
        <div>
            <CreateInputField headingText="Betroffene Geräte" isRequired={false} isFullWidth={false}  />
        </div>
    );
}

export default CIs;