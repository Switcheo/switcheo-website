import { Box, Divider, Grid, Theme, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

import Careers from "src/assets/Careers.svg";
import DevFund from "src/assets/DevFund.svg";
import SWTHToken from "src/assets/SWTHToken.svg";
import { SwthButton } from "src/components/Common";

const JoinOptions: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={6} className={classes.root}>
      <Grid item xs={12} md={4}>
        <Careers className={classes.icon}/>
        <Box className={classes.optionText}>
          <Typography variant="h4" color="textPrimary">
            Explore careers with us
          </Typography>
        </Box>
        <Divider />
        <SwthButton href="/careers">
          Learn More
        </SwthButton>
      </Grid>
      <Grid item xs={12} md={4}>
        <DevFund className={classes.icon}/>
        <Box className={classes.optionText}>
          <Typography variant="h4" color="textPrimary">
            Apply for Development Fund
          </Typography>
        </Box>
        <Divider />
        <SwthButton href="/">
          Learn More
        </SwthButton>
      </Grid>
      <Grid item xs={12} md={4}>
        <SWTHToken className={classes.icon}/>
        <Box className={classes.optionText}>
          <Typography variant="h4" color="textPrimary">
            Purchasing SWTH Token
          </Typography>
        </Box>
        <Divider />
        <SwthButton href="/">
          Learn More
        </SwthButton>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(7, 0),
    fontFamily: "Inter",
    letterSpacing: "-0.02em",
    fontSize: "0.875rem",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(7, 5),
      maxWidth: "100%",
    },
    [theme.breakpoints.only("xs")]: {
      padding: theme.spacing(5, 0, 0, 2),
    },
  },
  icon: {
    height: "3.75rem",
    [theme.breakpoints.down("sm")]: {
      height: "6.25rem",
      marginTop: theme.spacing(5),
    },
    [theme.breakpoints.only("xs")]: {
      height: "2.5rem",
      marginTop: 0,
    },
  },
  option: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  optionText: {
    marginTop: theme.spacing(3),
    maxWidth: "90%",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      maxWidth: "75%",
      marginBottom: theme.spacing(8),
    },
    [theme.breakpoints.only("xs")]: {
      maxWidth: "85%",
      marginBottom: theme.spacing(4),
    },
  },
}));

export default JoinOptions;
