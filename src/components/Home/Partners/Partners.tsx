import { Box, Container, Grid, makeStyles, Theme, Typography } from "@material-ui/core";
import React from "react";
import { BOLT, DACM, DeFianceCapital, DeFiCapital, DUSK, HuobiPool, NEO, NGC, O3Labs, PolyNetwork, StakeWithUs, ThreeArrowsCapital, Zilliqa } from "src/assets/partners";

const Partners: React.FC = () => {
  const classes = useStyles();

  return (
    <Box component="section" className={classes.root}>
      <Container maxWidth="lg" className={classes.contentContainer}>
        <Box className={classes.content}>
          <Box className={classes.title}>
            <Typography variant="h2" color="primary">
              Backed by some of the best in blockchain
            </Typography>
          </Box>
          <Grid container spacing={4}>
            <Grid item xs={4} md={3} className={classes.icon}>
              <ThreeArrowsCapital />
            </Grid>
            <Grid item xs={4} md={3} className={classes.icon}>
              <DeFianceCapital />
            </Grid>
            <Grid item xs={4} md={3} className={classes.icon}>
              <NGC />
            </Grid>
            <Grid item xs={4} md={3} className={classes.icon}>
              <NEO />
            </Grid>
            <Grid item xs={4} md={3} className={classes.icon}>
              <DeFiCapital />
            </Grid>
            <Grid item xs={4} md={3} className={classes.icon}>
              <PolyNetwork />
            </Grid>
            <Grid item xs={4} md={3} className={classes.icon}>
              <Zilliqa />
            </Grid>
            <Grid item xs={4} md={3} className={classes.icon}>
              <DACM />
            </Grid>
            <Grid item xs={4} md={3} className={classes.icon}>
              <BOLT />
            </Grid>
            <Grid item xs={4} md={3} className={classes.icon}>
              <DUSK />
            </Grid>
            <Grid item xs={4} md={3} className={classes.icon}>
              <HuobiPool />
            </Grid>
            <Grid item xs={4} md={3} className={classes.icon}>
              <StakeWithUs />
            </Grid>
            <Grid item xs={4} md={4} className={classes.icon} />
            <Grid item xs={4} className={classes.icon}>
              <O3Labs />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: "relative",
    padding: theme.spacing(15, 5),
    [theme.breakpoints.only("xs")]: {
      padding: theme.spacing(8, 3),
    },
  },
  contentContainer: {
    position: "relative",
  },
  content: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  title: {
    maxWidth: "69%",
    marginBottom: theme.spacing(15),
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
      marginBottom: theme.spacing(10),
    },
    [theme.breakpoints.only("xs")]: {
      marginBottom: theme.spacing(5),
    },
  },
  icon: {
    display: "flex",
    justifyContent: "center",
    marginBottom: theme.spacing(3),
    [theme.breakpoints.only("xs")]: {
      marginBottom: 0,
    },
  },
  left: {
    marginLeft: theme.spacing(15),
  },
}));

export default Partners;
