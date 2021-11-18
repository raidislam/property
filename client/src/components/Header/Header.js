import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const propertyItem = [
  {
    id: "1",
    name: "rafiqul islam",
    location: "Gulshan",
  },
  {
    id: "2",
    name: "kamal uddin",
    location: "Gulshan",
  },
  {
    id: "3",
    name: "jasim khan",
    location: "Gulshan",
  },
  {
    id: "4",
    name: "rakibul hasan",
    location: "Gulshan",
  },
];

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Property list
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
