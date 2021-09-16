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
            <Grid item xs={4} md={3}>
              <Box className={classes.iconBox}>
                <ThreeArrowsCapital className={classes.icon}/>
              </Box>
            </Grid>
            <Grid item xs={4} md={3}>
              <Box className={classes.iconBox}>
                <DeFianceCapital className={classes.icon}/>
              </Box>
            </Grid>
            <Grid item xs={4} md={3}>
              <Box className={classes.iconBox}>
                <NGC className={classes.icon}/>
              </Box>
            </Grid>
            <Grid item xs={4} md={3}>
              <Box className={classes.iconBox}>
                <NEO className={classes.icon}/>
              </Box>
            </Grid>
            <Grid item xs={4} md={3}>
              <Box className={classes.iconBox}>
                <DeFiCapital className={classes.icon}/>
              </Box>
            </Grid>
            <Grid item xs={4} md={3}>
              <Box className={classes.iconBox}>
                <PolyNetwork className={classes.icon}/>
              </Box>
            </Grid>
            <Grid item xs={4} md={3}>
              <Box className={classes.iconBox}>
                <Zilliqa className={classes.icon}/>
              </Box>
            </Grid>
            <Grid item xs={4} md={3}>
              <Box className={classes.iconBox}>
                <DACM className={classes.icon}/>
              </Box>
            </Grid>
            <Grid item xs={4} md={3}>
              <Box className={classes.iconBox}>
                <BOLT className={classes.icon}/>
              </Box>
            </Grid>
            <Grid item xs={4} md={3}>
              <Box className={classes.iconBox}>
                <DUSK className={classes.icon}/>
              </Box>
            </Grid>
            <Grid item xs={4} md={3}>
              <Box className={classes.iconBox}>
                <HuobiPool className={classes.icon}/>
              </Box>
            </Grid>
            <Grid item xs={4} md={3}>
              <Box className={classes.iconBox}>
                <StakeWithUs className={classes.icon}/>
              </Box>
            </Grid>
            <Grid item xs={4} md={4} />
            <Grid item xs={4}>
              <Box className={classes.iconBox}>
                <O3Labs className={classes.icon}/>
              </Box>
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
    width: "100%",
  },
  iconBox: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "100%",
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
