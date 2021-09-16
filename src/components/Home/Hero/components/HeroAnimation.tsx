import { Box, makeStyles, Theme } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import { Arrow } from "src/assets/animation";

interface Props {
  sectionView: boolean
}

const HeroAnimation: React.FC<Props> = (props: Props) => {
  const { sectionView } = props;
  const classes = useStyles();

  return (
    <>
      <Box className={clsx(classes.root, classes.gradient)}>
        <Arrow className={clsx(classes.arrow, classes.topRow)} />
        <Arrow className={clsx(classes.arrow, classes.topRow)} />
        <Arrow className={clsx(classes.arrow, classes.topRow)} />
        <Arrow className={clsx(classes.arrow, classes.topRow)} />
        <Arrow className={clsx(classes.arrow, classes.topRow)} />
        <Arrow className={clsx(classes.arrow, classes.topRow)} />
        <Arrow className={clsx(classes.arrow, classes.topRow)} />
        <Arrow className={classes.arrow} />
        <Arrow className={classes.arrow} />
        <Arrow className={clsx(classes.arrow, { [classes.sideArrow]: sectionView })} />
        <Arrow className={clsx(classes.arrow, { [classes.sideArrow]: sectionView })} />
        <Arrow className={clsx(classes.arrow, { [classes.sideArrow]: sectionView })} />
        <Arrow className={classes.arrow} />
        <Arrow className={classes.arrow} />
      </Box>
      <Box className={classes.root}>
        <Arrow className={classes.arrow} />
        <Arrow className={classes.arrow} />
        <Arrow className={clsx(classes.arrow, { [classes.sideArrow]: sectionView })} />
        <Arrow className={clsx(classes.arrow, { [classes.middleArrow]: sectionView })} />
        <Arrow className={clsx(classes.arrow, { [classes.sideArrow]: sectionView })} />
        <Arrow className={classes.arrow} />
        <Arrow className={classes.arrow} />
        <Arrow className={classes.arrow} />
        <Arrow className={classes.arrow} />
        <Arrow className={clsx(classes.arrow, { [classes.sideArrow]: sectionView })} />
        <Arrow className={clsx(classes.arrow, { [classes.sideArrow]: sectionView })} />
        <Arrow className={clsx(classes.arrow, { [classes.sideArrow]: sectionView })} />
        <Arrow className={classes.arrow} />
        <Arrow className={classes.arrow} />
      </Box>
    </>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "116%",
    align: "center",
    marginLeft: "-7%",
  },
  gradient: {
    marginTop: "-14%",
    background: "linear-gradient(180deg, rgba(255, 255, 255, 0) -36.36%, #FFFFFF 52.56%)",
    opacity: 0.6,
  },
  arrow: {
    padding: "2%",
    width: "14%",
    zIndex: -100,
    "& path": {
      fill: theme.palette.background.paper,
    },
  },
  topRow: {
    opacity: 0.7,
  },
  middleArrow: {
    "& path": {
      transition: "fill ease-in 0.4s",
      fill: theme.palette.primary.main,
    },
    transition: "transform 0.4s ease-in 0.5s",
    transform: "rotate(-180deg)",
  },
  sideArrow: {
    "& path": {
      transition: "fill 0.4s ease-in 1s",
      fill: theme.palette.primary.main,
    },
    transition: "transform 0.4s ease-in 1.5s",
    transform: "rotate(-180deg)",
  },
}));

export default HeroAnimation;
