import { Box, BoxProps, Typography, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import cls from "classnames";
import { minBlockHeight, Feature } from "../../../../../../constants";
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

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
    "& $index,$descriptor,$description,$label": {
      color: theme.palette.secondary.main,
    },
    '& $icon path': {
      fill: theme.palette.secondary.main,
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
    minHeight: '16rem',
    [theme.breakpoints.down("sm")]: {
      minHeight: '9rem',
    },
    [theme.breakpoints.down("xs")]: {
      minHeight: '5rem',
    }
  },
  head: {
    minHeight: 80,
    [theme.breakpoints.down("sm")]: {
      minHeight: 50,
    },
  },
  label: {
    color: theme.palette.primary.main,
    fontWeight: "bold",
    marginBottom: theme.spacing(1),
  },
  icon: {
    height: 146,
    width: 146,
    '& path': {
      fill: theme.palette.primary.main,
    },
  },
}));
const FeatureColumn: React.FC<FeatureColumnProps> = (props: any) => {
  const { children, feature, index, className, ...rest } = props;
  const theme = useTheme();
  const matchSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchXS = useMediaQuery(theme.breakpoints.down('xs'))
  const Icon = feature.icon;
  const classes = useStyles(props);

  const inversed = matchSM && !matchXS ? (index === 2 || index === 3) : (index === 2 || index === 4);
  return (
    <Box {...rest} className={cls(classes.root, { [classes.inverse]: inversed }, className)}>
      <Box className={classes.container}>
        <Typography className={classes.index}>{index}</Typography>
        <Divider className={classes.divider} />
        <Box className={classes.head}>
          <Typography className={classes.label} variant="body2">{feature.label}</Typography>
        </Box>
        <Typography className={classes.description} variant="body2">{feature.description}</Typography>
        <Divider className={cls(classes.divider, classes.mobileDownHide)} />
        <Icon className={cls(classes.icon)} />
      </Box>
    </Box>
  );
};

export default FeatureColumn;