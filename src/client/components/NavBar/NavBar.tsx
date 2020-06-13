import { AppBar, Box, IconButton, Hidden, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState } from "react";
import cls from "classnames";
import useScroll from "../../utils/useScroll";
import SwitcheoBrand from "../SwitcheoBrand";

import { Dim, Paths } from "../../constants";
import { NavMenu, HeaderLink } from "./components";

const useStyles = makeStyles(theme => ({
  root: {
    zIndex: 100,
    backgroundColor: "#fff",
    transition: 'box-shadow 0.3s ease-out 0s',
    '&.elevated': {
      transition: 'box-shadow 0.3s ease-out 0s',
      '& $brandIcon': {
        width: 150,
        top: theme.spacing(2),
        transition: 'width 0.3s ease-out 0s, top 0.3s ease-out 0s',
      },
      '&:not(.expanded)': {
        '& $container': {
          height: 52,
          transition: 'height 0.3s ease-out 0.25s',
        },
        '& $expandIcon': {
          transform: 'translateY(-72px)',
          transition: 'transform 0.3s ease-out 0.45s',
        },
        '& $gridContainer': {
          transform: `translateY(calc(-100% - ${theme.spacing(1.5)}px))`,
          transition: 'transform 0.3s ease-out 0.25s',
        },
      }
    },
  },
  container: {
    position: 'relative',
    display: "flex",
    flexDirection: "row",
    width: "100%",
    maxWidth: Dim.maxViewWidth,
    margin: "auto",
    height: Dim.headerHeight,
    transition: 'height 0.3s ease-out 0s',
    [theme.breakpoints.down("xs")]: {
      height: Dim.mobileHeaderHeight,
      paddingBottom: 0,
    },
  },
  brandIcon: {
    [theme.breakpoints.up("sm")]: {
      position: 'absolute',
      width: 321,
      lineHeight: 0,
      top: theme.spacing(3),
      left: theme.spacing(3),
      transition: 'width 0.3s ease-in-out 0.3s, top 0.3s ease-in-out 0.25s',
    },
    [theme.breakpoints.down("xs")]: {
      margin: theme.spacing(2.5),
      width: 170,
    },
  },
  menuIcon: {
    color: theme.palette.primary.main,
    padding: theme.spacing(3),
    "& svg": {
      height: 40,
      width: 40,
    },
    '&:hover': {
      background: 'none',
    },
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(1.5, 2.5),
    },
  },
  expandIcon: {
    transition: 'transform 0.3s ease-in 0s',
    padding: 0,
    paddingRight: 10,
  },
  navContainer: {
    overflow: 'hidden',
    textAlign: 'right',
    width: '50vw',
    maxWidth: '640px',
    // width: `calc(min(50vw, 640px) - ${Dim.spacing * 1.5 + 1}px + ${theme.spacing(3)}px)`,
    marginRight: theme.spacing(3 - 1.5),
    marginLeft: theme.spacing(-1.5),
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
  },
  gridContainer: {
    transition: 'transform 0.3s ease-out 0.2s',
    textAlign: 'left',
  },
}));
const NavBar: React.FC<React.HTMLAttributes<HTMLDivElement>> = () => {
  const classes = useStyles();
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [isHoverExpand, setHoverExpand] = useState<boolean>(false);
  const [isScrollTop] = useScroll({ defaultState: true, rangeEnd: 100 });

  return (
    <>
      <AppBar className={cls(classes.root, { elevated: !isScrollTop, expanded: isHoverExpand })} elevation={isScrollTop ? 0 : 4}>
        <Box className={classes.container} maxWidth="lg">
          <a href="/">
            <SwitcheoBrand className={classes.brandIcon} />
          </a>
          <Box flex={1} />
          <Hidden smDown>
            <Box className={classes.navContainer} onMouseEnter={() => setHoverExpand(true)} onMouseLeave={() => setHoverExpand(false)}>
              <Grid className={classes.gridContainer} container>
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
              <IconButton className={cls(classes.menuIcon, classes.expandIcon)} size="medium">
                <MenuIcon />
              </IconButton>
            </Box>
          </Hidden>
          <Hidden mdUp>
            <IconButton className={classes.menuIcon} size="medium" onClick={() => setShowMenu(!showMenu)}>
              <MenuIcon />
            </IconButton>
          </Hidden>
        </Box>
      </AppBar>
      <NavMenu showMenu={showMenu} closeMenu={() => setShowMenu(false)} />
    </>
  );
};

export default NavBar;