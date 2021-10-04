import { Box, Container, makeStyles, Theme } from "@material-ui/core";
import React from "react";
import { Ivan } from "src/assets/images";
import { Photo } from "src/components/Common";

const CEOSection: React.FC = () => {
  const classes = useStyles();

  return (
    <Box component="section" className={classes.root}>
      <Container className={classes.contentContainer}>
        <Box className={classes.content}>
          <Photo src={Ivan} alt="Ivan" className={classes.portrait} />
          <Box className={classes.textSection}>
            <Box className={classes.quote}>
              “We believe in putting power back into the hands of the individual, but we can’t do it alone. Change only happens when we collaborate.”
            </Box>
            <Box className={classes.title}>
              Ivan Poon<br />
              CEO, Switcheo Labs
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    position: "relative",
  },
  contentContainer: {
    position: "relative",
    padding: theme.spacing(8),
    marginTop: theme.spacing(-15),
    [theme.breakpoints.only("xs")]: {
      padding: theme.spacing(5),
    },
  },
  content: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    [theme.breakpoints.only("xs")]: {
      flexDirection: "column",
    },
  },
  portrait: {
    width: "45%",
    height: "max(50vw, 22.375rem)",
    [theme.breakpoints.only("xs")]: {
      width: "100%",
      height: "max(60vw, 11rem)",
    },
  },
  textSection: {
    maxWidth: "50%",
    marginTop: theme.spacing(8),
    marginLeft: theme.spacing(5),
    [theme.breakpoints.only("xs")]: {
      maxWidth: "100%",
      marginLeft: 0,
      textAlign: "center",
      marginTop: theme.spacing(5),
    },
  },
  quote: {
    fontFamily: "Roobert-SemiBold",
    fontSize: "1.5rem",
    lineHeight: "120%",
    marginBottom: theme.spacing(5),
    [theme.breakpoints.only("xs")]: {
      fontSize: "1rem",
      marginBottom: theme.spacing(2),
    },
  },
  title: {
    fontFamily: "Roobert",
    fontSize: "1.5rem",
    lineHeight: "100%",
    [theme.breakpoints.only("xs")]: {
      fontSize: "0.875rem",
      lineHeight: "150%",
    },
  },
}));

export default CEOSection;
