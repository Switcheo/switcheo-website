import { Button, ButtonProps, makeStyles, Theme } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import SwitcheoArrow from "src/assets/SwitcheoArrow.svg";
import { AnchorLink } from ".";

interface Props extends ButtonProps {
  href: string
}

const SwthButton: React.FC<Props> = (props: Props) => {
  const { className, children, href } = props;
  const classes = useStyles();

  return (
    <AnchorLink href={href}>
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
    </AnchorLink>
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
    [theme.breakpoints.only("xs")]: {
      fontSize: "1rem",
    },
  },
  label: {
    display: "flex",
    justifyContent: "space-between",
  },
  arrow: {
    height: "1.75rem",
    marginLeft: theme.spacing(5),
    [theme.breakpoints.only("xs")]: {
      marginLeft: theme.spacing(2),
      height: "1rem",
    },
  },
}));

export default SwthButton;
