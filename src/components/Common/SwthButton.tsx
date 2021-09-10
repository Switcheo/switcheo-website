import { Button, makeStyles, Theme } from "@material-ui/core";
import React from "react";
import SwitcheoArrow from "src/assets/SwitcheoArrow.svg";

const SwthButton: React.FC = (props) => {
  const { children } = props;
  const classes = useStyles();

  return (
    <Button
      variant="text"
      classes={{
        root: classes.root,
        label: classes.label,
      }}
    >
      {children}
      <SwitcheoArrow className={classes.arrow}/>
    </Button>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    paddingLeft: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
    fontFamily: "Roobert",
    fontSize: "1.5625rem",
    textTransform: "none",
    color: "inherit",
  },
  label: {
    display: "flex",
  },
  arrow: {
    marginLeft: theme.spacing(5),
  },
}));

export default SwthButton;
