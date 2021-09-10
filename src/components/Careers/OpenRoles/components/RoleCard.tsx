import { Box, BoxProps, Grid, makeStyles, Theme, Typography } from "@material-ui/core";
import React from "react";
import Link from "next/link";
import { JobRole } from "src/utils/types";

interface Props extends BoxProps {
  jobRole: JobRole
}

const RoleCard: React.FC<Props> = (props: Props) => {
  const { jobRole } = props;
  const classes = useStyles();

  return (
    <Grid item xs={6} md={4}>
      <Link href={jobRole.url} passHref>
        <Box className={classes.role}>
          <Box marginBottom={6}>
            <Box className={classes.roleArea}>
              {jobRole.area}
            </Box>
            <Box maxWidth="80%">
              <Typography variant="h4" color="textSecondary">
                {jobRole.title}
              </Typography>
            </Box>
          </Box>
          <Typography variant="subtitle1" color="textSecondary">
            {jobRole.type}
          </Typography>
        </Box>
      </Link>
    </Grid>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  role: {
    cursor: "pointer",
    backgroundColor: theme.palette.background.paper,
    width: "100%",
    height: "100%",
    borderRadius: 15,
    padding: theme.spacing(6, 3, 4),
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  roleArea: {
    fontFamily: "IBM Plex Mono",
    color: "#C6E579",
    fontSize: "29px",
    letterSpacing: "-0.04em",
    textTransform: "uppercase",
    marginBottom: theme.spacing(3),
  },
}));

export default RoleCard;
