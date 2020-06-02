import { Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import cls from "classnames";
import React from "react";
import { ReactComponent as FacebookIcon } from "./social-icons/facebook.svg";
import { ReactComponent as LinkedInIcon } from "./social-icons/linkedin.svg";
import { ReactComponent as MediumIcon } from "./social-icons/medium.svg";
import { ReactComponent as RedditIcon } from "./social-icons/reddit.svg";
import { ReactComponent as TelegramIcon } from "./social-icons/telegram.svg";
import { ReactComponent as TwitterIcon } from "./social-icons/twitter.svg";
import { ReactComponent as YouTubeIcon } from "./social-icons/youtube.svg";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("sm")]: {
      marginLeft: -theme.spacing(2),
      marginRight: -theme.spacing(2),
      width: `calc(100% + ${theme.spacing(4)}px)`,
      marginBottom: theme.spacing(3),
      justifyContent: "space-between",
    },
    "& a": {
      minWidth: 0,
      padding: theme.spacing(.75),
      margin: theme.spacing(0, .5),
      "& svg": {
        width: 30,
        height: 30,
        margin: 1,
        "& path": {
          transition: "fill .2s ease-in-out",
          fill: theme.palette.primary.main,
        }
      },
      "&:hover svg path": {
        fill: "#666666"
      }
    },
  },
}));
const SocialLinkGroup: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props: any) => {
  const { children, className, ...rest } = props;
  const classes = useStyles();
  return (
    <Box {...rest} className={cls(classes.root, className)}>
      <Button href="https://switcheo.network">
        <TelegramIcon />
      </Button>
      <Button href="https://switcheo.network">
        <TwitterIcon />
      </Button>
      <Button href="https://switcheo.network">
        <MediumIcon />
      </Button>
      <Button href="https://switcheo.network">
        <RedditIcon />
      </Button>
      <Button href="https://switcheo.network">
        <LinkedInIcon />
      </Button>
      <Button href="https://switcheo.network">
        <FacebookIcon />
      </Button>
      <Button href="https://switcheo.network">
        <YouTubeIcon />
      </Button>
    </Box>
  );
};

export default SocialLinkGroup;