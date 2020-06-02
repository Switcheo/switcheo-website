import { Box, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import cls from "classnames";
import { FeatureColumn } from "./components";
import { FEATURES } from "../../../../contants";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.secondary.main,
    marginTop: theme.spacing(3),
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      marginTop: 0,
    },
  },
  title: {
    position: "absolute",
    left: theme.spacing(3),
    top: theme.spacing(3),
  },
  container: {
    padding: theme.spacing(0, 1.5),
    [theme.breakpoints.down("sm")]: {
      padding: 0,
    },
  },
  item: {
    "@media (max-width: 459.95px)": {
      maxWidth: "100%",
      flexBasis: "100%",
    },
  },
}));
const KeyFeatures: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props: any) => {
  const { children, className, ...rest } = props;
  const classes = useStyles();
  return (
    <Box {...rest} className={cls(classes.root, className)}>
      <Typography className={classes.title} variant="h2">Key features</Typography>
      <Grid className={classes.container} container>
        {FEATURES.map((feature, index) => (
          <Grid key={index} className={classes.item} item sm={4} xs={6}>
            <FeatureColumn feature={feature} index={index + 1} key={index} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default KeyFeatures;