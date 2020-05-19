import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import cls from "classnames";

const useStyles = makeStyles(theme => ({
  root: {
  },
  container: {
    maxWidth: 1440,
    margin: "0 auto",
  },
}));
const Section: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props: any) => {
  const { children, className, ...rest } = props;
  const classes = useStyles();
  return (
    <div {...rest} className={cls(classes.root, className)}>
      <div className={classes.container}>
        {children}
      </div>
    </div>
  );
};

Section.propTypes = {
};

export default Section;