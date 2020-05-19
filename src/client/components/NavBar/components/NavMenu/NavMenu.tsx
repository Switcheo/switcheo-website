import { Box, IconButton, BoxProps } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import cls from "classnames";
import CloseIcon from "@material-ui/icons/Close";
import NavLink from "../NavLink";
import SwitcheoLogo from "../../../SwitcheoLogo";

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
const NavMenu: React.FC<NavMenuProps> = (props: any) => {
  const { children, className, closeMenu, showMenu, ...rest } = props;
  const classes = useStyles();
  return (
    <Box {...rest} className={cls(classes.root, className)} style={{ height: showMenu ? "100%" : 0 }}>
      <Box className={classes.navMenu}>
        <Box display="flex" flexDirection="row">
          <SwitcheoLogo className={classes.logoIcon} />
          <Box flex={1} />
          <IconButton className={classes.closeIcon} size="medium" onClick={() => closeMenu()}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Box className={classes.navContainer} display="flex" flexDirection="column">
          <NavLink onClick={() => closeMenu()} href="/features">Key features</NavLink>
          <NavLink onClick={() => closeMenu()} target="_blank" href="https://switcheo.exchange/">Exchange</NavLink>
          <NavLink onClick={() => closeMenu()} href="/#story">Our story</NavLink>
          <NavLink onClick={() => closeMenu()} href="/#culture">Our culture</NavLink>
          <NavLink onClick={() => closeMenu()} href="/#press">Press</NavLink>
          <NavLink onClick={() => closeMenu()} href="/#blog">Blog</NavLink>
          <NavLink onClick={() => closeMenu()} href="/#support">Support</NavLink>
        </Box>
      </Box>
    </Box>
  );
};

export default NavMenu;