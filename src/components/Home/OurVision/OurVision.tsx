import { Box, Container, makeStyles, Theme, Typography } from "@material-ui/core";
import React from "react";
import { VisionAnimation } from "./components";

const OurVision: React.FC = () => {
  const classes = useStyles();

  return (
    <Box component="section" className={classes.root}>
      <Container maxWidth="lg" className={classes.contentContainer}>
        <Box className={classes.content}>
          <VisionAnimation />
          <Box className={classes.textSection}>
            <Typography variant="h5" color="primary" className={classes.heading}>
              Our Vision
            </Typography>
            <Typography variant="h3" color="textPrimary" className={classes.text}>
              A world where everyone is truly free in every aspect
            </Typography>
            <Typography variant="body1" color="textSecondary" className={classes.description}>
              We feel that every person has the right to manage their wealth in a fair,
              transparent manner that is free of unjust barriers.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    position: "relative",
  },
  contentContainer: {
    position: "relative",
    padding: theme.spacing(15, 5, 15, 0),
    [theme.breakpoints.only("sm")]: {
      padding: theme.spacing(5, 10, 15),
    },
    [theme.breakpoints.only("xs")]: {
      padding: theme.spacing(2, 5, 5),
    },
  },
  img: {
    maxWidth: "50%",
  },
  content: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
    [theme.breakpoints.only("xs")]: {
      textAlign: "center",
    },
  },
  textSection: {
    maxWidth: "50%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
    },
  },
  heading: {
    marginBottom: theme.spacing(5),
    [theme.breakpoints.only("xs")]: {
      marginBottom: theme.spacing(2),
    },
  },
  text: {
    marginBottom: theme.spacing(5),
    [theme.breakpoints.only("sm")]: {
      marginBottom: theme.spacing(3),
    },
    [theme.breakpoints.only("xs")]: {
      marginBottom: theme.spacing(1),
    },
  },
  description: {
    maxWidth: "95%",
    [theme.breakpoints.only("xs")]: {
      maxWidth: "100%",
    },
  },
}));

export default OurVision;
