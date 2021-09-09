import { Box, Container, makeStyles, Theme, Typography } from "@material-ui/core";
import React from "react";
import Image from "next/image";
import DecentralizedInfrastructures from "src/assets/DecentralizedInfrastructures.svg";
import InnovativeDApps from "src/assets/InnovativeDApps.svg";
import WhiteSpaces from "src/assets/WhiteSpaces.svg";
import ArrowLeft from "src/assets/ArrowLeft.svg";
import ArrowRight from "src/assets/ArrowRight.svg";
import InnovationAreasPlaceholder from "src/assets/InnovationAreasPlaceholder.svg";

const InnovationAreas: React.FC = () => {
  const classes = useStyles();

  return (
	  <Box component="section" className={classes.root}>
      <Container maxWidth="lg" className={classes.contentContainer}>
        <Box className={classes.content}>
          <Box className={classes.areas}>
            <Box className={classes.areaBar}>
              <Typography variant="h5" color="secondary">
                Innovation Areas
              </Typography>
              <Box className={classes.arrows}>
                <Image src={ArrowLeft} alt="ArrowLeft" />
                <Image src={ArrowRight} alt="ArrowRight" />
              </Box>
            </Box>
            <Box className={classes.area}>
              <Box className={classes.icon}>
                <Image src={DecentralizedInfrastructures} alt="DecentralizedInfrastructures" />
              </Box>
              <Typography variant="h4" color="secondary">
                Decentralized Infrastructures
              </Typography>
            </Box>
            <Box className={classes.area}>
              <Box className={classes.icon}>
                <Image src={InnovativeDApps} alt="InnovativeDApps" />
              </Box>
              <Typography variant="h4" color="secondary">
                Innovative dApps
              </Typography>
            </Box>
            <Box className={classes.area}>
              <Box className={classes.icon}>
                <Image src={WhiteSpaces} alt="WhiteSpaces" />
              </Box>
              <Typography variant="h4" color="secondary">
                White Spaces
              </Typography>
            </Box>
          </Box>
        </Box>
        <Image src={InnovationAreasPlaceholder} alt="InnovationAreasPlaceholder" />
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
  arrows: {
    display: "flex",
    justifyContent: "space-between",
    width: "5rem",
  },
  area: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(1.5, 0),
  },
  icon: {
    width: "5rem",
    height: "5rem",
    marginRight: theme.spacing(4),
    display: "flex",
    justifyContent: "center",
  },
}));

export default InnovationAreas;
