import { Box, makeStyles, Theme } from "@material-ui/core";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Arrow } from "src/assets/animation";

const HeroAnimation: React.FC = () => {
  const classes = useStyles();
  const [scrollY, setScrollY] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  const [sectionRef, sectionView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);

    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const getTransition = (delay: number) => makeStyles(() => {
    return {
      transition: {
        transform: `rotate(max(0deg, min(${scrollY - (windowWidth > windowHeight ? delay * 20 : delay)}deg, 180deg)))`,
      },
    };
  });

  const arrows = [];
  for (let i = 0; i < 27; i++) {
    arrows.push(
      <Arrow key={i} className={clsx(classes.arrow, 
        getTransition(i)().transition, 
        { [classes.topRow]: i < 8 },
      )} />);
  }
  arrows.splice(17, 0, <Arrow key={1} className={clsx(classes.arrow, { [classes.middleArrow]: sectionView })} />);

  return (
    <>
      <div>
        <Box className={clsx(classes.root, classes.gradient)}>
          {arrows.slice(0, 14)}
        </Box>
      </div>
      <div ref={sectionRef}>
        <Box className={classes.root}>
          {arrows.slice(14)}
        </Box>
      </div>
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
      transition: "fill ease-in 0.3s",
      fill: theme.palette.primary.main,
    },
    transition: "transform 0.4s ease-in 0.4s",
    transform: "rotate(180deg)",
  },
}));

export default HeroAnimation;
