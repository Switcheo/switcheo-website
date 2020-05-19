import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import cls from "classnames";

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 88,
    [theme.breakpoints.down("sm")]: {
      paddingTop: 64,
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