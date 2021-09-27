import { Box, Container, Hidden, makeStyles, Theme, Typography } from "@material-ui/core";
import React from "react";
import { Team1, Team2 } from "src/assets/images";
import { Photo, SwthButton } from "src/components/Common";
import { Tweet } from "src/utils/types";
import { TweetCard } from "./components";

interface Props {
  tweets: Tweet[]
}

const WhoWeAre: React.FC<Props> = (props: Props) => {
  const { tweets } = props;
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
              <Typography variant="h2" color="primary" align="inherit">
                Run by pioneers in decentralization
              </Typography>
            </Box>
            <Box className={classes.description}>
              <Typography variant="body1" color="textSecondary" align="inherit">
                As pioneers in the DeFi realm,
                Switcheo Labs has led the pack with multiple world-firsts.
                Come experience the magic we have helped to create. 
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box className={classes.images}>
          <Box className={classes.column}>
            <Photo src={Team1} alt="Team1" className={classes.landscape} />
            <Hidden mdUp>
              <Box className={classes.button}>
                <SwthButton href="/careers">
                  Meet our Team
                </SwthButton>
              </Box>
            </Hidden>
            <Box>
              <TweetCard tweets={tweets} />
            </Box>
          </Box>
          <Hidden smDown>
            <Box display="flex" flexDirection="column" marginTop={30} marginLeft={10} width="40%">
              <Photo src={Team2} alt="Team2" className={classes.portrait} />
              <Box marginTop={-5}>
                <SwthButton href="/careers">
                  Meet our Team
                </SwthButton>
              </Box>
            </Box>
          </Hidden>
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
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2, 8),
    },
    [theme.breakpoints.only("xs")]: {
      padding: theme.spacing(0, 4),
    },
  },
  content: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  sectionTitle: {
    marginTop: theme.spacing(3),
    width: "30%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      margin: theme.spacing(0, 1),
    },
    [theme.breakpoints.only("xs")]: {
      margin: theme.spacing(0, 0.5),
    },
  },
  text: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-end",
    [theme.breakpoints.down("sm")]: {
      alignItems: "flex-start",
    },
  },
  title: {
    marginBottom: theme.spacing(5),
    textAlign: "right",
    [theme.breakpoints.down("sm")]: {
      textAlign: "left",
      margin: theme.spacing(3, 2),
    },
    [theme.breakpoints.only("xs")]: {
      margin: theme.spacing(2, 0.5),
    },
  },
  description: {
    maxWidth: "60%",
    textAlign: "right",
    [theme.breakpoints.down("sm")]: {
      textAlign: "left",
      maxWidth: "100%",
      marginTop: theme.spacing(1),
    },
    [theme.breakpoints.only("xs")]: {
      maxWidth: "90%",
      marginTop: 0,
    },
  },
  column: {
    display: "flex",
    flexDirection: "column",
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  images: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: theme.spacing(-12),
    marginRight: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(6),
    },
    [theme.breakpoints.only("xs")]: {
      marginTop: theme.spacing(4),
      marginRight: 0,
    },
  },
  portrait: {
    width: "100%",
    height: "min(50vw, 35rem)",
    marginBottom: theme.spacing(10),
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(8),
    },
    [theme.breakpoints.only("xs")]: {
      marginBottom: theme.spacing(1),
    },
  },
  landscape: {
    width: "100%",
    height: "min(40vw, 26.25rem)",
    marginBottom: theme.spacing(10),
    [theme.breakpoints.down("sm")]: {
      height: "max(45vw, 29.1825rem)",
      marginBottom: theme.spacing(8),
    },
    [theme.breakpoints.only("xs")]: {
      height: "max(55vw, 11.5rem)",
      marginBottom: theme.spacing(1),
    },
  },
  button: {
    display: "flex",
    justifyContent: "center",
    marginBottom: theme.spacing(7),
    [theme.breakpoints.only("xs")]: {
      marginBottom: theme.spacing(3),
    },
  },
}));

export default WhoWeAre;
