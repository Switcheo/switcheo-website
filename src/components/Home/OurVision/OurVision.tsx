import { Box, Container, makeStyles, Theme, Typography } from "@material-ui/core";
import Image from "next/image";
import React from "react";
import VisionAnimationPlaceholder from "src/assets/VisionAnimationPlaceholder.png";

const OurVision: React.FC = () => {
  const classes = useStyles();

  return (
    <Box component="section" className={classes.root}>
      <Container maxWidth="lg" className={classes.contentContainer}>
        <Box className={classes.content}>
          <Box className={classes.img}>
            <Image src={VisionAnimationPlaceholder} alt="VisionAnimationPlaceholder" />
          </Box>
          <Box className={classes.textSection}>
            <Typography variant="h5" color="primary" className={classes.heading}>
              Our Vision
            </Typography>
            <Typography variant="h3" color="textPrimary" className={classes.text}>
              A truly free world where the need for trust and reliance is eradicated
            </Typography>
            <Typography variant="body1" color="textSecondary" className={classes.description}>
              This is the future we are moving towards
              - a decentralized world marked by efficient insfrastructure
              where every person has the right to manage their wealth in a fair,
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
    padding: theme.spacing(15, 5),
    [theme.breakpoints.only("sm")]: {
      padding: theme.spacing(10),
    },
    [theme.breakpoints.only("xs")]: {
      padding: theme.spacing(7, 5),
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
  },
}));

export default OurVision;
