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
import InputLabel from "@mui/material/InputLabel";
import TablePagination from "@mui/material/TablePagination";
import { useState, useEffect } from "react";
import { Chip, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Row(props) {
  const { ticket } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow
        sx={{
          backgroundColor: open ? "#8DB2AB" : "transparent",
          "& > *": { borderBottom: "unset" },
        }}
      >
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
              <Table
                size="small"
                aria-label="purchases"
                sx={{
                  backgroundColor: "#E4F6F3", // Light green for the header
                  color: "black", // White text for contrast
                  fontWeight: "normal",
                }}
              >
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
  const [ticketsFiltered, setTicketsFiltered] = useState();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    setTicketsFiltered(tickets);
    console.log("tickets", tickets);
  }, [tickets]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const filterTicketData = (event) => {
    let filterValue = event.target.value.toLowerCase(); // Convert to lowercase for case-insensitive matching
    console.log("input value", filterValue);

    // Filter tickets based on 'betreff' or 'nummer'
    const filtered = tickets.filter((ticket) => {
      // Convert 'betreff' and 'nummer' to strings and check for includes
      const betreffMatch =
        ticket.betreff?.toLowerCase().includes(filterValue) || false;
      const nummerMatch =
        ticket.nummer?.toString().includes(filterValue) || false;

      return betreffMatch || nummerMatch; // Include ticket if either field matches
    });

    setTicketsFiltered(filtered); // Update state with the filtered list
  };
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
        p: 0,

        paddingY: 3,

        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "center",

        width: "80vw",
        height: "fit-content",

        backgroundColor: "transparent",
        boxShadow:
          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
        borderRadius: 8,
      }}
    >
      <TextField
        onChange={(event) => filterTicketData(event)}
        sx={{ m: 2, width: "80%", p: 1 }}
        placeholder="Suche nach Betreff, Ticketnummer"
        slotProps={{
          input: {
            startAdornment: (
              <SearchIcon sx={{ color: "grey", marginRight: 1 }} />
            ),
          },
        }}
        variant="standard"
      />
      <TableContainer sx={{ backgroundColor: "transparent" }}>
        <Table aria-label="collapsible table">
          <TableHead sx={{ backgroundColor: "transparent" }}>
            <TableRow sx={{ backgroundColor: "transparent" }}>
              <TableCell> </TableCell>
              <TableCell sx={sxHeaderCell}>Nummer</TableCell>
              <TableCell sx={sxHeaderCell}>Bearbeitungsstatus</TableCell>
              <TableCell sx={sxHeaderCell}>Betreff</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ticketsFiltered &&
              ticketsFiltered.length > 0 &&
              ticketsFiltered
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((ticket, index) => {
                  return <Row key={index} ticket={ticket} />;
                })}
            {/* Empty table row */}
            {ticketsFiltered && ticketsFiltered.length === 0 && (
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

      <TablePagination
        sx={{ width: "100%", backgroundColor: "transparent" }}
        rowsPerPageOptions={[5, 10, 50]}
        component="div"
        count={tickets.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  );
}
