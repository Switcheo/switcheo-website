import { Box, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";
import React from "react";
import { Discord, Facebook, Linkedin, Medium, Reddit, Telegram, Twitter } from "src/assets/social";
import { Paths } from "src/utils/paths";

const SocialLinkBox: React.FC = () => {
  const classes = useStyles();

  const socialLinks = [
    {
      icon: <Discord />,
      url: Paths.social.discord,
    },
    {
      icon: <Telegram />,
      url: Paths.social.telegram,
    },
    {
      icon: <Twitter />,
      url: Paths.social.twitter,
    },
    {
      icon: <Reddit />,
      url: Paths.social.reddit,
    },
    {
      icon: <Medium />,
      url: Paths.social.medium,
    },
    {
      icon: <Linkedin />,
      url: Paths.social.linkedin,
    },
    {
      icon: <Facebook />,
      url: Paths.social.facebook,
    },
  ];

  return (
    <Box className={classes.root}>
      {socialLinks.map((link) => (
        <Link key={link.url} href={link.url} passHref>
          <Box className={classes.icon}>
            {link.icon}
          </Box>
        </Link>
      ))}
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
    width: "2.5rem",
    height: "2.5rem",
    borderRadius: "50%",
    margin: theme.spacing(1),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.common.white,
    "&:hover": {
      cursor: "pointer",
    },
    "& svg": {
      "& path": {
        fill: theme.palette.primary.main,
      },
    },
  },
}));

export default SocialLinkBox;
