import { Box, Container, makeStyles, Theme, Typography } from "@material-ui/core";
import React from "react";
import { SwthButton } from "src/components/Common";

const CareersHero: React.FC = () => {
  const classes = useStyles();

  return (
    <Box component="section" className={classes.root}>
      <Container maxWidth="lg" className={classes.contentContainer}>
        <Box className={classes.title}>
          <Typography variant="h1" color="primary">
            Let’s build the trustless solutions of the future, together
          </Typography>
        </Box>
        <Box>
          <SwthButton>
            Insert Button Here
          </SwthButton>
        </Box>
      </Container>
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: "relative",
  },
  contentContainer: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(10),
    marginBottom: theme.spacing(18),
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
      textAlign: "center",
    },
    [theme.breakpoints.only("xs")]: {
      padding: theme.spacing(4),
      marginBottom: theme.spacing(7),
    },
  },
  title: {
    maxWidth: "58rem",
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      maxWidth: "35rem",
    },
    [theme.breakpoints.only("xs")]: {
      maxWidth: "16rem",
      marginBottom: theme.spacing(2),
    },
  },
  description: {
    maxWidth: "46rem",
    marginBottom: theme.spacing(),
  },
}));

export default CareersHero;
