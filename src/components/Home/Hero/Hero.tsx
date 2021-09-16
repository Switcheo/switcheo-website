import { Box, Container, makeStyles, Theme, Typography } from "@material-ui/core";
import React from "react";
import { useInView } from "react-intersection-observer";
import { HeroAnimation } from "./components";

const Hero: React.FC = () => {
  const classes = useStyles();

  const [sectionRef, sectionView] = useInView({
    threshold: 0.8,
    triggerOnce: true,
  });

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
            Switcheo Labs is a creative and experimental think tank
            that bootstraps and nurtures ecosystems moving towards a new world
            that thrives even without trust.
          </Typography>
        </Box>
        <div ref={sectionRef}>
          <HeroAnimation sectionView={sectionView} />
        </div>
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
      maxWidth: "16rem",
      marginBottom: theme.spacing(1),
    },
  },
  description: {
    maxWidth: "46rem",
    marginBottom: theme.spacing(3),
    [theme.breakpoints.only("sm")]: {
      maxWidth: "35rem",
    },
    [theme.breakpoints.only("xs")]: {
      maxWidth: "16rem",
    },
    zIndex: 90,
  },
}));

export default Hero;
