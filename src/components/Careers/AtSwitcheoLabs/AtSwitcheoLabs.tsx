import { Box, Container, Hidden, makeStyles, Theme, Typography } from "@material-ui/core";
import React from "react";
import { Team3, Team4, Team5 } from "src/assets/images";
import { Photo } from "src/components/Common";
import { CEOPhoto, CEOSection } from "./components";

const AtSwitcheoLabs: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Box component="section" className={classes.root}>
        <Container maxWidth="lg" className={classes.contentContainer}>
          <Box className={classes.row}>
            <Hidden smDown>
              <Photo src={Team3} alt="Team3" className={classes.portrait} />
            </Hidden>
            <Photo src={Team4} alt="Team4" className={classes.landscape} />
          </Box>
          <Box className={classes.row}>
            <Box className={classes.text}>
              <Box className={classes.title}>
                <Typography variant="h2" color="secondary">
                  At Switcheo Labs
                </Typography>
              </Box>
              <Box className={classes.description}>
                <Typography variant="body1" color="inherit">
                  You’ll be on the cutting edge of blockchain innovation
                  in finance and at the forefront of all things new.
                  Most importantly, you’ll be making a positive change to society.
                </Typography>
              </Box>
            </Box>
          </Box>
          <Hidden smDown>
            <Box className={classes.row}>
              <Photo src={Team5} alt="Team5" className={classes.landscape} />
              <CEOPhoto />
            </Box>
          </Hidden>
        </Container>
      </Box>
      <Hidden mdUp>
        <CEOSection />
      </Hidden>
    </>
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
    padding: theme.spacing(0, 8, 0, 10),
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(-15),
      marginBottom: theme.spacing(15),
      padding: theme.spacing(0, 12),
    },
    [theme.breakpoints.only("xs")]: {
      marginTop: theme.spacing(-10),
      marginBottom: theme.spacing(8),
      padding: theme.spacing(5),
    },
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
  text: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    margin: theme.spacing(10, 0),
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      flexDirection: "column",
      alignItems: "flex-start",
    },
    [theme.breakpoints.only("xs")]: {
      margin: theme.spacing(3, 0),
    },
  },
  title: {
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginBottom: theme.spacing(5),
    },
    [theme.breakpoints.only("xs")]: {
      marginBottom: theme.spacing(2),
    },
  },
  description: {
    width: "45%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  portrait: {
    width: "38%",
    height: "min(43.5vw, 35rem)",
  },
  landscape: {
    width: "50%",
    height: "min(35vw, 26.25rem)",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "min(60vw, 26rem)",
    },
    [theme.breakpoints.only("xs")]: {
      height: "max(55vw, 11.5rem)",
    },
  },
  photo: {
    width: "100%",
  },
}));

export default AtSwitcheoLabs;
