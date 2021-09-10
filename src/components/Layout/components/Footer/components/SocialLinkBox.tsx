import { Box, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Discord, Facebook, Linkedin, Medium, Reddit, Telegram, Twitter } from "src/assets/social";

const SocialLinkBox: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.icon}>
        <Discord />
      </Box>
      <Box className={classes.icon}>
        <Telegram />
      </Box>
      <Box className={classes.icon}>
        <Twitter />
      </Box>
      <Box className={classes.icon}>
        <Reddit />
      </Box>
      <Box className={classes.icon}>
        <Medium />
      </Box>
      <Box className={classes.icon}>
        <Linkedin />
      </Box>
      <Box className={classes.icon}>
        <Facebook />
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  icon: {
    padding: theme.spacing(1.5),
  },
}));

export default SocialLinkBox;
