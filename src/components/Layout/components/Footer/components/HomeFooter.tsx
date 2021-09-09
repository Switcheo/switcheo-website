import { Box, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import SocialLinkBox from "./SocialLinkBox";

const HomeFooter: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
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
