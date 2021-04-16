import { Box, Container, Divider, Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import cls from "classnames";
import React, { useEffect, useState } from "react";
import { ContentTitle, SwitcheoLogo } from "../../components";
import { useSelector } from "react-redux";
import { RootState } from "../../store/types";
import { TeamMember } from "../../store/content/types";

export type Team = {
  title: string;
  description?: string[];
}

const TEAMS: Team[] = [{
  title: "Core team",
  description: [
    "Our management, operational and engineering team are crypto natives, each holding years experience in their respective fields.",
    "We work tirelessly with people, partners and projects bring out the best in decentralization.",
  ],
}, {
  title: "Advisory and Community",
  description: [
    "A world-class advisory board and community team welcomes you every single day."
  ],
}];

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
  },
  description: {
    marginTop: theme.spacing(1),
  },
  content: {
    marginTop: theme.spacing(3),
    padding: theme.spacing(3),
    paddingTop: theme.spacing(6),
    [theme.breakpoints.down("sm")]: {
      marginTop: 0,
    }
  },
  divider: {
    backgroundColor: theme.palette.secondary.main,
    marginBottom: 2,
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
    "& p": {
      padding: "4px 0",
      textDecoration: "none",
      marginBottom: 0,
      borderTop: `1px solid ${theme.palette.secondary.main}`,
      "&:last-child": {
        borderBottom: `1px solid ${theme.palette.secondary.main}`,
      },
      "&:first-child": {
        borderTop: 'none',
      }
    },
  },
  image: {
    position: "relative",
    "& img": {
      filter: "grayscale(100%)",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
    },
    "&:before": {
      content: "''",
      display: "block",
      paddingTop: "100%",
    },
  },
  link: {
    padding: "4px 0",
    borderRadius: 0,
    textTransform: "none",
    textAlign: "left",
    borderTop: `1px solid ${theme.palette.secondary.main}`,
    color: theme.palette.secondary.main,
    justifyContent: "flex-start",
    fontSize: "24px",
    letterSpacing: "-0.75px",
    lineHeight: "30px",
    marginBottom: -1,
    borderBottom: `1px solid transparent`,
    transition: "all .05s ease-in-out",
    [theme.breakpoints.down("md")]: {
      fontSize: "22px",
      letterSpacing: "-0.75px",
      lineHeight: "24px",
    },
    "&:last-child": {
      borderBottom: `1px solid ${theme.palette.secondary.main}`,
    },
    "&:hover, &:focus": {
      zIndex: 1,
      position: "relative",
      borderTop: `1px solid ${theme.palette.secondary.dark}`,
      color: theme.palette.secondary.dark,
      borderBottom: `1px solid ${theme.palette.secondary.dark}`,
      backgroundColor: "transparent",
      "& $linkIcon": {
        transform: "rotate(0)",
      }
    },
  },
  linkIcon: {
    height: 14,
    width: 14,
    marginRight: 2,
    transition: "transform .05s ease-in-out",
    transform: "rotate(45deg)",
    marginLeft: "auto",
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
    <Box {...rest} className={cls(classes.root, className)}>
      <Container maxWidth="lg" className={classes.content}>
        <ContentTitle secondary>Our story</ContentTitle>
        <Divider className={classes.divider} />
        <Typography className={classes.description} variant="subtitle1" color="secondary">
          From spearheading the first atomic swap exchange, to leading the development of the foremost decentralized derivatives platform, 
          we build powerful financial infrastructure for the Web3 world. <br/><br/>
          We combine deep technological expertise with years of experience. 
          Relentless and unstoppable, we’ll keep going forward together.
        </Typography>

        {TEAMS.map((team, index) => (
          <Box key={index} className={classes.teamContent}>
            <Typography color="secondary" variant="h3">{team.title}</Typography>
            <Grid container>
              <Grid item md={12} lg={4}>
                <Divider className={classes.divider} />
                {
                  team.description && team.description.map(d =>
                    <Typography className={classes.description} variant="body1" color="secondary">{d}</Typography>
                  )
                }
              </Grid>
              <Grid item md={12} lg={8}>
                <Box className={classes.memberContainer}>
                  <Grid container>
                    {teamMembers.filter(filterMembers(team.title)).map((teamMember, index) => (
                      <Grid className={classes.member} key={index} item xs={6} sm={4} md={3} lg={4}>
                        <Box className={classes.image}>
                          {!!teamMember.image && (
                            <img alt={teamMember.image.title} src={teamMember.image.file.url} />
                          )}
                          {!teamMember.image && (
                            <div style={{ backgroundColor: "#D8D8D8", position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} />
                          )}
                        </Box>
                        <Box display="flex" flexDirection="column">
                          <Typography color="secondary">{teamMember.name}</Typography>
                          <Typography color="secondary">{teamMember.role}</Typography>
                          {!!teamMember.links && teamMember.links.map((profileLink, index) => (
                            <Button className={classes.link} key={index} component="a" target="_blank" href={profileLink.url}>
                              {profileLink.label}
                              <SwitcheoLogo className={classes.linkIcon} />
                            </Button>
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
      </Container>
    </Box>
  );
};

export default Story;