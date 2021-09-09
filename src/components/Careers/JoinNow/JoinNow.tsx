import { Box, Container, makeStyles, Theme, Typography } from "@material-ui/core";
import React from "react";
import { Photo, SwthButton } from "src/components/Common";

const JoinNow: React.FC = () => {
  const classes = useStyles();

  return (
	  <Box component="section" className={classes.root}>
      <Container maxWidth="lg" className={classes.contentContainer}>
        <Box className={classes.content}>
          <Box marginBottom={3}>
            <Typography variant="h2" color="inherit">
              Believe in a life without limits?
            </Typography>
          </Box>
          <Box marginBottom={5}>
            <Typography variant="subtitle1" color="secondary">  
              Join our team of changemakers today. 
            </Typography>
          </Box>
          <SwthButton>
            Insert button here
          </SwthButton>
        </Box>
        <Photo src="/assets/team6.jpg" alt="Team6" orientation="portrait" className={classes.photo} />
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
    color: theme.palette.background.paper,
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginTop: theme.spacing(-10),
    padding: theme.spacing(0, 10, 22, 10),
  },
  content: {
    maxWidth: "50%",
    paddingBottom: theme.spacing(5),
  },
  photo: {
    width: "490px",
    height: "650px",
  },
}));

export default JoinNow;
