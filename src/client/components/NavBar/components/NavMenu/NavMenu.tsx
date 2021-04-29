import { Box, IconButton, BoxProps } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import cls from "classnames";
import CloseIcon from "@material-ui/icons/Close";
import NavLink from "../NavLink";
import SwitcheoBrand from "../../../SwitcheoBrand";
import { Paths, Dim } from "../../../../constants";

export interface NavMenuProps extends BoxProps {
  showMenu?: boolean;
  closeMenu: () => void;
};

const useStyles = makeStyles(theme => ({
  root: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 300,
    transition: "height .2s ease-in-out",
    backgroundColor: "#fff",
  },
  navMenu: {
    color: theme.palette.primary.main,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    overflow: "auto",
    maxWidth: Dim.maxViewWidth,
    margin: "0 auto",
  },
  navContainer: {
    padding: theme.spacing(0, 3),
  },
  iconButton: {
    color: theme.palette.primary.main,
    padding: theme.spacing(3),
    "& svg": {
      height: 56,
      width: 56,
      [theme.breakpoints.down("sm")]: {
        height: 48,
        width: 48,
      },
    },
  },
  closeIcon: {
    padding: theme.spacing(2),
  },
  brandIcon: {
    width: 150,
    margin: theme.spacing(4.5, 3),
    // [theme.breakpoints.down("sm")]: {
    //   padding: theme.spacing(3, 2.5),
    //   width: 170,
    // },
  },
}));
const NavMenu: React.FC<NavMenuProps> = (props: any) => {
  const { children, className, closeMenu, showMenu, ...rest } = props;
  const classes = useStyles();
  return (
    <Box {...rest} className={cls(classes.root, className)} style={{ height: showMenu ? "100%" : 0 }}>
      <Box className={classes.navMenu}>
        <Box display="flex" flexDirection="row">
          <a href="/">
            <SwitcheoBrand className={classes.brandIcon} />
          </a>
          <Box flex={1} />
          <IconButton className={cls(classes.iconButton, classes.closeIcon)} onClick={() => closeMenu()}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Box className={classes.navContainer} display="flex" flexDirection="column">
          <NavLink onClick={() => closeMenu()} href={Paths.home}>Home</NavLink>
          <NavLink onClick={() => closeMenu()} href={Paths.governance}>Build with us</NavLink>
          <NavLink onClick={() => closeMenu()} href={Paths.features}>About</NavLink>
          <NavLink onClick={() => closeMenu()} href={Paths.products}>Our ecosystem</NavLink>
          <NavLink onClick={() => closeMenu()} href={Paths.story}>Our story</NavLink>
          <NavLink onClick={() => closeMenu()} href={Paths.partners}>Our partners</NavLink>
          <NavLink onClick={() => closeMenu()} href={Paths.culture}>Our culture</NavLink>
          <NavLink onClick={() => closeMenu()} href={Paths.blog} target="_blank">Blog</NavLink>
          <NavLink onClick={() => closeMenu()} href={Paths.press}>Press</NavLink>
        </Box>
      </Box>
    </Box>
  );
};

export default NavMenu;