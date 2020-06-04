import { Box, BoxProps, Typography, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import cls from "classnames";
import { SVGComponent, SwitcheoLogo, ViewLink } from "../../../../../../components";
import { minBlockHeight, Feature } from "../../../../../../contants";

export interface FeatureColumnProps extends BoxProps {
  feature: Feature;
  index: number;
};

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.primary.main,
    minHeight: minBlockHeight,
    "@media (max-width: 459.95px)": {
      padding: theme.spacing(0, 1.5),
      minHeight: 0,
    },
  },
  container: {
    padding: theme.spacing(1.5),
    paddingTop: 116,
  },
  index: {
    color: theme.palette.primary.main,
    fontWeight: 700,
    fontSize: "173px",
    lineHeight: "150px",
    letterSpacing: "-5.41px",
  },
  divider: {
    backgroundColor: theme.palette.primary.main,
    margin: theme.spacing(1.5, 0),
  },
  mobileDownHide: {
    "@media (max-width: 459.95px)": {
      display: "none",
    },
  },
  descriptor: {
    color: theme.palette.primary.main,
  },
  description: {
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(2),
    lineHeight: 1.2,
    minHeight: 200,
    [theme.breakpoints.down("sm")]: {
      minHeight: 0,
    },
  },
  head: {
    minHeight: 200,
    [theme.breakpoints.down("sm")]: {
      minHeight: 100,
    },
  },
  label: {
    color: theme.palette.primary.main,
    fontWeight: "bold",
  },
  icon: {
    color: theme.palette.primary.main,
    height: 146,
    width: 146,
  },
}));
const FeatureColumn: React.FC<FeatureColumnProps> = (props: any) => {
  const { children, feature, index, className, ...rest } = props;
  const classes = useStyles(props);

  return (
    <Box {...rest} className={cls(classes.root, className)}>
      <Box className={classes.container}>
        <Typography className={classes.index}>{index}</Typography>
        <Divider className={classes.divider} />
        <Box className={classes.head}>
          <Typography className={classes.label} variant="body2">{feature.label}</Typography>
          {feature.descriptors.map((descriptor: string, index: number) => (
            <Typography className={classes.descriptor} variant="body2" key={index}>{descriptor}</Typography>
          ))}
          {!!feature.link && (
            <ViewLink target="_blank" href={feature.link} />
          )}
        </Box>
        <Typography className={classes.description} variant="body2">{feature.description}</Typography>
        <Divider className={cls(classes.divider, classes.mobileDownHide)} />
        <SVGComponent className={cls(classes.icon)} url={feature.icon} />
        <Divider className={cls(classes.divider, classes.mobileDownHide)} />
      </Box>
    </Box>
  );
};

export default FeatureColumn;