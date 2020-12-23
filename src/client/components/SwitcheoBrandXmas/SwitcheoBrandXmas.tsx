import { makeStyles } from "@material-ui/core/styles";
import cls from "classnames";
import React from "react";
import { ReactComponent } from "./xmas-brand.svg";

const useStyles = makeStyles(theme => ({
  root: {
  },
}));
const SwitcheoBrandXmas = (props: any) => {
  const { className } = props;
  const classes = useStyles();

  return (
    <ReactComponent className={cls(classes.root, className)} />
  );
};

export default SwitcheoBrandXmas;
