import { Box, Container, Grid, makeStyles, Theme, Typography } from "@material-ui/core";
import React from "react";
import { SwthButton } from "src/components/Common";
import { JobRole } from "src/utils/types";
import { RoleCard } from "./components";

interface Props {
  jobRoles: JobRole[]
}

const OpenRoles: React.FC<Props> = (props: Props) => {
  const { jobRoles } = props;
  const classes = useStyles();

  return (
    <Box component="section" className={classes.root}>
      <Container maxWidth="lg" className={classes.contentContainer}>
        <Box className={classes.content}>
          <Box className={classes.text}>
            <Box marginBottom={5}>
              <Typography variant="h5" color="primary">
                Join the team
              </Typography>
            </Box>
            <Typography variant="h2" color="primary">
              Featured Open Roles
            </Typography>
          </Box>
        </Box>
        <Grid container spacing={6}>
          {jobRoles.map((role) => <RoleCard key={role.url} jobRole={role} />)}
        </Grid>
        <Box className={classes.rolesButton}>
          <SwthButton>
            See all available roles
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
    padding: theme.spacing(18, 5),
  },
  content: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(0, 10, 10),
  },
  text: {
    marginBottom: theme.spacing(10),
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
  },
}));

export default OpenRoles;