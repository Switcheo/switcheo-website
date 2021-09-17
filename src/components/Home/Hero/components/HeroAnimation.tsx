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

  const getTransition = (delay: number) => makeStyles(() => ({
    transition: {
      transition: `transform 0.4s ease-in ${delay}s`,
      transform: "rotate(180deg)",
    },
  }));

  const arrows = [];
  for (let i = 10; i < 37; i++) {
    arrows.push(
      <Arrow key={i} className={clsx(classes.arrow, {
        [getTransition(i / 10)().transition]: sectionView,
        [classes.topRow]: i < 18,
      })} />);
  }
  arrows.splice(17, 0, <Arrow key={1} className={clsx(classes.arrow, { [classes.middleArrow]: sectionView })} />);

  return (
    <>
      <Box className={clsx(classes.root, classes.gradient)}>
        {arrows.slice(0, 14)}
      </Box>
      <Box className={classes.root}>
        {arrows.slice(14)}
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
    transform: "rotate(180deg)",
  },
}));

export default HeroAnimation;
