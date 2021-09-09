import { Box, Container, makeStyles, Theme, Typography } from "@material-ui/core";
import React from "react";
import Image from "next/image";
import HeroAnimationPlaceholder from "src/assets/HeroAnimationPlaceholder.svg";

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
            Switcheo Labs is a creative and experimental think tank
            that bootstraps and nurtures ecosystems moving towards a new world
            that thrives even without trust.
          </Typography>
        </Box>
        <Image src={HeroAnimationPlaceholder} alt="HeroAnimationPlaceholder" />
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
    marginTop: theme.spacing(12),
  },
  title: {
    maxWidth: "58rem",
    marginBottom: theme.spacing(3),
  },
  description: {
    maxWidth: "46rem",
    marginBottom: theme.spacing(3),
  },
}));

export default Hero;
