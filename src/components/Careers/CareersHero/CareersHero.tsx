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
        <SwthButton>
          Insert Button Here
        </SwthButton>
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
    flexDirection: "column",
    padding: theme.spacing(10),
    marginBottom: theme.spacing(18),
  },
  title: {
    maxWidth: "58rem",
    marginBottom: theme.spacing(5),
  },
  description: {
    maxWidth: "46rem",
    marginBottom: theme.spacing(),
  },
}));

export default CareersHero;
