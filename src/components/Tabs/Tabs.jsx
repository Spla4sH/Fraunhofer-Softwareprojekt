import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import MuiTabs from "@mui/material/Tabs";
import PropTypes from "prop-types";
import * as React from "react";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 0 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Tabs({ content }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", backgroundColor: "transparent" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <MuiTabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {content.map((tab, index) => (
            <Tab key={index} label={tab.label} {...a11yProps(1)} />
          ))}
        </MuiTabs>
      </Box>

      {content.map((tab, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            backgroundColor: "transparent",
          }}
        >
          <CustomTabPanel
            key={index}
            index={index}
            value={value}
            label={tab.label}
            {...a11yProps(1)}
          >
            {tab.content}
          </CustomTabPanel>
        </Box>
      ))}
    </Box>
  );
}
