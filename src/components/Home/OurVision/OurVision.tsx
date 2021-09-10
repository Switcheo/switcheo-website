import { Box, Container, makeStyles, Theme, Typography } from "@material-ui/core";
import React from "react";
import VisionAnimationPlaceholder from "src/assets/VisionAnimationPlaceholder.svg";

const OurVision: React.FC = () => {
  const classes = useStyles();

  return (
    <Box component="section" className={classes.root}>
      <Container maxWidth="lg" className={classes.contentContainer}>
        <Box className={classes.content}>
          <VisionAnimationPlaceholder />
          <Box className={classes.textSection}>
            <Typography variant="h5" color="primary" className={classes.text}>
              Our Vision
            </Typography>
            <Typography variant="h3" color="textPrimary" className={classes.text}>
              A truly free world where the need for trust and reliance is eradicated
            </Typography>
            <Typography variant="body1" color="textSecondary">
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
  text: {
    marginBottom: theme.spacing(5),
  },
}));

export default OurVision;
