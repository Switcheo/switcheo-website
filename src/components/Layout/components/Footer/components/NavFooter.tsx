import { Box, Grid, Hidden, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";
import React from "react";
import SwitcheoBrand from "src/assets/SwitcheoBrand.svg";

const NavFooter: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Hidden smDown>
        <Box marginLeft={5} marginTop={2} width="60%">
          <Link href="/" passHref>
            <SwitcheoBrand className={classes.img} />
          </Link>
        </Box>
      </Hidden>
      <Grid container spacing={2} justifyContent="flex-end">
        <Grid item xs={6} md={4}>
          <Box className={classes.sectionTitle}>
            Products
          </Box>
          <Box className={classes.navLink}>
            Demex
          </Box>
          <Box className={classes.navLink}>
            Zilswap
          </Box>
          <Box className={classes.navLink}>
            Carbon
          </Box>
        </Grid>
        <Grid item xs={6} md={4}>
          <Box className={classes.sectionTitle}>
            Developers
          </Box>
          <Box className={classes.navLink}>
            Switcheo Docs
          </Box>
          <Box className={classes.navLink}>
            Demex Docs
          </Box>
          <Box className={classes.navLink}>
            ZilSwap Docs
          </Box>
          <Box className={classes.navLink}>
            Carbon Docs
          </Box>
          <Box className={classes.navLink}>
            Media Guide
          </Box>
        </Grid>
        <Grid item xs={6} md={4}>
          <Box className={classes.sectionTitle}>
            Learn
          </Box>
          <Box className={classes.navLink}>
            Guides
          </Box>
          <Box className={classes.navLink}>
            Terminologies
          </Box>
        </Grid>
        <Grid item xs={6} md={4}>
          <Box className={classes.sectionTitle}>
            Company
          </Box>
          <Box className={classes.navLink}>
            About
          </Box>
          <Box className={classes.navLink}>
            Our Ecosystem
          </Box>
          <Box className={classes.navLink}>
            Partners
          </Box>
          <Box className={classes.navLink}>
            Enterprise
          </Box>
        </Grid>
        <Grid item xs={6} md={4}>
          <Box className={classes.sectionTitle}>
            Support
          </Box>
          <Box className={classes.navLink}>
            Contact
          </Box>
          <Box className={classes.navLink}>
            Cookie Policy
          </Box>
          <Box className={classes.navLink}>
            Legal & Privacy
          </Box>
          <Box className={classes.navLink}>
            Sitemap
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing(30, 0, 10, 0),
    color: theme.palette.common.white,
    fontFamily: "Inter",
    letterSpacing: "-0.02em",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(10, 0, 10, 10),
    },
    [theme.breakpoints.only("xs")]: {
      padding: theme.spacing(10, 0),
    },
  },
  img: {
    "& path": {
      fill: "#FFF",
    },
    width: "10.625rem",
  },
  text: {
    padding: theme.spacing(1),
  },
  products: {
    display: "flex",
    flexDirection: "column",
    marginBottom: theme.spacing(3),
  },
  sectionTitle: {
    fontSize: "1.25rem",
    marginBottom: theme.spacing(3),
  },
  navLink: {
    fontSize: "1rem",
    marginBottom: theme.spacing(1.5),
  },
}));

export default NavFooter;
