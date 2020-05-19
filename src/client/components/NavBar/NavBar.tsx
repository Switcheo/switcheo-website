import { AppBar, Box, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState } from "react";
import useScroll from "../../utils/useScroll";
import SwitcheoBrand from "../SwitcheoBrand";

import { Dim } from "../../contants";
import { NavMenu } from "./components";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    maxWidth: Dim.maxViewWidth,
    margin: "auto",
    height: Dim.headerHeight,
    [theme.breakpoints.down("xs")]: {
      height: Dim.mobileHeaderHeight,
      paddingBottom: 0,
    },
  },
  header: {
    zIndex: 100,
    backgroundColor: "#fff",
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
          <IconButton className={classes.menuIcon} size="medium" onClick={() => toggleMenu()}>
            <MenuIcon />
          </IconButton>
        </Box>
      </AppBar>
      <NavMenu showMenu={showMenu} closeMenu={() => toggleMenu(false)} />
    </>
  );
};

export default NavBar;