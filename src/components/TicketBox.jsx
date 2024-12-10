import "./TicketBox.css"
import * as React from 'react';
import {Box} from '@mui/material';
import HeaderCreateTicket from "./HeaderCreateTicket";
import SubjectLine from "./SubjectLine";
import Description from "./Description";
import TicketButton from "./TicketButton";
import CheckboxesTags from "./CheckboxesTages";
import CheckboxSingle from "./CheckboxSingle";

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
            <div className="Container__Row__fullWidth">
                <CheckboxesTags headingText="Betroffene Geräte"/>
            </div>
            <div className="Container__Row__fullWidth">
                <CheckboxSingle />
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