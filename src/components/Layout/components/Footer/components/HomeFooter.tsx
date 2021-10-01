import { Box, Hidden, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import SocialLinkBox from "./SocialLinkBox";
import SwitcheoBrand from "src/assets/SwitcheoBrand.svg";
import { AnchorLink } from "src/components/Common";

const HomeFooter: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Hidden smDown>
        <Box className={classes.textSection}>
          <AnchorLink href="/">
            <Box className={classes.text}>
              Switcheo Labs
            </Box>
          </AnchorLink>
          <AnchorLink href="/">
            <Box className={classes.text}>
              Privacy Policy
            </Box>
          </AnchorLink>
          <AnchorLink href="/">
            <Box className={classes.text}>
              Terms & Conditions
            </Box>
          </AnchorLink>
        </Box>
      </Hidden>
      <Hidden mdUp>
        <AnchorLink href="/">
          <Box>
            <SwitcheoBrand className={classes.img} />
          </Box>
        </AnchorLink>
      </Hidden>
      <SocialLinkBox />
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(5, 10),
    fontFamily: "Inter",
    letterSpacing: "-0.02em",
    fontSize: "0.875rem",
    color: theme.palette.common.white,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      padding: theme.spacing(10),
    },
    [theme.breakpoints.only("xs")]: {
      padding: theme.spacing(5, 0, 8),
    },
  },
  img: {
    "& path": {
      fill: "#FFF",
    },
    width: "10.625rem",
    marginBottom: theme.spacing(7),
    [theme.breakpoints.only("xs")]: {
      marginBottom: theme.spacing(4),
      width: "6.25rem",
    },
  },
  textSection: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    color: theme.palette.common.white,
    padding: theme.spacing(1),
  },
}));

export default HomeFooter;
