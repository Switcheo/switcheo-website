import { Box, BoxProps, makeStyles, Theme, Typography } from "@material-ui/core";
import React, { useMemo, useState } from "react";
import ArrowLeft from "src/assets/ArrowLeft.svg";
import ArrowRight from "src/assets/ArrowRight.svg";
import { Twitter } from "src/assets/social";
import { Tweet } from "src/utils/types";

interface Props extends BoxProps {
  tweets: Tweet[]
}

const TweetCard: React.FC<Props> = (props: Props) => {
  const { tweets } = props;
  const classes = useStyles();
  const [selectIndex, setSelectIndex] = useState(0);

  const selectedTweet = useMemo(() => tweets[selectIndex], [tweets, selectIndex]);

  return (
    <Box borderRadius={50} className={classes.root}>
      <Box className={classes.tweet}>
        &ldquo;{selectedTweet.text}&rdquo;
      </Box>
      <Typography variant="subtitle1" color="textSecondary">
        {selectedTweet.username}
      </Typography>
      <Box className={classes.icons}>
        <Box display="flex">
          <Box onClick={() => setSelectIndex((selectIndex - 1) % tweets.length)} className={classes.arrow}>
            <ArrowLeft className={classes.arrowSvg} />
          </Box>
          <Box onClick={() => setSelectIndex((selectIndex + 1) % tweets.length)} className={classes.arrow}>
            <ArrowRight className={classes.arrowSvg} />
          </Box>
        </Box>
        <Twitter className={classes.bird} />
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "35rem",
    minHeight: "26.25rem",
    padding: theme.spacing(6, 5, 2),
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  tweet: {
    fontFamily: "Roobert-Medium",
    fontSize: "2.125rem",
    lineHeight: "121%",
    color: theme.palette.text.secondary,
    maxWidth: "90%",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(5),
  },
  icons: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: theme.spacing(5),
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
    "& path": {
      fill: "#26AECC",
    },
  },
}));

export default TweetCard;
