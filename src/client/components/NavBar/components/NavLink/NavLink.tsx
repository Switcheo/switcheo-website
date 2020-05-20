import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Typography, Hidden } from "@material-ui/core";
import SwitcheoLogo from "../../../SwitcheoLogo";

// @ts-ignore
import AnchorLink from "react-anchor-link-smooth-scroll";

export interface NavLinkProps {
  anchorLink?: String;
  target?: String;
  href?: String;
}

const useStyles = makeStyles(theme => ({
  root: {
    alignSelf: "flex-start",
    display: "flex",
    flexDirection: "row",
    width: "100%",
    borderTop: `1px solid ${theme.palette.primary.main}`,
    "&:last-child": {
      borderBottom: `1px solid ${theme.palette.primary.main}`,
    },
    padding: theme.spacing(1, 0, 3),
    [theme.breakpoints.down("lg")]: {
      padding: theme.spacing(0, 0, 1.5),
    },
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(0, 0, 1),
    },
  },
  link: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    color: theme.palette.primary.main,
    transition: "color .2s ease-in-out",
    textDecoration: "none",
    padding: 0,
    "&:hover": {
      color: theme.palette.secondary.main,
      cursor: "pointer",
    },
    
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
  icon: {
    marginLeft: "auto",
    padding: theme.spacing(1),
    height: 100,
    width: 100,
    "& svg": {
      verticalAlign: "top",
    },
    [theme.breakpoints.down("lg")]: {
      height: 75,
      width: 75,
    },
    [theme.breakpoints.down("md")]: {
      height: 48,
      width: 48,
    },
  },
}));
const NavLink: React.FC<NavLinkProps & React.HTMLAttributes<HTMLAnchorElement>> = (props: any) => {
  const { children, onClick, anchorLink, href, ...rest } = props;
  const classes = useStyles();

  const getScrollOffset = () => {
    return window.innerWidth <= 600 ? 64: (88 + 24);
  };

  return (
    <div className={classes.root}>
      {anchorLink ? (
        <AnchorLink offset={() => getScrollOffset()} onClick={onClick} href={anchorLink} className={classes.link}>
          {children}
          <Hidden xsDown>
            <SwitcheoLogo className={classes.icon} />
          </Hidden>
        </AnchorLink>
      ) : (
          <Typography component="a" onClick={onClick} href={href} {...rest} className={classes.link}>
            {children}
            <Hidden xsDown>
              <SwitcheoLogo className={classes.icon} />
            </Hidden>
          </Typography>
        )}
    </div>
  );
};

NavLink.propTypes = {
};

export default NavLink;