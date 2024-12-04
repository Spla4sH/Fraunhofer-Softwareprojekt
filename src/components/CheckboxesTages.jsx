import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import {IconButton, Box} from '@mui/material';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;


const ItAbteilung = [
  { title: 'Zentral-Dispatcher' },
  { title: 'Abteilung 1' },
  { title: 'Abteilung 2' },
  { title: 'Abteilung 3' },
];

const ConfigItems = [
  { title: '123xyz' },
  { title: '124fgh' },
  { title: '345gth' },
  { title: '678uht' },
];

export default function CheckboxesTags({headingText}) {

  let inputArray = null;

  if(headingText == "IT-Abteilung"){
    inputArray = ItAbteilung;
  } else {
    inputArray = ConfigItems;
  }
  return (
    <Box>
      <div className='HelperIcon'>
        <h3>{headingText}</h3>
          <IconButton aria-label="helpOutline" >
            <HelpOutlineIcon />
          </IconButton>
      </div>

      <Autocomplete
        multiple
        id="checkboxes-tags-demo"
        options={inputArray}
        disableCloseOnSelect
        getOptionLabel={(option) => option.title}
        renderOption={(props, option, { selected }) => {
          const { key, ...optionProps } = props;
          return (
            <li key={key} {...optionProps}>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                checked={selected}
              />
              {option.title}
            </li>
          );
        }}
        style={{ width: "350px" }}
        renderInput={(params) => (
          <TextField {...params}
            placeholder={headingText}
          />
        )}
      />
    </Box>
  );
}
