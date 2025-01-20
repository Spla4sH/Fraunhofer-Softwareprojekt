import { Typography, Checkbox, IconButton, Box, Tooltip } from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { styled } from "@mui/system";

function CheckboxSingle() {
  const LargeTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(() => ({
    [`& .MuiTooltip-tooltip`]: {
      fontSize: "1rem",
      padding: "8px 12px",
      color: "white",
      backgroundColor: "#757575",
    },
  }));

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "0.0em",
          marginBottom: "0.0em",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: "16px",
            fontWeight: "bold",
            fontFamily: "Arial, Helvetica, sans-serif",
            color: "black",
            margin: "0.0em",
          }}
        >
          IT-Abteilung informieren
        </Typography>
        <LargeTooltip title="Ticket soll zusätzlich an die IT-Abteilung geschickt werden">
          <IconButton aria-label="helpOutline">
            <HelpOutlineIcon />
          </IconButton>
        </LargeTooltip>
      </Box>
      <Checkbox
        color="success"
        sx={{ marginTop: "12px", transform: "scale(1.5)", padding: "4px" }}
      />
    </Box>
  );
}

export default CheckboxSingle;
