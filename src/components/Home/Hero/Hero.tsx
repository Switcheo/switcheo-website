import { Box, Container, makeStyles, Theme, Typography } from "@material-ui/core";
import React from "react";
import { HeroAnimation } from "./components";

const Hero: React.FC = () => {
  const classes = useStyles();

  return (
    <Box component="section" className={classes.root}>
      <Container maxWidth="lg" className={classes.contentContainer}>
        <Box className={classes.title}>
          <Typography variant="h1" align="center" color="primary">
            Enabling a world where trust is optional
          </Typography>
        </Box>
        <Box className={classes.description}>
          <Typography variant="subtitle1" align="center" color="textSecondary">
            Switcheo Labs is a cutting edge software development lab that has world class expertise in decentralized technologies.
          </Typography>
        </Box>
        <HeroAnimation />
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
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: theme.spacing(14),
    [theme.breakpoints.only("sm")]: {
      marginTop: theme.spacing(8),
    },
    [theme.breakpoints.only("xs")]: {
      marginTop: theme.spacing(2),
    },
  },
  title: {
    maxWidth: "58rem",
    marginBottom: theme.spacing(6),
    [theme.breakpoints.only("sm")]: {
      maxWidth: "37rem",
      marginBottom: theme.spacing(3),
    },
    [theme.breakpoints.only("xs")]: {
      maxWidth: "20.5rem",
      marginBottom: theme.spacing(1),
    },
  },
  description: {
    maxWidth: "48rem",
    marginBottom: theme.spacing(3),
    [theme.breakpoints.only("sm")]: {
      maxWidth: "36rem",
    },
    [theme.breakpoints.only("xs")]: {
      maxWidth: "20rem",
    },
    zIndex: 90,
  },
}));

export default Hero;
