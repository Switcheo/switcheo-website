import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

export interface HeaderLinkProps {
  target?: String;
  href?: String;
}

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(0, 1.5),
    display: "flex",
    "&:hover $link": {
      color: theme.palette.primary.dark,
    },
  },
  link: {
    flex: 1,
    textDecoration: "none",
    borderTop: `1px solid #9DADB2`,
    width: "100%",
    color: theme.palette.primary.main,
    fontSize: "16px",
    lineHeight: "21px",
    letterSpacing: "-0.4px",
    marginBottom: 0,
  },
}));
const HeaderLink: React.FC<HeaderLinkProps & React.HTMLAttributes<HTMLAnchorElement>> = (props: any) => {
  const { children, onClick, href, ...rest } = props;
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography component="a" onClick={onClick} href={href} {...rest} className={classes.link}>
        {children}
      </Typography>
    </Box>
  );
};

HeaderLink.propTypes = {
};

export default HeaderLink;