import { Button, ButtonProps, makeStyles, Theme } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import SwitcheoArrow from "src/assets/SwitcheoArrow.svg";

const SwthButton: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { className, children } = props;
  const classes = useStyles();

  return (
    <Button
      variant="text"
      classes={{
        root: classes.root,
        label: clsx(classes.label, className),
      }}
    >
      {children}
      <SwitcheoArrow className={clsx(classes.arrow, className)}/>
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
    justifyContent: "space-between",
  },
  arrow: {
    height: "1.75rem",
    marginLeft: theme.spacing(5),
  },
}));

export default SwthButton;
