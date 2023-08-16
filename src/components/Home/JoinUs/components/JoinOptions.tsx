import { Box, Divider, Grid, Theme, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

import Careers from "src/assets/Careers.svg";
import BuildWithUs from "src/assets/BuildWithUs.svg";
import Ecosystem from "src/assets/Ecosystem.svg";
import { SwthButton } from "src/components/Common";
import { Paths } from "src/utils/paths";

const JoinOptions: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid>
        <Careers className={classes.icon} />
        <Box className={classes.optionText}>
          <Typography variant="h4" color="textPrimary">
            Explore careers with us
          </Typography>
        </Box>
        <Box className={classes.ctaSection}>
          <Divider />
          <SwthButton href={Paths.careers}>
            Learn More
          </SwthButton>
        </Box>
      </Grid>
      <Grid>
        <BuildWithUs className={classes.icon} />
        <Box className={classes.optionText}>
          <Typography variant="h4" color="textPrimary">
            Build With Us
          </Typography>
        </Box>
        <Box className={classes.ctaSection}>
          <Divider />
          <SwthButton href={Paths.contactUs}>
            Contact
          </SwthButton>
        </Box>
      </Grid>
      <Grid>
        <Ecosystem className={classes.icon} />
        <Box className={classes.optionText}>
          <Typography variant="h4" color="textPrimary">
            Ecosystems
          </Typography>
        </Box>
        <Box className={classes.ctaSection}>
          <Divider />
          <SwthButton href={Paths.github}>
            Check our GitHub
          </SwthButton>
        </Box>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: theme.spacing(7),
    "& > .MuiGrid-root": {
      display: "grid",
    },
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr",
      gap: theme.spacing(3),
    },
  },
  icon: {
    height: "3.75rem",
    [theme.breakpoints.down("sm")]: {
      width: "4.75rem",
      height: "unset",
      marginTop: theme.spacing(3),
    },
    [theme.breakpoints.only("xs")]: {
      width: "2.5rem",
    },
  },
  option: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  optionText: {
    marginTop: theme.spacing(3),
    maxWidth: "83%",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      maxWidth: "75%",
    },
    [theme.breakpoints.only("xs")]: {
      maxWidth: "85%",
    },
  },
  ctaSection: {
    alignSelf: "end",
    "& > a > button": {
      whiteSpace: "nowrap",
    },
  },
}));

export default JoinOptions;
