import { Box, Container, makeStyles, Theme, Typography } from "@material-ui/core";
import React, { useMemo, useState } from "react";
import Image from "next/image";
import ArrowLeft from "src/assets/ArrowLeft.svg";
import ArrowRight from "src/assets/ArrowRight.svg";
import { Tweet } from "src/utils/types";

interface Props {
  tweets: Tweet[]
}

const WhatOthersSay: React.FC<Props> = (props: Props) => {
  const { tweets } = props;
  const classes = useStyles();
  const [selectIndex, setSelectIndex] = useState(0);

  const selectedTweet = useMemo(() => tweets[selectIndex], [tweets, selectIndex]);

  return (
    <Box component="section" className={classes.root}>
      <Container maxWidth="lg" className={classes.contentContainer}>
        <Box marginBottom={8} marginLeft={5}>
          <Typography variant="h5" color="primary">
            What Others Say
          </Typography>
        </Box>
        <Box display="flex" maxWidth="90%" marginBottom={3}>
          <Box className={classes.quoteMarks} alignItems="flex-start">&ldquo;</Box>
          <Box className={classes.quoteText}>
            {selectedTweet.text}
          </Box>
          <Box className={classes.quoteMarks} alignItems="flex-end">&rdquo;</Box>
        </Box>
        <Box display="flex" maxWidth="90%" justifyContent="space-between">
          <Box display="flex" marginLeft={3}>
            {tweets.map((tweet) => (
              <Box key={tweet.id} className={classes.tweetIconBox}>
                <Box className={classes.tweetIcon}>
                  <Image src="/assets/TwitterIconPlaceholder.png" alt="TwitterIconPlaceholder" layout="fill" />
                </Box>
              </Box>
            ))}
            <Box display="flex" flexDirection="column" justifyContent="center" marginLeft={8}>
              <Typography variant="body1" color="textPrimary">
                {selectedTweet.name}
              </Typography>
              <Typography variant="body1" color="textPrimary">
                {selectedTweet.username}
              </Typography>
            </Box>
          </Box>
          <Box display="flex" alignItems="center" marginTop={5}>
            <Box onClick={() => setSelectIndex((selectIndex - 1) % tweets.length)} className={classes.arrow}>
              <ArrowLeft className={classes.arrowSvg} />
            </Box>
            <Box onClick={() => setSelectIndex((selectIndex + 1) % tweets.length)} className={classes.arrow}>
              <ArrowRight className={classes.arrowSvg} />
            </Box>
        </Box>
        </Box>
      </Container>
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: "relative",
  },
  contentContainer: {
    position: "relative",
    padding: theme.spacing(20, 10, 10),
    minHeight: "45rem",
  },
  quoteText: {
    fontFamily: "Roobert-SemiBold",
    fontSize: "2.5rem",
    lineHeight: "121%",
    color: theme.palette.text.secondary,
    padding: theme.spacing(0, 1, 4),
  },
  quoteMarks: {
    fontFamily: "Arial",
    fontWeight: "bold",
    fontSize: "4.25rem",
    color: "#C9D2D9",
    display: "flex",
  },
  tweetIcon: {
    "& img": {
      borderRadius: "50%",
    },
    position: "relative",
    borderRadius: "50%",
    border: "1px solid #C6E579",
    height: "100%",
    width: "100%",
  },
  tweetIconBox: {
    borderRadius: "50%",
    border: "1px solid #C6E579",
    height: "6rem",
    width: "6rem",
    padding: theme.spacing(0.5),
    margin: theme.spacing(2),
  },
  arrow: {
    cursor: "pointer",
    marginRight: theme.spacing(3),
  },
  arrowSvg: {
    "& path": {
      fill: theme.palette.primary.main,
    },
  },
}));

export default WhatOthersSay;
