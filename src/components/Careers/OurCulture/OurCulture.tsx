import { Box, Container, Divider, Grid, makeStyles, Theme, Typography } from "@material-ui/core";
import React from "react";

const OurCulture: React.FC = () => {
  const classes = useStyles();

  return (
    <Box component="section" className={classes.root}>
      <Container maxWidth="lg" className={classes.contentContainer}>
        <Box className={classes.title}>
          <Box marginBottom={3}>
            <Typography variant="h5" color="primary">
              Our Culture
            </Typography>
          </Box>
          <Typography variant="h2" color="primary">
            What’s it like working at Switcheo?
          </Typography>
        </Box>
        <Grid container xs={12} spacing={4}>
          <Grid item xs={12} md={6}>
            <Box className={classes.gridContent}>
              <Box className={classes.count}>01</Box>
              <Typography variant="h4" color="textPrimary">
                You will build game changers. 
              </Typography>
              <Divider className={classes.divider}/>
              <Typography variant="body1" color="textSecondary">
                In this cutting-edge space, we champion true innovation and experimentation.
                You will be able to go ahead and create stuff no one has dared dream of before. We got you. 
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box className={classes.gridContent}>
              <Box className={classes.count}>02</Box>
              <Typography variant="h4" color="textPrimary">
                You will take ownership. 
              </Typography>
              <Divider className={classes.divider}/>
              <Typography variant="body1" color="textSecondary">
                We believe in ownership, not just in wealth but also in what you build.
                Make your mark in the world and own things that you can be proud of.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box className={classes.gridContent}>
              <Box className={classes.count}>03</Box>
              <Typography variant="h4" color="textPrimary">
                We are flexible. 
              </Typography>
              <Divider className={classes.divider}/>
              <Typography variant="body1" color="textSecondary">
                What matters is the end result, so we don’t sweat the small stuff or watch you like a hawk.
                Bend the rules a little if that means you can be the best version of yourself. 
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box className={classes.gridContent}>
              <Box className={classes.count}>04</Box>
              <Typography variant="h4" color="textPrimary">
                We are a start-up.
              </Typography>
              <Divider className={classes.divider}/>
              <Typography variant="body1" color="textSecondary">
                The learning curve will be steep and the journey will be rough.
                Don’t expect to find the solutions on Google.
                Keep at it though, and you wil be rewarded with a front seat view (beer in hand) to groundbreaking innovations. 
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box className={classes.gridContent}>
              <Box className={classes.count}>05</Box>
              <Typography variant="h4" color="textPrimary">
                You will change the world. 
              </Typography>
              <Divider className={classes.divider}/>
              <Typography variant="body1" color="textSecondary">
                Making a positive and sustainable impact is why we exist.
                You’ll be working in a paradigm changing industry that will affect the world globally in the years ahead, and the centuries to come. 
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box className={classes.gridContent}>
              <Box className={classes.count}>06</Box>
              <Typography variant="h4" color="textPrimary">
                We grow together.  
              </Typography>
              <Divider className={classes.divider}/>
              <Typography variant="body1" color="textSecondary">
                We don’t work in silos.
                We are one in this journey, so expect to learn together and share the rewards.
                Equity is on the table if you prove yourself worthy. 
              </Typography>
            </Box>
          </Grid>
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
  },
  title: {
    maxWidth: "75%",
    marginBottom: theme.spacing(10),
  },
  gridContent: {
    maxWidth: "90%",
  },
  count: {
    fontFamily: "IBM Plex Mono",
    color: "#C6E579",
    fontSize: "48px",
    letterSpacing: "-0.04em",
    marginBottom: theme.spacing(3),
  },
  divider: {
    margin: theme.spacing(3, 0),
  },
}));

export default OurCulture;
