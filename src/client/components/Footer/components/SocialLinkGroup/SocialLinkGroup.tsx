import { Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import cls from "classnames";
import React from "react";
import { Paths } from "../../../../constants";
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
      "&:hover": {
        backgroundColor: "transparent",
        "& svg path": {
          fill: theme.palette.primary.dark,
        }
      },
    },
  },
}));
const SocialLinkGroup: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props: any) => {
  const { children, className, ...rest } = props;
  const classes = useStyles();
  return (
    <Box {...rest} className={cls(classes.root, className)}>
      <Button href={Paths.social_telegram}>
        <TelegramIcon />
      </Button>
      <Button href={Paths.social_twitter}>
        <TwitterIcon />
      </Button>
      <Button href={Paths.social_medium}>
        <MediumIcon />
      </Button>
      <Button href={Paths.social_reddit}>
        <RedditIcon />
      </Button>
      <Button href={Paths.social_linkedin}>
        <LinkedInIcon />
      </Button>
      <Button href={Paths.social_facebook}>
        <FacebookIcon />
      </Button>
      <Button href={Paths.social_youtube}>
        <YouTubeIcon />
      </Button>
    </Box>
  );
};

export default SocialLinkGroup;