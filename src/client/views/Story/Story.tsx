import { Box, Container, Divider, Typography, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import cls from "classnames";
import urlBannerImage from "./assets/banner.png";
import { ContentTitle, SwitcheoLogo } from "../../components";

const TEAMS = [{
  title: "Core team",
  description: "Opta audae quas nonsed quatur mostibus tem aceate, dae commoloreped magnist, nonsequaatur re, autaectatis vero mil iduciatur sitionet laut quia porpost voluptatenis saeporibusRat eos voluptatis senimag nation nis iditi int, volore vendi nos sequi optatem int vid qui dolupta num erum voluptatur remped quis moluptatur aut la.",
  members: [{
    name: "Ivan Poon",
    role: "Co-Founder, CEO",
    links: [{
      label: "LinkedIn",
    }, {
      label: "GitHub",
    }]
  }]
}, {
  title: "Advisory and Community",
  members: []
}];

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      padding: 0,
    }
  },
  content: {
    marginTop: theme.spacing(3),
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(3),
  },
  divider: {
    backgroundColor: theme.palette.secondary.main,
  },
  jobContent: {
    marginTop: 200,

    [theme.breakpoints.down("md")]: {
      marginTop: 100,
      marginBottom: theme.spacing(5),
    },

    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(3),
    },
  },
  jobPosting: {
    color: theme.palette.secondary.main,
    borderRadius: 0,
    borderBottom: `1px solid ${theme.palette.secondary.main}`,
    fontSize: 48,
    lineHeight: "60px",
    letterSpacing: "-1px",
    paddingLeft: 0,
    textTransform: "none",

    [theme.breakpoints.down("md")]: {
      fontSize: 32,
      lineHeight: "36px",
      letterSpacing: "-.5px",
    },
  },
  jobPostingContainer: {
    paddingLeft: theme.spacing(3),

    [theme.breakpoints.down("md")]: {
      paddingLeft: 0,
      marginTop: theme.spacing(3),
    },
  },
  icon: {
    marginLeft: "auto",
    height: theme.spacing(4.5),
    width: theme.spacing(4.5),

    [theme.breakpoints.down("md")]: {
      height: theme.spacing(3),
      width: theme.spacing(3),
    },
  },
}));

const Story: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props: any) => {
  const { children, className, ...rest } = props;
  const classes = useStyles();
  return (
    <Container maxWidth="xl" {...rest} className={cls(classes.root, className)}>
      <Box className={classes.content}>
        <ContentTitle secondary>Our story</ContentTitle>
        <Divider className={classes.divider} />
        <Typography variant="subtitle1" color="secondary">Join the cryptocurrency exchange that’s leaving others in its wake. Trading without limits for lives without limits. We bring you a platform so speedy, so safe and so user-friendly for anyone to trade assets freely across chains. There’s nothing cryptic about crypto on Switcheo. You bring possibilities. Together, nothing can stop us. </Typography>

        {TEAMS.map((team, index) => (
          <Box key={index} className={classes.jobContent}>
            <ContentTitle secondary>{team.title}</ContentTitle>
            <Grid container>
              <Grid item xs={12} md={6}>
                <Divider className={classes.divider} />
                <Typography variant="body1" color="secondary">{team.description}</Typography>
              </Grid>
              <Grid className={classes.jobPostingContainer} item xs={12} md={6}>
               
              </Grid>
            </Grid>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Story;