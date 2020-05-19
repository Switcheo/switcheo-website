import { AppBar, Box, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import React, { useState } from "react";
import useScroll from "../../utils/useScroll";
import SwitcheoBrand from "../SwitcheoBrand";
import { NavLink } from "./components";
import SwitcheoLogo from "../SwitcheoLogo";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    maxWidth: 1920,
    margin: "auto",
    height: 88,
    [theme.breakpoints.down("xs")]: {
      height: 64,
      paddingBottom: 0,
    },
  },
  header: {
    zIndex: 100,
    backgroundColor: "#fff",
  },
  brandIcon: {
    color: theme.palette.primary.main,
    marginLeft: theme.spacing(3),
    marginTop: theme.spacing(3),
    width: 316,
    [theme.breakpoints.down("xs")]: {
      marginLeft: theme.spacing(2.5),
      marginTop: theme.spacing(2.5),
      width: 170,
    },
  },
  navMenu: {
    color: theme.palette.primary.main,
    backgroundColor: "#fff",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    overflow: "auto",
    "& a": {
      padding: 0,
      fontSize: 133,
      letterSpacing: "-7px",
      lineHeight: "100px",
      fontWeight: "bold",
      [theme.breakpoints.down("lg")]: {
        fontSize: 96,
        letterSpacing: "-5px",
        lineHeight: "100px",
      },
      [theme.breakpoints.down("md")]: {
        fontSize: 58,
        letterSpacing: "-3.05px",
        lineHeight: "55px",
      },
    },
  },
  menuContainer: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 300,
    transition: "height .2s ease-in-out",
  },
  menuIcon: {
    color: theme.palette.primary.main,
    padding: theme.spacing(3),
    "& svg": {
      height: 40,
      width: 40,
    },
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(1.5, 2.5),
    },
  },
  navContainer: {
    padding: theme.spacing(0, 3),
  },
  closeIcon: {
    color: theme.palette.primary.main,
    padding: theme.spacing(2),
    "& svg": {
      height: 40,
      width: 40,
    },
  },
  logoIcon: {
    padding: theme.spacing(3),
    height: 40,
    width: 40,
    "& svg": {
      height: 24,
      width: 24,
    },
  },
}));
const NavBar: React.FC<React.HTMLAttributes<HTMLDivElement>> = () => {
  const classes = useStyles();
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [isScrollTop] = useScroll({ defaultState: true, rangeEnd: 0 });

  const toggleMenu = (hide?: boolean) => {
    const newState = hide === false ? false : !showMenu;
    setShowMenu(newState);
  };

  return (
    <>
      <AppBar className={classes.header} elevation={isScrollTop ? 0 : 4}>
        <Box className={classes.container} maxWidth="xl">
          <SwitcheoBrand className={classes.brandIcon} />
          <Box flex={1} />
          <IconButton className={classes.menuIcon} size="medium">
            <MenuIcon onClick={() => toggleMenu()} />
          </IconButton>
        </Box>
      </AppBar>
      <div className={classes.menuContainer} style={{ height: showMenu ? "100%" : 0 }}>
        <div className={classes.navMenu}>
          <Box display="flex" flexDirection="row">
            <SwitcheoLogo className={classes.logoIcon} />
            <Box flex={1} />
            <IconButton className={classes.closeIcon} size="medium">
              <CloseIcon onClick={() => toggleMenu(false)} />
            </IconButton>
          </Box>

          <Box className={classes.navContainer} display="flex" flexDirection="column">
            <NavLink onClick={() => toggleMenu(false)} anchorLink="#features">Key features</NavLink>
            <NavLink onClick={() => toggleMenu(false)} target="_blank" href="https://switcheo.exchange/">Exchange</NavLink>
            <NavLink onClick={() => toggleMenu(false)} anchorLink="#story">Our story</NavLink>
            <NavLink onClick={() => toggleMenu(false)} anchorLink="#culture">Our culture</NavLink>
            <NavLink onClick={() => toggleMenu(false)} anchorLink="#press">Press</NavLink>
            <NavLink onClick={() => toggleMenu(false)} anchorLink="#blog">Blog</NavLink>
            <NavLink onClick={() => toggleMenu(false)} anchorLink="#support">Support</NavLink>
          </Box>
        </div>
      </div>
    </>
  );
};

export default NavBar;