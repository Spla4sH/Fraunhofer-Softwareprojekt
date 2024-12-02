import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  InputAdornment,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";

function TicketTable({ tickets }) {
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
      {/* Sort and Search */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "start",

          width: "100%",

          mb: 2,
        }}
      >
        <TextField
          placeholder="Suche nach Betreff, Ticketnummer, Status"
          size="small"
          variant="outlined"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            },
          }}
          sx={{ backgroundColor: "transparent", width: "80%" }}
        />
      </Box>
      {/* Table */}
      <TableContainer>
        <Table>
          {/* Table Head */}
          <TableHead>
            <TableRow>
              <TableCell sx={sxHeaderCell}>Nummer</TableCell>
              <TableCell sx={sxHeaderCell}>Bearbeitungsstatus</TableCell>
              <TableCell sx={sxHeaderCell}>Betreff</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
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
            {tickets &&
              tickets.map((ticket, index) => (
                <TableRow key={index}>
                  <TableCell>{ticket?.nummer}</TableCell>
                  <TableCell>{ticket?.status?.label}</TableCell>
                  <TableCell>{ticket?.betreff}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* Pagination */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          backgroundColor: "transparent",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Typography variant="body2" color="text.secondary" sx={{ mr: 2 }}>
          Zeilen pro Seite: 10
        </Typography>
        <Pagination count={0} />
      </Box>
    </Box>
  );
}

export default TicketTable;
