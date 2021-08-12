import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {
  makeStyles,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import logo from "../logo.png";
import { NavLink } from "react-router-dom";
import DrawerComponent from "./DrawerComponent";


const useStyles = makeStyles({
  nav: {
    backgroundColor: "transparent",
    position: "relative",
    height: "80px",
    justifyContent: "center",
    zIndex: "100",
  },
  navGroup: {
    display: "flex",
  },
  navItems: {
    display: "flex",
    textDecoration: "none",
    paddingRight: "15px",
    paddingLeft: "15px",
    color: "black",
    fontFamily: "Ubuntu",
    fontSize: "1.3rem",
    fontWeight: 400,
  },
  Logo: {
    width: "20vw",
    marginRight: "auto",
  },
  flex: {
    display: "flex",
  },
});

const Navbar = () => {
  const classes = useStyles();

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div>
      <AppBar className={classes.nav} elevation={0}>
        <Toolbar>
          {isMatch ? (
            <DrawerComponent/>
          ) : (
            <>
              <img src={logo} className={classes.Logo} alt="logo" />

              <div className={classes.navGroup}>
                <NavLink className={classes.navItems} to="/PixCorto">
                  Home
                </NavLink>
                <NavLink className={classes.navItems} to="/events">
                  Events
                </NavLink>
                <NavLink className={classes.navItems} to="/discussions">
                  Discussions
                </NavLink>
                <NavLink className={classes.navItems} to="/contactus">
                  Contact Us
                </NavLink>
                <NavLink className={classes.navItems} to="/subscription">
                  Subscription
                </NavLink>
              </div>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
