import { Box, Container, makeStyles, Theme, Typography } from "@material-ui/core";
import React, { useState } from "react";
import DecentralizedInfrastructures from "src/assets/DecentralizedInfrastructures.svg";
import InnovativeDApps from "src/assets/InnovativeDApps.svg";
import WhiteSpaces from "src/assets/WhiteSpaces.svg";
import ArrowLeft from "src/assets/ArrowLeft.svg";
import ArrowRight from "src/assets/ArrowRight.svg";
import InnovationAreasPlaceholder from "src/assets/InnovationAreasPlaceholder.svg";
import clsx from "clsx";

const InnovationAreas: React.FC = () => {
  const classes = useStyles();
  const [selectIndex, setSelectIndex] = useState(0);

  return (
	  <Box component="section" className={classes.root}>
      <Container maxWidth="lg" className={classes.contentContainer}>
        <Box className={classes.content}>
          <Box className={classes.areas}>
            <Box className={classes.areaBar}>
              <Typography variant="h5" color="secondary">
                Innovation Areas
              </Typography>
              <Box display="flex">
                <Box onClick={() => setSelectIndex((selectIndex - 1) % 3)} className={classes.arrow} marginRight={3}>
                  <ArrowLeft />
                </Box>
                <Box onClick={() => setSelectIndex((selectIndex + 1) % 3)} className={classes.arrow}>
                  <ArrowRight />
                </Box>
              </Box>
            </Box>
            <Box className={classes.area}>
              <Box className={classes.icon}>
                <DecentralizedInfrastructures />
              </Box>
              <Box className={clsx(classes.areaText, { [classes.selected]: selectIndex === 0 })}>
                <Typography variant="h4" color="inherit">
                  Decentralized Infrastructures
                </Typography>
              </Box>
            </Box>
            <Box className={classes.area}>
              <Box className={classes.icon}>
                <InnovativeDApps />
              </Box>
              <Box className={clsx(classes.areaText, { [classes.selected]: selectIndex === 1 })}>
                <Typography variant="h4" color="inherit">
                  Innovative dApps
                </Typography>
              </Box>
            </Box>
            <Box className={classes.area}>
              <Box className={classes.icon}>
                <WhiteSpaces />
              </Box>
              <Box className={clsx(classes.areaText, { [classes.selected]: selectIndex === 2 })}>
                <Typography variant="h4" color="inherit">
                  White Spaces
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <InnovationAreasPlaceholder className={classes.placeholder}/>
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
    position: "relative",
    display: "flex",
    paddingLeft: theme.spacing(6),
    marginBottom: theme.spacing(-20),
  },
  content: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  arrow: {
    cursor: "pointer",
  },
  areas: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  areaBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: theme.spacing(5),
  },
  area: {
    display: "flex",
    alignItems: "center",
    margin: theme.spacing(1.5, 0),
    userSelect: "none",
  },
  areaText: {
    color: "#C9D2D9",
    opacity: 0.4,
  },
  selected: {
    color: theme.palette.secondary.main,
    opacity: 1,
  },
  icon: {
    width: "5rem",
    marginRight: theme.spacing(4),
    marginTop: theme.spacing(2),
    display: "flex",
    justifyContent: "center",
  },
  placeholder: {
    marginRight: theme.spacing(-15),
  },
}));

export default InnovationAreas;
