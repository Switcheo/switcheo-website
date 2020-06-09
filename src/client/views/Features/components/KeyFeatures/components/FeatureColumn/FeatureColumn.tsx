import { Box, BoxProps, Typography, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import cls from "classnames";
import { SVGComponent, SwitcheoLogo, ViewLink } from "../../../../../../components";
import { minBlockHeight, Feature } from "../../../../../../constants";

export interface FeatureColumnProps extends BoxProps {
  feature: Feature;
  index: number;
};

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.primary.main,
    minHeight: minBlockHeight,
    paddingBottom: theme.spacing(2),
    "@media (max-width: 459.95px)": {
      padding: theme.spacing(0, 1.5),
      minHeight: 0,
    },
  },
  inverse: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    "& $divider": {
      backgroundColor: theme.palette.secondary.main,
    },
    "& $index,$descriptor,$description,$label,$icon": {
      color: theme.palette.secondary.main,
    },
  },
  container: {
    padding: theme.spacing(1.5),
    paddingTop: 116,
    [theme.breakpoints.down("sm")]: {
      paddingTop: 40,
      paddingBottom: 90,
      "&:first-child": {
        paddingTop: 116,
      },
    },
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
  inverseLink: {
    color: theme.palette.secondary.main,
    "&:hover": {
      color: theme.palette.secondary.dark,
    },
  },
  description: {
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(2),
    lineHeight: 1.25,
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
    marginBottom: theme.spacing(1),
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

  const inversed = index === 2 || index === 4;
  return (
    <Box {...rest} className={cls(classes.root, { [classes.inverse]: inversed }, className)}>
      <Box className={classes.container}>
        <Typography className={classes.index}>{index}</Typography>
        <Divider className={classes.divider} />
        <Box className={classes.head}>
          <Typography className={classes.label} variant="body2">{feature.label}</Typography>
          {feature.descriptors.map((descriptor: string, index: number) => (
            <Typography className={classes.descriptor} variant="body2" key={index}>{descriptor}</Typography>
          ))}
          {!!feature.link && (
            <ViewLink className={cls({ [classes.inverseLink]: inversed })} target="_blank" href={feature.link} />
          )}
        </Box>
        <Typography className={classes.description} variant="body2">{feature.description}</Typography>
        <Divider className={cls(classes.divider, classes.mobileDownHide)} />
        <SVGComponent className={cls(classes.icon)} url={feature.icon} />
      </Box>
    </Box>
  );
};

export default FeatureColumn;