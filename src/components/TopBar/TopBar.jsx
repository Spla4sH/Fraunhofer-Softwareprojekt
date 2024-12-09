import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";

export default function TopBar() {
  return (
    <Box>
      <AppBar
        position="static"
        sx={{
          height: { xs: "8vh", md: "11vh" },
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          backgroundColor: "primary.main",
          boxShadow: {
            xs: 1,
            md: "none",
          },
          zIndex: 1,
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => console.log("menu")}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
