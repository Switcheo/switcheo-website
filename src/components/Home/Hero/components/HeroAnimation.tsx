import { Box, makeStyles, Theme } from "@material-ui/core";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Arrow } from "src/assets/animation";

const HeroAnimation: React.FC = () => {
  const classes = useStyles();
  const [scrollY, setScrollY] = useState(0);
  const [scrollStart, setScrollStart] = useState(-1);
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const [prevScroll, setPrevScroll] = useState(0);

  const [sectionRef, sectionView] = useInView({
    threshold: 0.4,
  });

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);

    setPrevScroll(window.scrollY);
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (sectionView && scrollStart < 0 && (scrollY === 0 || scrollY > prevScroll)) {
      setTriggerAnimation(true);
      setScrollStart(scrollY);
    }
    if (!sectionView && !triggerAnimation) {
      setPrevScroll(scrollY);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionView, scrollY]);

  const getTransition = (delay: number) => makeStyles(() => {
    return {
      transition: {
        transform: `rotate(max(0deg, min(${scrollY - scrollStart - (windowWidth > windowHeight ? delay * 5 : delay)}deg, 180deg)))`,
      },
    };
  });

  const arrows = [];
  for (let i = 0; i < 27; i++) {
    arrows.push(
      <Arrow key={i} className={clsx(classes.arrow, {
        [getTransition(i)().transition]: triggerAnimation,
        [classes.topRow]: i < 8,
      })} />);
  }
  arrows.splice(17, 0, <Arrow key={1} className={clsx(classes.arrow, { [classes.middleArrow]: triggerAnimation })} />);

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
      transition: "fill ease-in 0.2s",
      fill: theme.palette.primary.main,
    },
    transition: "transform 0.2s ease-in 0.3s",
    transform: "rotate(180deg)",
  },
}));

export default HeroAnimation;
