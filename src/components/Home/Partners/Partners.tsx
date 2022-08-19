import { Box, Container, Grid, makeStyles, Theme, Typography } from "@material-ui/core";
import Image from "next/image";
import React from "react";
import { BOLT, DACM, DeFianceCapital, DeFiCapital, DUSK, HuobiPool, NEO, NGC, O3Labs, PolyNetwork, StakeWithUs, Zilliqa } from "src/assets/partners";

const PartnerIcons = [
  {
    src: DeFianceCapital,
    alt: "DeFianceCapital",
  },
  {
    src: NGC,
    alt: "NGC",
  },
  {
    src: NEO,
    alt: "NEO",
  },
  {
    src: DeFiCapital,
    alt: "DeFiCapital",
  },
  {
    src: PolyNetwork,
    alt: "PolyNetwork",
  },
  {
    src: Zilliqa,
    alt: "Zilliqa",
  },
  {
    src: DACM,
    alt: "DACM",
  },
  {
    src: BOLT,
    alt: "BOLT",
  },
  {
    src: DUSK,
    alt: "DUSK",
  },
  {
    src: HuobiPool,
    alt: "HuobiPool",
  },
  {
    src: StakeWithUs,
    alt: "StakeWithUs",
  },
  {
    src: O3Labs,
    alt: "O3Labs",
  },
];

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
          <Grid container spacing={4} justifyContent="center">
            {PartnerIcons.map((icon) => (
              <Grid item xs={4} md={3} key={icon.alt}>
                <Box className={classes.iconBox}>
                  <Image src={icon.src} alt={icon.alt} layout="fill" objectFit="contain" />
                </Box>
              </Grid>
            ))}
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
    [theme.breakpoints.down("md")]: {
      maxWidth: "100%",
    },
    [theme.breakpoints.down("sm")]: {
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
    position: "relative",
    width: "100%",
    height: "6.25rem",
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      height: "3.125rem",
    },
    [theme.breakpoints.only("xs")]: {
      height: "1.875rem",
      marginBottom: 0,
    },
  },
  left: {
    marginLeft: theme.spacing(15),
  },
}));

export default Partners;
