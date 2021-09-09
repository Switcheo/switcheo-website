import { Box, Container, makeStyles, Theme, Typography } from "@material-ui/core";
import React from "react";
import { Photo, SwthButton } from "src/components/Common";

const WhoWeAre: React.FC = () => {
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
          <Box display="flex" flexDirection="column">
            <Photo src="/assets/team1.jpg" alt="Team1" orientation="landscape" className={classes.photo} />
            <Photo src="/assets/team1.jpg" alt="Team1" orientation="landscape" className={classes.photo} />
          </Box>
          <Box display="flex" flexDirection="column">
            <Photo src="/assets/team2.jpg" alt="Team2" orientation="portrait" className={classes.photo} />
            <SwthButton>Meet the Team</SwthButton>
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
    alignItems: "center",
    margin: theme.spacing(-12, 0),
  },
  photo: {
    marginBottom: theme.spacing(10),
  },
}));

export default WhoWeAre;
