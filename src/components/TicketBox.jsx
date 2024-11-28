import "./TicketBox.css"
import * as React from 'react';
import {Box} from '@mui/material';
import HeaderCreateTicket from "./HeaderCreateTicket";
import SubjectLine from "./SubjectLine";
import ITDepartments from "./ITDepartments";
import CIs from "./CIs";
import Description from "./Description";
import TicketButton from "./TicketButton";

function TicketBox() {
    //TODO: make the background adapt to changes in the box
    
    return (
        <Box className="Container__CreateTicket">
            <div className="Container__Row__fullWidth Header">
                <HeaderCreateTicket />
            </div>
            <div className="Container__Row__fullWidth">
                <SubjectLine />
            </div>
            <div className="Container__Row__flex">
                <ITDepartments />
                <CIs/>
            </div>
            <div className="Container__Row__fullWidth">
                <Description/>
            </div>
            <div className="Container__Row__Buttons">
                <TicketButton />
            </div>
        </Box>
    )
}

export default TicketBox;