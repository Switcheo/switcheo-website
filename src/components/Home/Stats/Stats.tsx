import { Box, Container, Grid, makeStyles, Theme, Typography } from "@material-ui/core";
import React from "react";

const Stats: React.FC = () => {
  const classes = useStyles();

  return (
    <Box component="section" className={classes.root}>
      <Container maxWidth="lg" className={classes.contentContainer}>
        <Box className={classes.content}>
          <Box className={classes.description}>
            <Box className={classes.title}>
              <Typography variant="h2" color="secondary">
                We foster the future.
              </Typography>
            </Box>
            <Typography variant="body1" color="inherit">
              True leaders don’t stop at the beginning. We don’t believe in just creating solutions to the problems of our time. Instead, we seed and nurture ecosystems to benefit generations to come.
            </Typography>
          </Box>
          <Grid container xs={12} md={6} spacing={4}>
            <Grid item xs={6} sm={4} md={6} >
              <Box className={classes.statNumber}>
                96K
              </Box>
              <Typography variant="body1" color="inherit">
                Monthly Active Users
              </Typography>
            </Grid>
            <Grid item xs={6} sm={4} md={6} >
              <Box className={classes.statNumber}>
                $10B
              </Box>
              <Typography variant="body1" color="inherit">
                Value Transacted On-chain
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4} md={12} >
              <Box className={classes.statNumber}>
                30+
              </Box>
              <Typography variant="body1" color="inherit">
                Development Partners
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.background.paper,
    position: "relative",
  },
  contentContainer: {
    position: "relative",
  },
  content: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(15, 3),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  description: {
    maxWidth: "40%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
    },
  },
  title: {
    marginBottom: theme.spacing(5),
  },
  statNumber: {
    fontFamily: "IBM Plex Mono",
    color: theme.palette.secondary.main,
    fontSize: "80px",
    letterSpacing: "-0.04em",
  },
}));

export default Stats;
