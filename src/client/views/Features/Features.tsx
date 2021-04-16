import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import cls from "classnames";
import { KeyFeatures, OurProducts } from "./components";

const useStyles = makeStyles(theme => ({
  root: {
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.down("sm")]: {
      paddingBottom: theme.spacing(0)
     }, 
  },
}));
const Features: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props: any) => {
  const { children, className, ...rest } = props;
  const classes = useStyles();
  return (
    <Box {...rest} className={cls(classes.root, className)}>
      <KeyFeatures id="features" />
      <OurProducts id="products" />
    </Box>
  );
};

export default Features;
