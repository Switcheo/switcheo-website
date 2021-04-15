import { Box, BoxProps, Divider, Hidden, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import cls from "classnames";
import React from "react";
import { ViewLink } from "../../../../../../components";
import { Feature } from "../../../../../../constants";

export interface HomeFeatureColumnProps extends BoxProps {
  feature: Feature;
  index: number;
};

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.primary.main,
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(0, 1.5),
      minHeight: 0,
    },
  },
  container: {
    padding: theme.spacing(1.5),
    paddingTop: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      padding: 0,
      paddingTop: theme.spacing(3),
    },
  },
  index: {
    fontWeight: 700,
    fontSize: "173px",
    lineHeight: "150px",
    letterSpacing: "-5.41px",
    [theme.breakpoints.down("md")]: {
      fontSize: "100px",
      lineHeight: "98px",
      letterSpacing: "-3.5px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "66px",
      lineHeight: "68px",
      letterSpacing: "-2.2px",
    },
  },
  description: {
    margin: theme.spacing(2, 0),
  },
  descriptor: {
    marginBottom: 0,
  },
  head: {
    position: "relative",
    minHeight: 80,
  },
  label: {
    fontWeight: "bold",
    textDecoration: "none",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginTop: theme.spacing(3),
    height: 146,
    width: 146,
    '& path': {
      fill: theme.palette.primary.main,
    },
  },
  divider: {
    backgroundColor: theme.palette.primary.main,
    margin: theme.spacing(1.5, 0),
  },
}));
const HomeFeatureColumn: React.FC<HomeFeatureColumnProps> = (props: any) => {
  const { children, feature, hidden, index, className, ...rest } = props;
  const classes = useStyles(props);
  const Icon = feature.icon;

  return (
    <Box {...rest} className={cls(classes.root, className)}>
      <Box className={classes.container}>
        <Typography className={classes.index} color="primary">{index}</Typography>
        <Divider className={classes.divider} />
        <Box className={classes.head}>
          <Typography className={classes.label} variant="body1" color="primary">{feature.label}</Typography>
        </Box>
        <Hidden smDown>
          <Divider className={classes.divider} />
          <Icon className={cls(classes.icon)} />
        </Hidden>
      </Box>
    </Box>
  );
};

export default HomeFeatureColumn;