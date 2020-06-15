import { makeStyles } from "@material-ui/core/styles";
import cls from "classnames";
import React from "react";
import { ReactComponent } from "./switcheo-logo.svg";

const useStyles = makeStyles(theme => ({
  root: {
    height: 24,
    width: 24,
    "& svg": {
      verticalAlign: "top",
    },
    "& path,polygon": {
      fill: "currentColor",
    },
  },
}));

const SwitcheoLogo = (props: any) => {
  const { className } = props;
  const classes = useStyles();

  return (
    <ReactComponent className={cls(classes.root, className)} />
  );
};

export default SwitcheoLogo;