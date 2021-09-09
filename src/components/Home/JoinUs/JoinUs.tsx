import { Box, Container, makeStyles, Theme, Typography } from "@material-ui/core";
import React from "react";
import { JoinOptions } from "./components";

const JoinUs: React.FC = () => {
  const classes = useStyles();

  return (
    <Box component="section" className={classes.root}>
      <Container maxWidth="lg" className={classes.contentContainer}>
        <Box className={classes.content}>
          <Box className={classes.text}>
            <Box marginBottom={5}>
              <Typography variant="h1" color="primary">
                Take the future into your own hands
              </Typography>
            </Box>
            <Typography variant="subtitle1" color="textSecondary">
              Join us in rethinking trust to enable a fairer world. 
            </Typography>
          </Box>
        </Box>
        <JoinOptions />
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
  },
  text: {
    maxWidth: "70%",
  },
}));

export default JoinUs;
