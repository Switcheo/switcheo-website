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
    paddingTop: theme.spacing(0.25),
    paddingBottom: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
  link: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    color: theme.palette.primary.main,
    transition: "color .2s ease-in-out",
    textDecoration: "none",
    padding: 0,
    fontSize: 42,
    lineHeight: 1.2,
    letterSpacing: "-1px",
    "&:hover": {
      color: theme.palette.secondary.main,
      cursor: "pointer",
    },
  },
  icon: {
    marginLeft: "auto",
    padding: theme.spacing(1),
    height: 75,
    width: 75,
    "& svg": {
      verticalAlign: "top",
    },
    // [theme.breakpoints.up("xl")]: {
    //   height: 100,
    //   width: 100,
    // },
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
    return window.innerWidth <= 600 ? 64 : (88 + 24);
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