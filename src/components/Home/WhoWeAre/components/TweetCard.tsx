import { Box, BoxProps, Hidden, makeStyles, Theme, Typography } from "@material-ui/core";
import React, { useMemo, useState } from "react";
import ArrowLeft from "src/assets/ArrowLeft.svg";
import ArrowRight from "src/assets/ArrowRight.svg";
import TwitterIcon from "src/assets/TwitterIcon.svg";
import { Tweet } from "src/utils/types";

interface Props extends BoxProps {
  tweets: Tweet[]
}

const TweetCard: React.FC<Props> = (props: Props) => {
  const { tweets } = props;
  const classes = useStyles();
  const [selectIndex, setSelectIndex] = useState(0);

  const onChangeIndex = (index: number) => {
    if (index < 0) {
      setSelectIndex(tweets.length - 1);
    } else {
      setSelectIndex(index);
    }
  };

  const selectedTweet = useMemo(() => tweets[selectIndex], [tweets, selectIndex]);

  return (
    <Box className={classes.root}>
      <Box className={classes.tweet}>
        &ldquo;{selectedTweet.text}&rdquo;
      </Box>
      <Hidden smDown>
        <Typography variant="subtitle1" color="textSecondary">
          {selectedTweet.username}
        </Typography>
      </Hidden>
      <Box className={classes.icons}>
        <Box display="flex">
          <Box onClick={() => onChangeIndex((selectIndex - 1) % tweets.length)} className={classes.arrow}>
            <ArrowLeft className={classes.arrowSvg} />
          </Box>
          <Box onClick={() => onChangeIndex((selectIndex + 1) % tweets.length)}>
            <ArrowRight className={classes.arrowSvg} />
          </Box>
        </Box>
        <Box display="flex" alignItems="center">
          <TwitterIcon className={classes.bird} />
          <Hidden mdUp>
            <Box className={classes.username}>
              <Typography variant="subtitle1" color="textSecondary">
                {selectedTweet.username}
              </Typography>
            </Box>
          </Hidden>
        </Box>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: 50,
    padding: theme.spacing(6, 5, 3),
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      borderRadius: 30,
      padding: theme.spacing(4),
    },
    [theme.breakpoints.only("xs")]: {
      borderRadius: 14,
      padding: theme.spacing(2, 1),
    },
  },
  tweet: {
    fontFamily: "Roobert-Medium",
    fontSize: "2.125rem",
    lineHeight: "121%",
    color: theme.palette.text.secondary,
    maxWidth: "90%",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
      fontSize: "1.75rem",
      paddingBottom: theme.spacing(3),
    },
    [theme.breakpoints.only("xs")]: {
      fontSize: "1rem",
    },
  },
  icons: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(2),
      flexDirection: "row-reverse",
    },
    [theme.breakpoints.only("xs")]: {
      margin: theme.spacing(0, 1),
    },
  },
  arrow: {
    cursor: "pointer",
    marginRight: theme.spacing(3),
  },
  arrowSvg: {
    "& path": {
      fill: "#C9D2D9",
    },
  },
  bird: {
    width: "2.1875rem",
    [theme.breakpoints.down("sm")]: {
      width: "1.6875rem",
    },
    [theme.breakpoints.only("xs")]: {
      width: "0.8125rem",
    },
  },
  username: {
    marginTop: theme.spacing(-1),
    marginLeft: theme.spacing(3),
    [theme.breakpoints.only("xs")]: {
      marginTop: 0,
      marginLeft: theme.spacing(1),
    },
  },
}));

export default TweetCard;
