import { Box, Hidden, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";
import React from "react";
import SocialLinkBox from "./SocialLinkBox";
import SwitcheoBrand from "src/assets/SwitcheoBrand.svg";

const HomeFooter: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Hidden smDown>
        <Box className={classes.textSection}>
          <Box className={classes.text}>
            Switcheo Labs
          </Box>
          <Box className={classes.text}>
            Privacy Policy
          </Box>
          <Box className={classes.text}>
            Terms & Conditions
          </Box>
        </Box>
      </Hidden>
      <Hidden mdUp>
        <Link href="/" passHref>
          <SwitcheoBrand className={classes.img} />
        </Link>
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
    padding: theme.spacing(5, 10, 3, 15),
    fontFamily: "Inter",
    letterSpacing: "-0.02em",
    fontSize: "0.875rem",
    color: theme.palette.common.white,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      padding: theme.spacing(10),
    },
  },
  img: {
    "& path": {
      fill: "#FFF",
    },
    width: "10.625rem",
    marginBottom: theme.spacing(7),
  },
  textSection: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    padding: theme.spacing(1),
  },
}));

export default HomeFooter;
