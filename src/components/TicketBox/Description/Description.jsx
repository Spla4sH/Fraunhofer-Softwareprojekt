import * as React from "react";

import {
  styled,
  Box,
  Paper,
  Divider,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  toggleButtonGroupClasses,
  Typography,
} from "@mui/material";

import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import LinkIcon from "@mui/icons-material/Link";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";

function Description({ inputValue, setInputValue, error }) {
  const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    [`& .${toggleButtonGroupClasses.grouped}`]: {
      margin: theme.spacing(0.5),
      border: 0,
      borderRadius: theme.shape.borderRadius,
      [`&.${toggleButtonGroupClasses.disabled}`]: {
        border: 0,
      },
    },
    [`& .${toggleButtonGroupClasses.middleButton},& .${toggleButtonGroupClasses.lastButton}`]:
      {
        marginLeft: -1,
        borderLeft: "1px solid transparent",
      },
  }));

  const [singleSelect, setSingleSelect] = React.useState("");
  const [formats, setFormats] = React.useState(() => []);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  const handleSingleSelect = (event, newSingleSelect) => {
    setSingleSelect(newSingleSelect);
  };

  return (
    <Box className="Container__Description" noValidate autoComplete="off">
      {/* H3 */}
      <Typography
        variant="h3"
        sx={{
          fontFamily: "Arial, Helvetica, sans-serif",
          fontSize: "16px",
          color: "black",
          fontWeight: "bold",
          fontStyle: "normal",
          marginBottom: "0.5em",
        }}
      >
        Beschreibung
        <Box
          component="span"
          sx={{
            color: "red",
            marginLeft: "0.2em",
          }}
        >
          *
        </Box>
      </Typography>

      <TextField
        id="outlined-textarea"
        placeholder="Beschreibung"
        multiline
        rows={6}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        error={error}
        helperText={error ? "Bitte fügen Sie eine Beschreibung ein." : ""}
        fullWidth
        sx={{
          display: "flex",
          marginTop: "0.5em",
        }}
      />

      <Paper
        className="Text__Format"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          marginTop: "0.5em",
          padding: 2,
        }}
        elevation={0}
      >
        <StyledToggleButtonGroup
          size="small"
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting"
        >
          <ToggleButton value="bold" aria-label="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="underlined" aria-label="underlined">
            <FormatUnderlinedIcon />
          </ToggleButton>
        </StyledToggleButtonGroup>
        <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />

        <StyledToggleButtonGroup
          size="small"
          value={singleSelect}
          exclusive
          onChange={handleSingleSelect}
          aria-label="text formatting"
        >
          <ToggleButton value="listBullet" aria-label="list bullet">
            <FormatListBulletedIcon />
          </ToggleButton>
          <ToggleButton value="listNumber" aria-label="list number">
            <FormatListNumberedIcon />
          </ToggleButton>
        </StyledToggleButtonGroup>
        <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />
        <StyledToggleButtonGroup
          size="small"
          value={singleSelect}
          exclusive
          onChange={handleSingleSelect}
          aria-label="text alignment"
        >
          <ToggleButton value="left" aria-label="left aligned">
            <FormatAlignLeftIcon />
          </ToggleButton>
          <ToggleButton value="center" aria-label="centered">
            <FormatAlignCenterIcon />
          </ToggleButton>
          <ToggleButton value="right" aria-label="right aligned">
            <FormatAlignRightIcon />
          </ToggleButton>
        </StyledToggleButtonGroup>
        <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />
        <StyledToggleButtonGroup
          size="small"
          value={singleSelect}
          exclusive
          onChange={handleSingleSelect}
          aria-label="text upload"
        >
          <ToggleButton value="link" aria-label="link">
            <LinkIcon />
          </ToggleButton>
          <ToggleButton value="attach" aria-label="attach file">
            <AttachFileIcon />
          </ToggleButton>
          <ToggleButton value="insert" aria-label="insert photo">
            <InsertPhotoIcon />
          </ToggleButton>
        </StyledToggleButtonGroup>
      </Paper>
    </Box>
  );
}

export default Description;
