import "./SubjectLine.css"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'
import CreateInputField from "./CreateInputField";

function SubjectLine() {
    return (
        <div>
            <CreateInputField headingText="Betreff" isRequired={true} isFullWidth={true}  />
        </div>
    );
}

export default SubjectLine;