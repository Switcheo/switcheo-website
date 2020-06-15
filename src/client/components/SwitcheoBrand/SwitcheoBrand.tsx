import { makeStyles } from "@material-ui/core/styles";
import cls from "classnames";
import React from "react";
import { ReactComponent } from "./brand.svg";

const useStyles = makeStyles(theme => ({
  root: {
    "& path,polygon": {
      fill: theme.palette.primary.main,
    }
  },
}));
const SwitcheoBrand = (props: any) => {
  const { className } = props;
  const classes = useStyles();

  return (
    <ReactComponent className={cls(classes.root, className)} />
  );
};

export default SwitcheoBrand;