import { Box, Container, makeStyles, Theme, Typography } from "@material-ui/core";
import React from "react";

const WhatOthersSay: React.FC = () => {
  const classes = useStyles();

  return (
    <Box component="section" className={classes.root}>
      <Container maxWidth="lg" className={classes.contentContainer}>
        <Box className={classes.content}>
          <Box className={classes.text}>
            <Typography variant="h5" color="primary">
              What Others Say
            </Typography>
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
    padding: theme.spacing(20),
  },
  content: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
  },
}));

export default WhatOthersSay;
