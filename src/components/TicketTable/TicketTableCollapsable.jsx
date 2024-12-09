import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import * as React from "react";

import { Chip } from "@mui/material";

import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Row(props) {
  const { ticket } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>

        <TableCell sx={{ color: "#1F82C0" }}>
          <Typography sx={{ fontWeight: "bold" }}>{ticket?.nummer}</Typography>{" "}
          <Typography variant="body2" color="text.secondary">
            Erstellt am {ticket?.dateCreated}
          </Typography>
        </TableCell>
        <TableCell sx={{ color: "#155680" }}>
          {" "}
          <Chip
            icon={<FiberManualRecordIcon sx={{ fontSize: "13px" }} />}
            label={ticket?.status?.label}
            color="primary"
            variant="outlined"
            sx={{
              fontWeight: "bold",
            }}
          />
          <Typography variant="body2" color="text.secondary">
            {ticket?.status?.label} seit {ticket.status.status_changed}
          </Typography>
        </TableCell>
        <TableCell sx={{ fontWeight: "bold" }}>{ticket?.betreff}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              {/* <Typography variant="h6" gutterBottom component="div">
                Child table
              </Typography> */}
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Datum</TableCell>
                    <TableCell>Bearbeiter</TableCell>
                    <TableCell align="right">Eintrag</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow key={ticket.betreff}>
                    <TableCell component="th" scope="row">
                      {ticket.process.date}
                    </TableCell>
                    <TableCell>{ticket.process.revisor}</TableCell>
                    <TableCell align="right">
                      {ticket.process.comment}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function TicketTableCollapsable({ tickets }) {
  const sxHeaderCell = {
    marginTop: 3,
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 14,
    lineHeight: "17px",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "#797979",
  };
  return (
    <Box
      sx={{
        m: 1,
        p: 3,

        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "center",

        width: "80vw",
        height: "fit-content",

        backgroundColor: "transparent",
        boxShadow:
          "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)",
        borderRadius: 8,
      }}
    >
      <TableContainer>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell sx={sxHeaderCell}>Nummer</TableCell>
              <TableCell sx={sxHeaderCell}>Bearbeitungsstatus</TableCell>
              <TableCell sx={sxHeaderCell}>Betreff</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tickets &&
              tickets.length > 0 &&
              tickets.map((ticket, index) => (
                <Row key={index} ticket={ticket} />
              ))}
            {/* Empty table row */}
            {tickets && tickets.length === 0 && (
              <TableRow>
                <TableCell colSpan={3} align="center">
                  <Typography variant="body1" color="text.secondary">
                    Keine Tickets gefunden
                  </Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
