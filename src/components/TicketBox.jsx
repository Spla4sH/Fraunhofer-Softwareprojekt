import "./TicketBox.css"
import * as React from 'react';
import Box from '@mui/material/Box';
import CreateTicketHeader from "./CreateTicketHeader";
import SubjectLine from "./SubjectLine";
import ITDepartments from "./ITDepartments";
import CIs from "./CIs";
import Description from "./Description";

function TicketBox() {
    return (
        <Box className="customBox">
            <div className="BoxRow">
                <CreateTicketHeader />
            </div>
            <div className="BoxRow">
                <SubjectLine />
            </div>
            <div className="BoxRowFlex">
                <ITDepartments />
                <CIs/>
            </div>
            <div>
                <Description/>
            </div>
        </Box>
    )
}

export default TicketBox;