import { Box, makeStyles, Theme } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import { Photo } from "src/components/Common";

const CEOSection: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Photo src="/assets/ivan.png" alt="Ivan" className={classes.portrait} />
      <Box className={clsx(classes.portrait, classes.gradient)}>
        <Box className={classes.text}>
          <Box className={classes.quote}>
            “We believe in putting power back into the hands of the individual, but we can’t do it alone. Change only happens when we collaborate.”
          </Box>
          <Box className={classes.title}>
            Ivan Poon<br />
            CEO, Switcheo Labs
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "38%",
    display: "flex",
    flexDirection: "column",
  },
  portrait: {
    width: "100%",
    height: "min(43.5vw, 35rem)",
    zIndex: 1,
  },
  gradient: {
    borderRadius: 50,
    background: "linear-gradient(180deg, rgba(34, 34, 34, 0.4) 48.95%, rgba(34, 34, 34, 0.1) 80.2%, rgba(34, 34, 34, 0) 100%)",
    mixBlendMode: "normal",
    marginTop: "max(-43.5vw, -35rem)",
    transform: "rotate(-180deg)",
    zIndex: 100,
  },
  text: {
    transform: "rotate(-180deg)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    padding: theme.spacing(7),
  },
  quote: {
    fontFamily: "Roobert-SemiBold",
    fontSize: "1.5rem",
    lineHeight: "120%",
    marginBottom: theme.spacing(3),
  },
  title: {
    fontFamily: "Roobert",
    fontSize: "1.5rem",
    lineHeight: "100%",
  },
}));

export default CEOSection;
