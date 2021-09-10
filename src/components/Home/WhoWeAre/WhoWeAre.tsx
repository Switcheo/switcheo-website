import { Box, Container, makeStyles, Theme, Typography } from "@material-ui/core";
import React from "react";
import { Photo, SwthButton } from "src/components/Common";
import { Tweet } from "src/utils/types";
import { TweetCard } from "./components";

interface Props {
  tweetData: Tweet[]
}

const WhoWeAre: React.FC<Props> = (props: Props) => {
  const { tweetData } = props;
  const classes = useStyles();

  return (
    <Box component="section" className={classes.root}>
      <Container maxWidth="lg" className={classes.contentContainer}>
        <Box className={classes.content}>
          <Box className={classes.sectionTitle}>
            <Typography variant="h5" color="primary">
              Who We Are
            </Typography>
          </Box>
          <Box className={classes.text}>
            <Box className={classes.title}>
              <Typography variant="h2" color="primary" align="right">
                Run by pioneers in decentralization
              </Typography>
            </Box>
            <Box className={classes.description}>
              <Typography variant="body1" color="textSecondary" align="right">
                As pioneers in the DeFi realm,
                Switcheo Labs has led the pack with multiple world-firsts.
                Come experience the magic we have helped to create. 
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box className={classes.images}>
          <Box display="flex" flexDirection="column" >
            <Photo src="/assets/team1.jpg" alt="Team1" orientation="landscape" className={classes.photo} />
            <Box height={240}>
              <TweetCard tweets={tweetData} />
            </Box>
          </Box>
          <Box display="flex" flexDirection="column" marginTop={30}>
            <Photo src="/assets/team2.jpg" alt="Team2" orientation="portrait" className={classes.photo} />
            <Box marginTop={-5}>
              <SwthButton>
                Meet our Team
              </SwthButton>
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
    padding: theme.spacing(15, 8),
  },
  content: {
    display: "flex",
    justifyContent: "space-between",
  },
  sectionTitle: {
    marginTop: theme.spacing(3),
    width: "30%",
  },
  text: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  title: {
    marginBottom: theme.spacing(5),
  },
  description: {
    maxWidth: "60%",
  },
  images: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: theme.spacing(-12),
    marginRight: theme.spacing(5),
  },
  photo: {
    marginBottom: theme.spacing(10),
  },
}));

export default WhoWeAre;
