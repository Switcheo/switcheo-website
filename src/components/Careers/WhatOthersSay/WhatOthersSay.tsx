import { Box, Container, makeStyles, Theme, Typography } from "@material-ui/core";
import React, { useMemo, useState } from "react";
import Image from "next/image";
import ArrowLeft from "src/assets/ArrowLeft.svg";
import ArrowRight from "src/assets/ArrowRight.svg";
import { Tweet } from "src/utils/types";
import clsx from "clsx";
import { AnchorLink } from "src/components/Common";

interface Props {
  tweets: Tweet[]
}

const WhatOthersSay: React.FC<Props> = (props: Props) => {
  const { tweets } = props;
  const classes = useStyles();
  const [selectIndex, setSelectIndex] = useState(0);

  const selectedTweet = useMemo(() => tweets[selectIndex], [tweets, selectIndex]);

  const onChangeIndex = (index: number) => {
    if (index < 0) {
      setSelectIndex(tweets.length - 1);
    } else {
      setSelectIndex(index);
    }
  };

  return (
    <Box component="section" className={classes.root}>
      <Container maxWidth="lg" className={classes.contentContainer}>
        <Box className={classes.sectionTitle}>
          <Typography variant="h5" color="primary">
            What Others Say
          </Typography>
        </Box>
        <Box className={classes.quote}>
          <Box className={classes.quoteMarks} alignItems="flex-start">&ldquo;</Box>
          <Box className={classes.quoteText}>
            {selectedTweet.tweet}
          </Box>
          <Box className={classes.quoteMarks} alignItems="flex-end">&rdquo;</Box>
        </Box>
        <Box className={classes.tweetItems}>
          <Box className={classes.tweetDetails}>
            <Box display="flex">
              {tweets.map((tweet, index) => tweet.userProfilePictureUrl && (
                <Box
                  key={index}
                  className={clsx(
                    classes.tweetIconBox,
                    classes.link,
                    { [classes.selected]: index === selectIndex }
                  )}
                  onClick={() => onChangeIndex(index)}
                >
                  {tweet.userProfilePictureUrl && (
                    <Box className={classes.tweetIcon}>
                      <Image src={tweet.userProfilePictureUrl} alt="TwitterIcon" layout="fill" />
                    </Box>
                  )}
                </Box>
              ))}
            </Box>
            <AnchorLink href={selectedTweet.tweetUrl}>
              <Box className={classes.tweetUser}>
                <Typography variant="body1" color="textPrimary">
                  {selectedTweet.name}
                </Typography>
                <Typography variant="body1" color="textPrimary">
                  {selectedTweet.twitterHandle}
                </Typography>
              </Box>
            </AnchorLink>
          </Box>
          <Box className={classes.arrows}>
            <Box onClick={() => onChangeIndex((selectIndex - 1) % tweets.length)} className={classes.leftArrow}>
              <ArrowLeft className={clsx(classes.arrowSvg, classes.link)} />
            </Box>
            <Box onClick={() => onChangeIndex((selectIndex + 1) % tweets.length)}>
              <ArrowRight className={clsx(classes.arrowSvg, classes.link)} />
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
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(20, 5, 10, 10),
    },
    [theme.breakpoints.only("xs")]: {
      padding: theme.spacing(8, 3, 5, 5),
    },
  },
  sectionTitle: {
    marginBottom: theme.spacing(8),
    marginLeft: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(5),
      marginLeft: theme.spacing(4),
    },
    [theme.breakpoints.only("xs")]: {
      marginBottom: theme.spacing(1),
      marginLeft: theme.spacing(2),
    },
  },
  quote: {
    display: "flex",
    maxWidth: "90%",
    marginBottom: theme.spacing(3),
    [theme.breakpoints.only("xs")]: {
      marginBottom: 0,
    },
  },
  quoteText: {
    fontFamily: "Roobert-SemiBold",
    fontSize: "2.5rem",
    lineHeight: "121%",
    color: theme.palette.text.secondary,
    padding: theme.spacing(0, 1, 4),
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.only("xs")]: {
      fontSize: "1rem",
      padding: theme.spacing(0, 1, 2),
    },
  },
  quoteMarks: {
    fontFamily: "Arial",
    fontWeight: "bold",
    fontSize: "4.25rem",
    color: "#C9D2D9",
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.875rem",
    },
    [theme.breakpoints.only("xs")]: {
      fontSize: "1.375rem",
    },
  },
  tweetIcon: {
    "& img": {
      borderRadius: "50%",
    },
    position: "relative",
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
    [theme.breakpoints.down("sm")]: {
      height: "4rem",
      width: "4rem",
      margin: theme.spacing(1),
    },
    [theme.breakpoints.only("xs")]: {
      height: "1.625rem",
      width: "1.625rem",
      padding: 2,
      margin: theme.spacing(0.5),
    },
    transform: "scale(1)",
    transition: "transform ease-in 0.3s",
  },
  selected: {
    transform: "scale(1.1)",
    transition: "transform ease-in 0.3s",
  },
  arrows: {
    display: "flex",
    alignItems: "center",
    marginTop: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      marginRight: theme.spacing(2),
      marginLeft: theme.spacing(2),
    },
    [theme.breakpoints.only("xs")]: {
      marginTop: theme.spacing(2),
    },
  },
  arrowSvg: {
    width: "2.5rem",
    height: "2.5rem",
    "& path": {
      fill: theme.palette.primary.main,
    },
    [theme.breakpoints.down("sm")]: {
      height: "3.375rem",
      width: "3.375rem",
    },
    [theme.breakpoints.only("xs")]: {
      height: "1.375rem",
      width: "1.375rem",
    },
  },
  leftArrow: {
    marginRight: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      marginRight: theme.spacing(8),
    },
    [theme.breakpoints.only("xs")]: {
      marginRight: theme.spacing(4),
    },
  },
  tweetItems: {
    display: "flex",
    maxWidth: "90%",
    justifyContent: "space-between",
    [theme.breakpoints.only("xs")]: {
      flexDirection: "column",
    },
  },
  tweetDetails: {
    display: "flex",
    marginLeft: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing(1),
      flexDirection: "column-reverse",
      alignItems: "flex-start",
    },
    [theme.breakpoints.only("xs")]: {
      marginLeft: theme.spacing(1.5),
    },
  },
  tweetUser: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: theme.spacing(8),
    [theme.breakpoints.down("md")]: {
      marginLeft: theme.spacing(3),
      marginRight: theme.spacing(3),
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(3),
    },
    [theme.breakpoints.only("xs")]: {
      marginLeft: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  },
  link: {
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

export default WhatOthersSay;
