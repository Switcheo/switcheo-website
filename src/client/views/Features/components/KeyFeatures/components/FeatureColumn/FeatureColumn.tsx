import { Box, BoxProps, Typography, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import cls from "classnames";
import { SVGComponent } from "../../../../../../components";
import { minBlockHeight, Feature } from "../../../../../../contants";

export interface FeatureColumnProps extends BoxProps {
  feature: Feature;
  index: number;
};

const useStyles = makeStyles(theme => ({
  root: (props: FeatureColumnProps) => ({
    color: theme.palette.primary.main,
    minHeight: minBlockHeight,
    "@media (max-width: 459.95px)": {
      padding: theme.spacing(0, 1.5),
      minHeight: 0,
    },
    ...props.feature.inverse && {
      [theme.breakpoints.between("md", "lg")]: {
        marginLeft: theme.spacing(-1.5),
        paddingLeft: theme.spacing(1.5),
      },
    },
  }),
  inverseBackground: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
  },
  container: {
    padding: theme.spacing(1.5),
    paddingTop: 116,
  },
  index: {
    fontWeight: 700,
    fontSize: "173px",
    lineHeight: "150px",
    letterSpacing: "-5.41px",
  },
  divider: (props: FeatureColumnProps) => ({
    backgroundColor: theme.palette.primary.main,
    margin: theme.spacing(1.5, 0),
    ...props.feature.inverse && {
      backgroundColor: theme.palette.secondary.main,
    },
  }),
  mobileDownHide: {
    "@media (max-width: 459.95px)": {
      display: "none",
    },
  },
  description: {
    marginBottom: theme.spacing(2),
    lineHeight: 1.2,
  },
  head: {
    minHeight: 175,
  },
  label: {
    fontWeight: "bold",
  },
  icon: {
    height: 146,
    width: 146,
  },
  inverseColor: {
    color: theme.palette.secondary.main,
  },
}));
const FeatureColumn: React.FC<FeatureColumnProps> = (props: any) => {
  const { children, feature, index, className, ...rest } = props;
  const classes = useStyles(props);

  const textColor = feature.inverse ? "secondary" : "primary";

  return (
    <Box {...rest} className={cls(classes.root, className, { [classes.inverseBackground]: feature.inverse })}>
      <Box className={classes.container}>
        <Typography className={classes.index} color={textColor}>{index}</Typography>
        <Divider className={classes.divider} />
        <Box className={classes.head}>
          <Typography className={classes.label} variant="body2" color={textColor}>{feature.label}</Typography>
          {feature.descriptors.map((descriptor: string, index: number) => (
            <Typography variant="body2" color={textColor} key={index}>{descriptor}</Typography>
          ))}
        </Box>
        <Typography className={classes.description} variant="body2" color={textColor}>{feature.description}</Typography>
        <Divider className={cls(classes.divider, classes.mobileDownHide)} />
        <SVGComponent className={cls(classes.icon, { [classes.inverseColor]: feature.inverse })} url={feature.icon} />
        <Divider className={cls(classes.divider, classes.mobileDownHide)} />
      </Box>
    </Box>
  );
};

export default FeatureColumn;