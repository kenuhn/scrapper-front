import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import authContext from "../../App";
const drawerWidth = 240;

const Sidebar = () => {
  const [open, setOpen] = React.useState(false);
  const authState = useContext(authContext);
  const handleDrawerToggle = () => {
    setOpen(!open);
  };
  const navigate = useNavigate();
  const handleDisconnect = () => {
    localStorage.removeItem("name");
    authState.setIsAuth(false);
    navigate("/authentification");
  };

  return (
    <div style={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ width: "150px" }}
          >
            CrawlerDeen
          </Typography>

          <Box sx={{ width: "120px" }}>
            <Button
              color="inherit"
              component={Link}
              to="/authentification"
              onClick={handleDisconnect}
            >
              Disconnect
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <div>
          <List>
            <List>
              {[
                { text: "Home", icon: <HomeIcon />, link: "/homePage" },
                { text: "My Offer", icon: <InfoIcon />, link: "/myOffer" },
              ].map((item) => (
                <ListItem
                  button
                  component={Link}
                  to={item.link}
                  key={item.text}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItem>
              ))}
            </List>
          </List>
        </div>
      </Drawer>
    </div>
  );
};

export default Sidebar;
