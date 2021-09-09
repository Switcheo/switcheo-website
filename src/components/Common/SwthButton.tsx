import { Button, makeStyles, Theme } from "@material-ui/core";
import Image from "next/image";
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
        endIcon: classes.endIcon,
      }}
      endIcon={<Image src={SwitcheoArrow} alt="SwitcheoArrow" />}
    >
      {children}
    </Button>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    paddingLeft: 0,
    minWidth: "18.75rem",
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
    width: "100%",
  },
  endIcon: {
    padding: theme.spacing(2, 4),
  },
}));

export default SwthButton;
