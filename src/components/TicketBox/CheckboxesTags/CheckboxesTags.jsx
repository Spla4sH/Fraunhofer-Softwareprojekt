import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { IconButton, Box, Typography, Tooltip } from "@mui/material";
import { styled } from "@mui/system";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const ConfigItems = [
  { title: "123xyz" },
  { title: "124fgh" },
  { title: "345gth" },
  { title: "678uht" },
];

export default function CheckboxesTags({ headingText, onChange }) {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelectionChange = (event, newValue) => {
    setSelectedItems(newValue);
    onChange(newValue.map((item) => item.title));
  };

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

  let inputArray = null;

  if (headingText == "Betroffene Geräte") {
    inputArray = ConfigItems;
  }

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
          {headingText}
        </Typography>
        <LargeTooltip title="Wählen Sie das Betroffene Gerät aus">
          <IconButton aria-label="helpOutline">
            <HelpOutlineIcon />
          </IconButton>
        </LargeTooltip>
      </Box>

      <Autocomplete
        sx={{
          width: 350,
          marginTop: "0.0em",
        }}
        multiple
        id="checkboxes-tags-demo"
        options={inputArray}
        disableCloseOnSelect
        getOptionLabel={(option) => option.title}
        onChange={handleSelectionChange}
        renderOption={(props, option, { selected }) => (
          <li {...props}>
            <Checkbox
              icon={<CheckBoxOutlineBlankIcon />}
              checkedIcon={<CheckBoxIcon />}
              style={{ marginRight: "0.5em" }}
              checked={selected}
            />
            {option.title}
          </li>
        )}
        renderInput={(params) => (
          <TextField {...params} placeholder={headingText} />
        )}
      />
    </Box>
  );
}
