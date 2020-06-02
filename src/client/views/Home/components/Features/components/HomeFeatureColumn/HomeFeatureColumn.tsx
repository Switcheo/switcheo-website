import { Box, BoxProps, Divider, Hidden, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import cls from "classnames";
import React from "react";
import { SVGComponent, SwitcheoLogo } from "../../../../../../components";
import { Feature } from "../../../../../../contants";

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
    marginBottom: theme.spacing(2),
    lineHeight: 1.2,
  },
  descriptor: {
    marginBottom: 0,
  },
  link: {
    textDecoration: "none",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    fontWeight: "bold",
    "&:hover": {
      color: theme.palette.primary.light,
    },
    "&:hover $linkIcon": {
      transform: "rotate(0)",
      color: theme.palette.primary.light,
    },
  },
  linkIcon: {
    display: "inline-block",
    marginLeft: theme.spacing(1.5),
    height: ".5em",
    width: ".5em",
    transition: "transform .05s ease-in-out",
    transform: "rotate(45deg)",
  },
  head: {
    position: "relative",
    minHeight: 175,
  },
  label: {
    fontWeight: "bold",
    textDecoration: "none",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    height: 146,
    width: 146,
  },
  divider: {
    backgroundColor: theme.palette.primary.main,
    margin: theme.spacing(1.5, 0),
  },
}));
const HomeFeatureColumn: React.FC<HomeFeatureColumnProps> = (props: any) => {
  const { children, feature, hidden, index, className, ...rest } = props;
  const classes = useStyles(props);

  return (
    <Box {...rest} className={cls(classes.root, className)}>
      <Box className={classes.container}>
        <Typography className={classes.index} color="primary">{index}</Typography>
        <Divider className={classes.divider} />
        <Box className={classes.head}>
          <Typography className={classes.label} variant="body1" color="primary">{feature.label}</Typography>
          {feature.descriptors.map((descriptor: string, index: number) => (
            <Typography className={classes.descriptor} variant="body1" color="primary" key={index}>{descriptor}</Typography>
          ))}
          {!!feature.link && (
            <Typography className={classes.link} component="a" variant="body1" color="primary" target="_blank" href={feature.link}>
              View <SwitcheoLogo className={classes.linkIcon} />
            </Typography>
          )}
        </Box>
        <Hidden smDown>
          <Divider className={classes.divider} />
          <SVGComponent className={classes.icon} url={feature.icon} />
          <Divider className={classes.divider} />
        </Hidden>
      </Box>
    </Box>
  );
};

export default HomeFeatureColumn;