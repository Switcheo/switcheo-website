import { makeStyles } from "@material-ui/core/styles";
import cls from "classnames";
import React from "react";
import SVGComponent from "../SVGComponent";
import urlBrandSvg from "./brand.svg";

const useStyles = makeStyles(theme => ({
  root: {
    "& path,polygon": {
      fill: theme.palette.primary.main,
    }
  },
}));
const SwitcheoBrand = (props: any) => {
  const { children, className, ...rest } = props;
  const classes = useStyles();

  return (
    <SVGComponent url={urlBrandSvg} {...rest} className={cls(classes.root, className)} />
  );
};

export default SwitcheoBrand;