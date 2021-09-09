import { Box, Container, Divider, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { HomeFooter, NavFooter } from "./components";

const Footer: React.FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Container maxWidth="lg">
        <NavFooter />
        <Divider classes={{ root: classes.divider }} />
        <HomeFooter />
      </Container>
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(0, 3),
    width: "100%",
  },
  divider: {
    backgroundColor: theme.palette.common.white,
  },
}));

export default Footer;