import { Box, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import cls from "classnames";
import { KeyFeatures, OurProducts } from "./components";

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      padding: 0,
    }
  },
}));
const Features: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props: any) => {
  const { children, className, ...rest } = props;
  const classes = useStyles();
  return (
    <Container maxWidth="xl" {...rest} className={cls(classes.root, className)}>
      <KeyFeatures id="features" />
      <OurProducts id="products" />
    </Container>
  );
};

export default Features;