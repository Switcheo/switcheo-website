import { Box, Container, Divider, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import cls from "classnames";
import React, { useEffect, useState } from "react";
import { ContentTitle } from "../../components";
import { useSelector } from "react-redux";
import { RootState } from "../../store/types";
import { TeamMember } from "../../store/content/types";

export type Team = {
  title: string;
  description?: string;
  members: TeamMember[];
}

const TEAMS: Team[] = [{
  title: "Core team",
  description: "Opta audae quas nonsed quatur mostibus tem aceate, dae commoloreped magnist, nonsequaatur re, autaectatis vero mil iduciatur sitionet laut quia porpost voluptatenis saeporibusRat eos voluptatis senimag nation nis iditi int, volore vendi nos sequi optatem int vid qui dolupta num erum voluptatur remped quis moluptatur aut la.",
  members: []
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
    [theme.breakpoints.down("sm")]: {
      marginTop: 0,
    }
  },
  divider: {
    backgroundColor: theme.palette.secondary.main,
  },
  teamContent: {
    marginTop: 200,

    [theme.breakpoints.down("md")]: {
      marginTop: 100,
      marginBottom: theme.spacing(5),
      marginRight: 0,
    },

    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(3),
    },
  },
  member: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(0, 1.5),
    marginBottom: theme.spacing(6),
    "& img": {
      filter: "greyscale(100%)",
      display: "block",
      width: "100%",
      marginBottom: theme.spacing(3),
    },
    "& p,a": {
      padding: theme.spacing(.5, 0, 1),
      textDecoration: "none",
      borderBottom: `1px solid ${theme.palette.secondary.main}`,
      "&:first-child": {
        fontWeight: "bold",
        borderTop: `1px solid ${theme.palette.secondary.main}`,
      }
    }
  },
  memberContainer: {
    paddingLeft: theme.spacing(1.5),

    [theme.breakpoints.down("md")]: {
      paddingLeft: 0,
      marginLeft: theme.spacing(-1.5),
      marginRight: theme.spacing(-1.5),
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
  const teamMembers = useSelector((store: RootState) => store.Content.team);

  const filterMembers = (teamName: string) => {
    return (member: TeamMember) => member.team === teamName;
  };

  return (
    <Container maxWidth="xl" {...rest} className={cls(classes.root, className)}>
      <Box className={classes.content}>
        <ContentTitle secondary>Our story</ContentTitle>
        <Divider className={classes.divider} />
        <Typography variant="subtitle1" color="secondary">Join the cryptocurrency exchange that’s leaving others in its wake. Trading without limits for lives without limits. We bring you a platform so speedy, so safe and so user-friendly for anyone to trade assets freely across chains. There’s nothing cryptic about crypto on Switcheo. You bring possibilities. Together, nothing can stop us. </Typography>

        {TEAMS.map((team, index) => (
          <Box key={index} className={classes.teamContent}>
            <ContentTitle secondary>{team.title}</ContentTitle>
            <Grid container>
              <Grid item md={12} lg={4} xl={6}>
                <Divider className={classes.divider} />
                <Typography variant="body1" color="secondary">{team.description}</Typography>
              </Grid>
              <Grid item md={12} lg={8} xl={6}>
                <Box className={classes.memberContainer}>
                  <Grid container>
                    {teamMembers.filter(filterMembers(team.title)).map((teamMember, index) => (
                      <Grid className={classes.member} key={index} item xs={6} sm={4} md={3} lg={4}>
                        {!!teamMember.image && (
                          <img alt={teamMember.image.title} src={teamMember.image.file.url} />
                        )}
                        <Box display="flex" flexDirection="column">
                          <Typography color="secondary">{teamMember.name}</Typography>
                          <Typography color="secondary">{teamMember.role}</Typography>
                          {!!teamMember.links && teamMember.links.map((profileLink, index) => (
                            <Typography color="secondary" key={index} component="a" target="_blank" href={profileLink.url}>{profileLink.label}</Typography>
                          ))}
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Story;