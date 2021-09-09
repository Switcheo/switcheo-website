import { Box, Container, Grid, makeStyles, Theme, Typography } from "@material-ui/core";
import clsx from "clsx";
import Image from "next/image";
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
              <Image src={ThreeArrowsCapital} alt="ThreeArrowsCapital" />
            </Grid>
            <Grid item xs={4} md={3} className={classes.icon}>
              <Image src={DeFianceCapital} alt="DeFianceCapital" />
            </Grid>
            <Grid item xs={4} md={3} className={classes.icon}>
              <Image src={NGC} alt="NGC" />
            </Grid>
            <Grid item xs={4} md={3} className={classes.icon}>
              <Image src={NEO} alt="NEO" />
            </Grid>
            <Grid item xs={4} md={2} className={clsx(classes.icon, classes.left)}>
              <Image src={DeFiCapital} alt="DeFiCapital" />
            </Grid>
            <Grid item xs={4} md={2} className={classes.icon}>
              <Image src={PolyNetwork} alt="PolyNetwork" />
            </Grid>
            <Grid item xs={4} md={2} className={classes.icon}>
              <Image src={Zilliqa} alt="Zilliqa" />
            </Grid>
            <Grid item xs={4} md={2} className={classes.icon}>
              <Image src={DACM} alt="DACM" />
            </Grid>
            <Grid item xs={4} md={2} className={classes.icon}>
              <Image src={BOLT} alt="BOLT" />
            </Grid>
            <Grid item xs={4} md={3} className={classes.icon}>
              <Image src={DUSK} alt="DUSK" />
            </Grid>
            <Grid item xs={4} md={3} className={classes.icon}>
              <Image src={HuobiPool} alt="HuobiPool" />
            </Grid>
            <Grid item xs={4} md={3} className={classes.icon}>
              <Image src={StakeWithUs} alt="StakeWithUs" />
            </Grid>
            <Grid item xs={12} md={3} className={classes.icon}>
              <Image src={O3Labs} alt="O3Labs" />
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
    marginLeft: 100,
  },
}));

export default Partners;
