import { Box, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
import React from "react";
import { Discord, Facebook, Linkedin, Medium, Reddit, Telegram, Twitter } from "src/assets/social";

const SocialLinkBox: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.icon}>
        <Image src={Discord} alt="Discord" />
      </Box>
      <Box className={classes.icon}>
        <Image src={Telegram} alt="Telegram" />
      </Box>
      <Box className={classes.icon}>
        <Image src={Twitter} alt="Twitter" />
      </Box>
      <Box className={classes.icon}>
        <Image src={Reddit} alt="Reddit" />
      </Box>
      <Box className={classes.icon}>
        <Image src={Medium} alt="Medium" />
      </Box>
      <Box className={classes.icon}>
        <Image src={Linkedin} alt="Linkedin" />
      </Box>
      <Box className={classes.icon}>
        <Image src={Facebook} alt="Facebook" />
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
