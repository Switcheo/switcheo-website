import { Box, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import cls from "classnames";
import React from "react";
import { Route, Switch } from "react-router";
import { Content } from "./components";


const useStyles = makeStyles(theme => ({
  root: {
  },
  container: {

  },
}));

const Story: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props: any) => {
  const { children, className, ...rest } = props;
  const classes = useStyles();

  return (
    <Box {...rest} className={cls(classes.root, className)}>
      <Container maxWidth="md" className={classes.container}>
        <Content />
      </Container>
    </Box>
  );
};

export default Story;