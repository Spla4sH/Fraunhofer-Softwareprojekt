import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { IconButton, Box, Typography } from '@mui/material';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const ConfigItems = [
  { title: '123xyz' },
  { title: '124fgh' },
  { title: '345gth' },
  { title: '678uht' },
];

export default function CheckboxesTags({ headingText }) {

  let inputArray = null;

  if (headingText == "Betroffene Geräte") {
    inputArray = ConfigItems;
  }

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.0em',
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
        <IconButton aria-label="helpOutline" >
          <HelpOutlineIcon />
        </IconButton>
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
