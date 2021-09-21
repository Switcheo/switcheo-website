import { Box, makeStyles, Theme } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import { ArrowGreen, Circle, GlobeBase, Glow } from "src/assets/animation";

interface Props {
  sectionView: boolean
}

const VisionAnimation: React.FC<Props> = (props: Props) => {
  const { sectionView } = props;
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Glow className={clsx(classes.glow, { open: sectionView })} />
      <Circle className={classes.circle} />
      <Box className={clsx(classes.gradient, { open: sectionView })} />
      <GlobeBase className={classes.base} />
      <ArrowGreen className={clsx(classes.arrow, { open: sectionView })} />
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "50%",
    [theme.breakpoints.only("sm")]: {
      width: "70%",
      marginBottom: theme.spacing(7),
    },
    [theme.breakpoints.only("xs")]: {
      width: "100%",
      marginBottom: theme.spacing(2),
    },
    zIndex: 100,
    display: "flex",
    flexDirection: "row",
  },
  glow: {
    width: "100%",
    height: "100%",
    zIndex: -1,
  },
  base: {
    width: "100%",
    height: "100%",
    marginLeft: "-100%",
    zIndex: 100,
  },
  circle: {
    width: "76%",
    marginLeft: "-88%",
    marginTop: "-4%",
    zIndex: 100,
  },
  gradient: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
    marginLeft: "-88%",
    marginTop: "-4%",
    zIndex: 100,
    transform: "scale(1)",
    transformOrigin: "top right",
    transition: "transform ease-out 1s",
    "&.open": {
      transform: "scale(0)",
    },
  },
  arrow: {
    width: "25%",
    marginLeft: "-63%",
    marginTop: "-2%",
    zIndex: 100,
    opacity: 0,
    transform: "translate(-50%, 10%)",
    transition: "opacity ease-out 0.7s, transform ease-out 0.5s",
    "&.open": {
      opacity: 1,
      transform: "translate(0,0)",
    },
  },
}));

export default VisionAnimation;
