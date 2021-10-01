import { Box, Container, makeStyles, Theme, Typography } from "@material-ui/core";
import Link from "next/link";
import React from "react";
import { Team6 } from "src/assets/images";
import { Photo } from "src/components/Common";
import SwitcheoArrow from "src/assets/SwitcheoArrow.svg";

const JoinNow: React.FC = () => {
  const classes = useStyles();

  return (
	  <Box component="section" className={classes.root}>
      <Container maxWidth="lg" className={classes.contentContainer}>
        <Box className={classes.content}>
          <Box className={classes.title}>
            <Typography variant="h2" color="inherit">
              Believe in a life without limits?
            </Typography>
          </Box>
          <Link href="#openroles" passHref>
            <Box className={classes.description}>
              <Typography variant="subtitle1" color="secondary">  
                Join our team of changemakers today. 
              </Typography>
              <SwitcheoArrow className={classes.arrow}/>
            </Box>
          </Link>
        </Box>
        <Photo src={Team6} alt="Team6" className={classes.photo} />
      </Container>
	  </Box>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    position: "relative",
  },
  contentContainer: {
    color: theme.palette.background.paper,
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginTop: theme.spacing(-10),
    padding: theme.spacing(0, 10, 22, 10),
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(-20),
      padding: theme.spacing(0, 10, 12, 10),
      flexDirection: "column-reverse",
      alignItems: "flex-start",
    },
    [theme.breakpoints.only("xs")]: {
      marginTop: theme.spacing(-8),
      padding: theme.spacing(0, 5, 2, 5),
    },
  },
  content: {
    maxWidth: "50%",
    paddingBottom: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      maxWidth: "75%",
      marginTop: theme.spacing(12),
    },
    [theme.breakpoints.only("xs")]: {
      maxWidth: "100%",
      marginTop: theme.spacing(5),
    },
  },
  photo: {
    width: "45%",
    height: "650px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "max(40vw, 25.6875rem)",
    },
    [theme.breakpoints.only("xs")]: {
      width: "100%",
      height: "max(40vw, 10.625rem)",
    },
  },
  title: {
    marginBottom: theme.spacing(3),
    [theme.breakpoints.only("xs")]: {
      maxWidth: "75%",
      marginBottom: theme.spacing(1),
    },
  },
  description: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(5),
    "&:hover": {
      cursor: "pointer",
    },
    [theme.breakpoints.only("xs")]: {
      marginBottom: theme.spacing(2),
    },
  },
  arrow: {
    height: "1.5rem",
    marginLeft: theme.spacing(2),
    [theme.breakpoints.only("xs")]: {
      marginLeft: theme.spacing(1),
      height: "1rem",
    },
  },
}));

export default JoinNow;
