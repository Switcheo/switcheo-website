import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "row",
    marginLeft: "auto",
  },
}));
const NavGroup: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props: any) => {
  const { children } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {children}
    </div>
  );
};

NavGroup.propTypes = {
};

export default NavGroup;