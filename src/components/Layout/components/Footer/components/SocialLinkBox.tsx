import { Box, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Discord, Linkedin, Twitter } from "src/assets/social";
import { AnchorLink } from "src/components/Common";
import { Paths } from "src/utils/paths";

const SocialLinkBox: React.FC = () => {
  const classes = useStyles();

  const socialLinks = [
    {
      icon: <Twitter />,
      url: Paths.social.twitter,
    },
    {
      icon: <Discord />,
      url: Paths.social.discord,
    },
    {
      icon: <Linkedin />,
      url: Paths.social.linkedin,
    },
  ];

  return (
    <Box className={classes.root}>
      {socialLinks.map((link) => (
        <AnchorLink key={link.url} href={link.url}>
          <Box className={classes.icon}>
            {link.icon}
          </Box>
        </AnchorLink>
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
    width: "1.875rem",
    height: "1.875rem",
    borderRadius: "50%",
    margin: theme.spacing(0.5),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.common.white,
    "&:hover": {
      cursor: "pointer",
    },
    [theme.breakpoints.only("sm")]: {
      width: "3.75rem",
      height: "3.75rem",
    },
    "& svg": {
      width: "1rem",
      height: "1rem",
      "& path": {
        fill: theme.palette.primary.main,
      },
      [theme.breakpoints.only("sm")]: {
        width: "1.875rem",
        height: "1.875rem",
      },
    },
  },
}));

export default SocialLinkBox;
