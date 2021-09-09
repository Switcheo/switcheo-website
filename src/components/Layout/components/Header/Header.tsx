import { Box, Container, Hidden, Theme, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
import React from "react";
import CaretDown from "src/assets/CaretDown.svg";
import SwitcheoBrand from "src/assets/SwitcheoBrand.svg";
import MenuIcon from "src/assets/MenuIcon.svg";

const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container maxWidth="lg" className={classes.header}>
        <Image src={SwitcheoBrand} alt="SwitcheoBrand" />
        <Hidden smDown>
          <Box className={classes.navTabs}>
            <Box className={classes.tab}>
              <Typography variant="body2" color="textSecondary">
                Ecosystem
              </Typography>
              <Box className={classes.caret}>
                <Image src={CaretDown} alt="CaretDown" />
              </Box>
            </Box>
            <Box className={classes.tab}>
              <Typography variant="body2" color="textSecondary">
                Company
              </Typography>
              <Box className={classes.caret}>
                <Image src={CaretDown} alt="CaretDown" />
              </Box>
            </Box>
            <Box className={classes.tab}>
              <Typography variant="body2" color="textSecondary">
                Newsroom
              </Typography>
              <Box className={classes.caret}>
                <Image src={CaretDown} alt="CaretDown" />
              </Box>
            </Box>
            <Box className={classes.tab}>
              <Typography variant="body2" color="textSecondary">
                Developers
              </Typography>
              <Box className={classes.caret}>
                <Image src={CaretDown} alt="CaretDown" />
              </Box>
            </Box>
            <Box className={classes.tab}>
              <Typography variant="body2" color="textSecondary">
                Contact
              </Typography>
            </Box>
          </Box>
        </Hidden>
        <Hidden mdUp>
          <Image src={MenuIcon} alt="MenuIcon" />
        </Hidden>
      </Container>
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    position: "relative",
    width: "100%",
    zIndex: 100,
  },
  header: {
    padding: theme.spacing(7, 15),
    [theme.breakpoints.only("md")]: {
      padding: theme.spacing(3, 7),
    },
    [theme.breakpoints.only("sm")]: {
      padding: theme.spacing(3, 10),
    },
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(3, 5),
    },
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  navTabs: {
    display: "flex",
    justifyContent: "space-between",
  },
  tab: {
    padding: theme.spacing(1, 2),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(1),
    },
    display: "flex",
    alignItems: "center",
  },
  caret: {
    marginTop: theme.spacing(0.5),
    marginLeft: theme.spacing(0.5),
  },
}));

export default Header;
