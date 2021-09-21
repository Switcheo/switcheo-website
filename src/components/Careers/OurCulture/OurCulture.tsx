import { Box, Container, Divider, Grid, makeStyles, Theme, Typography } from "@material-ui/core";
import React from "react";

const points = [
  {
    count: "01",
    title: "You will build game changers.",
    description: "In this cutting-edge space, we champion true innovation and experimentation. You will be able to go ahead and create stuff no one has dared dream of before. We got you.",
  },
  {
    count: "02",
    title: "You will take ownership.",
    description: "We believe in ownership, not just in wealth but also in what you build. Make your mark in the world and own things that you can be proud of.",
  },
  {
    count: "03",
    title: "We are flexible.",
    description: "What matters is the end result, so we don’t sweat the small stuff or watch you like a hawk. Bend the rules a little if that means you can be the best version of yourself.",
  },
  {
    count: "04",
    title: "We are a start-up.",
    description: "The learning curve will be steep and the journey will be rough. Don’t expect to find the solutions on Google. Keep at it though, and you wil be rewarded with a front seat view (beer in hand) to groundbreaking innovations.",
  },
  {
    count: "05",
    title: "You will change the world.",
    description: "Making a positive and sustainable impact is why we exist. You’ll be working in a paradigm changing industry that will affect the world globally in the years ahead, and the centuries to come.",
  },
  {
    count: "06",
    title: "We grow together.",
    description: "We don’t work in silos. We are one in this journey, so expect to learn together and share the rewards. Equity is on the table if you prove yourself worthy.",
  },
];

const OurCulture: React.FC = () => {
  const classes = useStyles();

  return (
    <Box component="section" className={classes.root}>
      <Container maxWidth="lg" className={classes.contentContainer}>
        <Box className={classes.sectionTitle}>
          <Box className={classes.sectionHeader}>
            <Typography variant="h5" color="primary">
              Our Culture
            </Typography>
          </Box>
          <Typography variant="h2" color="primary">
            What’s it like working at Switcheo?
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {points.map((point) => (
            <Grid key={point.count} item xs={12} sm={6}>
              <Box className={classes.gridContent}>
                <Box className={classes.count}>
                  {point.count}
                </Box>
                <Box className={classes.title}>
                  {point.title}
                </Box>
                <Divider className={classes.divider}/>
                <Box className={classes.description}>
                  {point.description}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
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
    padding: theme.spacing(40, 0, 40, 10),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(10, 0, 40, 10),
    },
    [theme.breakpoints.only("xs")]: {
      padding: theme.spacing(5, 0, 20, 5),
    },
  },
  sectionTitle: {
    maxWidth: "70%",
    marginBottom: theme.spacing(15),
    [theme.breakpoints.down("sm")]: {
      maxWidth: "80%",
      marginBottom: theme.spacing(10),
    },
    [theme.breakpoints.only("xs")]: {
      marginBottom: theme.spacing(5),
    },
  },
  sectionHeader: {
    marginBottom: theme.spacing(3),
    [theme.breakpoints.only("xs")]: {
      marginBottom: theme.spacing(1),
    },
  },
  gridContent: {
    maxWidth: "80%",
    marginBottom: theme.spacing(10),
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(5),
    },
    [theme.breakpoints.only("xs")]: {
      marginBottom: 0,
    },
  },
  count: {
    fontFamily: "IBM Plex Mono",
    color: "#C6E579",
    fontSize: "3rem",
    lineHeight: "80%",
    letterSpacing: "-0.04em",
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.125rem",
    },
    [theme.breakpoints.only("xs")]: {
      marginBottom: theme.spacing(1),
      fontSize: "1.25rem",
    },
  },
  title: {
    fontFamily: "Roobert-Medium",
    fontSize: "2.375rem",
    lineHeight: "100%",
    letterSpacing: "-0.04em",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.125rem",
    },
    [theme.breakpoints.only("xs")]: {
      fontSize: "1.25rem",
    },
  },
  description: {
    fontFamily: "Roobert",
    fontSize: "1.5rem",
    lineHeight: "150%",
    [theme.breakpoints.only("sm")]: {
      fontSize: "1.375rem",
    },
    [theme.breakpoints.only("xs")]: {
      fontSize: "0.875rem",
    },
  },
  divider: {
    margin: theme.spacing(3, 0),
    [theme.breakpoints.only("xs")]: {
      margin: theme.spacing(1, 0),
    },
  },
}));

export default OurCulture;
