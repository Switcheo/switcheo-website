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
            <Grid item xs={12} className={classes.icon}>
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
  },
  contentContainer: {
    position: "relative",
    padding: theme.spacing(15, 5),
    marginTop: theme.spacing(15),
  },
  content: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  title: {
    maxWidth: "70%",
    marginBottom: theme.spacing(15),
  },
  icon: {
    display: "flex",
    justifyContent: "center",
    marginBottom: theme.spacing(3),
  },
  left: {
    marginLeft: theme.spacing(15),
  },
}));

export default Partners;
