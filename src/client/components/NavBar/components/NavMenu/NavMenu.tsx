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
  logoIcon: {
    color: theme.palette.primary.main,
    "& svg": {
      height: 32,
      width: 32,
      [theme.breakpoints.down("sm")]: {
        height: 24,
        width: 24,
      },
    }
  },
}));
const NavMenu: React.FC<NavMenuProps> = (props: any) => {
  const { children, className, closeMenu, showMenu, ...rest } = props;
  const classes = useStyles();
  return (
    <Box {...rest} className={cls(classes.root, className)} style={{ height: showMenu ? "100%" : 0 }}>
      <Box className={classes.navMenu}>
        <Box display="flex" flexDirection="row">
          <IconButton className={classes.iconButton} href="/">
            <SwitcheoLogo className={classes.logoIcon} />
          </IconButton>
          <Box flex={1} />
          <IconButton className={cls(classes.iconButton, classes.closeIcon)} onClick={() => closeMenu()}>
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