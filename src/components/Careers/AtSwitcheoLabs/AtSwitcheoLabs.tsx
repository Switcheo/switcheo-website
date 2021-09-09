import { Box, Container, Grid, makeStyles, Theme, Typography } from "@material-ui/core";
import React from "react";
import { Photo } from "src/components/Common";

const AtSwitcheoLabs: React.FC = () => {
  const classes = useStyles();

  return (
    <Box component="section" className={classes.root}>
      <Container maxWidth="lg" className={classes.contentContainer}>
        <Grid container spacing={4} justifyContent="space-between">
          <Grid item xs={12} md={5}>
            <Photo src="/assets/team3.jpg" alt="Team3" orientation="portrait" />
          </Grid>
          <Grid item xs={12} md={7}>
            <Photo src="/assets/team4.jpg" alt="Team4" orientation="landscape" />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box className={classes.text}>
              <Typography variant="h2" color="secondary">
                At Switcheo Labs
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box className={classes.text}>
              <Typography variant="body1" color="inherit">
                You’ll be on the cutting edge of blockchain innovation
                in finance and at the forefront of all things new. 
                Most importantly, you’ll be making a positive change to society. 
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <Photo src="/assets/team5.jpg" alt="Team5" orientation="landscape" />
          </Grid>
          <Grid item xs={12} md={5}>
            <Photo src="/assets/team3.jpg" alt="Team3" orientation="portrait" />
          </Grid>
        </Grid>
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
    marginTop: theme.spacing(-20),
    marginBottom: theme.spacing(-25),
    padding: theme.spacing(0, 0, 0, 10),
  },
  text: {
    margin: theme.spacing(10, 0),
  },
  statNumber: {
    fontFamily: "IBM Plex Mono",
    color: theme.palette.secondary.main,
    fontSize: "80px",
    letterSpacing: "-0.04em",
  },
}));

export default AtSwitcheoLabs;
