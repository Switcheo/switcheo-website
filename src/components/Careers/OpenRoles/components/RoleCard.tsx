import { Box, BoxProps, makeStyles, Theme, Typography } from "@material-ui/core";
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
    <Link href={jobRole.url} passHref>
      <Box className={classes.role}>
        <Box className={classes.details}>
          <Box className={classes.roleArea}>
            {jobRole.area}
          </Box>
          <Box maxWidth="80%">
            <Box className={classes.title}>
              {jobRole.title}
            </Box>
          </Box>
        </Box>
        <Typography variant="subtitle1" color="textSecondary">
          {jobRole.type}
        </Typography>
      </Box>
    </Link>
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
    color: theme.palette.text.secondary,
    [theme.breakpoints.only("xs")]: {
      padding: theme.spacing(3, 3, 2),
      width: "11.25rem",
      height: "11.25rem",
    },
  },
  roleArea: {
    fontFamily: "IBM Plex Mono",
    color: "#C6E579",
    fontSize: "1.8125rem",
    letterSpacing: "-0.04em",
    textTransform: "uppercase",
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.only("xs")]: {
      marginBottom: theme.spacing(2),
      fontSize: "0.625rem",
    },
  },
  title: {
    fontFamily: "Roobert-Medium",
    fontSize: "2.375rem",
    lineHeight: "100%",
    letterSpacing: "-0.04em",
    [theme.breakpoints.only("sm")]: {
      fontSize: "1.75rem",
    },
    [theme.breakpoints.only("xs")]: {
      fontSize: "1.125rem",
    },
  },
  details: {
    marginBottom: theme.spacing(6),
    [theme.breakpoints.only("xs")]: {
      marginBottom: theme.spacing(3),
    },
  },
}));

export default RoleCard;
