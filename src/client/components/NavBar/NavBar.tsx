import { AppBar, Box, IconButton, Hidden, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState } from "react";
import useScroll from "../../utils/useScroll";
import SwitcheoBrand from "../SwitcheoBrand";

import { Dim, minBlockHeight, Paths } from "../../constants";
import { NavMenu, HeaderLink } from "./components";

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
    margin: theme.spacing(3),
    width: 321,
    [theme.breakpoints.down("xs")]: {
      margin: theme.spacing(2.5),
      width: 170,
    },
  },
  navContainer: {
    width: '50vw',
    maxWidth: '640px',
    // width: `calc(min(50vw, 640px) - ${Dim.spacing * 1.5 + 1}px + ${theme.spacing(3)}px)`,
    marginRight: theme.spacing(3 - 1.5),
    marginLeft: theme.spacing(-1.5),
    marginTop: theme.spacing(1.5),
    marginBottom: theme.spacing(1.5),
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

  // elevation={isScrollTop ? 0 : 4} for topbar boxshadow
  return (
    <>
      <AppBar className={classes.header} elevation={0}>
        <Box className={classes.container} maxWidth="lg">
          <a href="/">
            <SwitcheoBrand className={classes.brandIcon} />
          </a>
          <Box flex={1} />
          <Hidden smDown>
            <Box className={classes.navContainer}>
              <Grid container>
                <Grid item xs={4}>
                  <HeaderLink href={Paths.home}>Home</HeaderLink>
                  <HeaderLink href={Paths.exchange} target="_blank">Start trading</HeaderLink>
                  <HeaderLink href={Paths.features}>Key features</HeaderLink>
                </Grid>
                <Grid item xs={4}>
                  <HeaderLink href={Paths.story}>Our story</HeaderLink>
                  <HeaderLink href={Paths.culture}>Our culture</HeaderLink>
                  <HeaderLink href={Paths.press}>Press</HeaderLink>
                </Grid>
                <Grid item xs={4}>
                  <HeaderLink href={Paths.blog} target="_blank">Blog</HeaderLink>
                  <HeaderLink href={Paths.support} target="_blank">Support</HeaderLink>
                </Grid>
              </Grid>
            </Box>
          </Hidden>
          <Hidden mdUp>
            <IconButton className={classes.menuIcon} size="medium" onClick={() => toggleMenu()}>
              <MenuIcon />
            </IconButton>
          </Hidden>
        </Box>
      </AppBar>
      <NavMenu showMenu={showMenu} closeMenu={() => toggleMenu(false)} />
    </>
  );
};

export default NavBar;