import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import cls from "classnames";
import { Dim } from "../../constants";

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: Dim.headerHeight,
    [theme.breakpoints.down("xs")]: {
      paddingTop: Dim.collapsedHeaderHeight,
    },
  },
}));
const Body: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props: any) => {
  const { children, className, ...rest } = props;
  const classes = useStyles();
  return (
    <div {...rest} className={cls(classes.root, className)}>
      {children}
    </div>
  );
};

export default Body;