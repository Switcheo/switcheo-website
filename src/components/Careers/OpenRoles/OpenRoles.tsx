import { Box, Container, Grid, Hidden, makeStyles, Theme, Typography } from "@material-ui/core";
import React from "react";
import Slider from "react-slick";
import { SwthButton } from "src/components/Common";
import { JobRole } from "src/utils/types";
import { RoleCard } from "./components";

interface Props {
  jobRoles: JobRole[]
}

const OpenRoles: React.FC<Props> = (props: Props) => {
  const { jobRoles } = props;
  const classes = useStyles();

  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
  };

  return (
    <Box component="section" className={classes.root}>
      <Container maxWidth="lg" className={classes.contentContainer}>
        <Box className={classes.text}>
          <Box className={classes.header}>
            <Typography variant="h5" color="primary">
              Join the team
            </Typography>
          </Box>
          <Typography variant="h2" color="primary">
            Featured Open Roles
          </Typography>
        </Box>
        <Hidden only="xs">
          <Grid container spacing={6}>
            {jobRoles.map((role) => (
              <Grid item key={role.url} xs={12} sm={6} md={4}>
                <RoleCard jobRole={role} />
              </Grid>
            ))}
          </Grid>
          <Box className={classes.rolesButton}>
            <SwthButton href="/">
              See all available roles
            </SwthButton>
          </Box>
        </Hidden>
      </Container>
      <Hidden smUp>
        <Slider {...settings}>
          {jobRoles.map((role) => <RoleCard key={role.url} jobRole={role} />)}
        </Slider>
        <Box className={classes.rolesButton}>
          <SwthButton href="/">
            See all available roles
          </SwthButton>
        </Box>
      </Hidden>
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: "relative",
  },
  contentContainer: {
    position: "relative",
    padding: theme.spacing(18, 5, 0),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(15, 5, 0),
    },
    [theme.breakpoints.only("xs")]: {
      padding: theme.spacing(0, 5, 0),
    },
  },
  text: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: theme.spacing(0, 10, 20),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(0, 10, 10),
    },
    [theme.breakpoints.only("xs")]: {
      padding: theme.spacing(0, 2, 5),
    },
  },
  header: {
    marginBottom: theme.spacing(5),
    [theme.breakpoints.only("xs")]: {
      marginBottom: theme.spacing(2),
    },
  },
  role: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
    height: "100%",
    borderRadius: 15,
    padding: theme.spacing(6, 3, 4),
  },
  roleArea: {
    fontFamily: "IBM Plex Mono",
    color: "#C6E579",
    fontSize: "29px",
    letterSpacing: "-0.04em",
    textTransform: "uppercase",
    marginBottom: theme.spacing(3),
  },
  rolesButton: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(12),
    marginBottom: theme.spacing(18),
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(20),
    },
    [theme.breakpoints.only("xs")]: {
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(10),
    },
  },
}));

export default OpenRoles;
