import { Box, Container, Grid, makeStyles, Theme, Typography } from "@material-ui/core";
import clsx from "clsx";
import React from "react";

const Stats: React.FC = () => {
  const classes = useStyles();

  return (
    <Box component="section" className={classes.root}>
      <Container maxWidth="lg" className={classes.contentContainer}>
        <Box className={classes.content}>
          <Box className={classes.description}>
            <Box className={classes.title}>
              <Typography variant="h2" color="secondary">
                We foster the future
              </Typography>
            </Box>
            <Typography variant="body1" color="inherit">
              True leaders don’t stop at the beginning. We don’t believe in just creating solutions to the problems of our time. Instead, we seed and nurture ecosystems to benefit generations to come.
            </Typography>
          </Box>
          <Grid container spacing={4}>
            <Grid item xs={6} sm={4} md={6} >
              <Box className={classes.stat}>
                <Box className={classes.statNumber}>
                  96K
                </Box>
                <Typography variant="body1" color="inherit">
                  Trusted Users
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4} md={6} >
              <Box className={classes.stat}>
                <Box className={classes.statNumber}>
                  $130M
                </Box>
                <Typography variant="body1" color="inherit">
                  Value Transacted On-Chain
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4} md={6} >
              <Box className={clsx(classes.stat, classes.rightStat)}>
                <Box className={classes.statNumber}>
                  25+
                </Box>
                <Typography variant="body1" color="inherit">
                  Development Partners
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.background.paper,
    position: "relative",
  },
  contentContainer: {
    position: "relative",
  },
  content: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(15, 3),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      padding: theme.spacing(13, 8, 8),
    },
    [theme.breakpoints.only("xs")]: {
      maxWidth: "100%",
      padding: theme.spacing(6, 3),
    },
  },
  description: {
    maxWidth: "40%",
    marginRight: theme.spacing(15),
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
      margin: theme.spacing(0, 8, 10, 2),
    },
    [theme.breakpoints.only("xs")]: {
      margin: theme.spacing(0, 1, 0, 0),
    },
  },
  title: {
    marginBottom: theme.spacing(5),
    [theme.breakpoints.only("xs")]: {
      marginBottom: theme.spacing(2),
    },
  },
  stat: {
    maxWidth: "80%",
    marginTop: theme.spacing(5),
    [theme.breakpoints.only("sm")]: {
      maxWidth: "100%",
    },
  },
  statNumber: {
    fontFamily: "IBM Plex Mono",
    color: theme.palette.secondary.main,
    fontSize: "5rem",
    letterSpacing: "-0.04em",
    marginBottom: theme.spacing(5),
    [theme.breakpoints.only("sm")]: {
      fontSize: "4.8125rem",
    },
    [theme.breakpoints.only("xs")]: {
      fontSize: "2.25rem",
      marginBottom: theme.spacing(1),
    },
  },
  rightStat: {
    [theme.breakpoints.only("sm")]: {
      marginLeft: theme.spacing(4),
    },
    [theme.breakpoints.only("xs")]: {
      marginTop: 0,
    },
  },
}));

export default Stats;
