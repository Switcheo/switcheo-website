import { Typography, ButtonProps, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import cls from "classnames";
import React from "react";

export interface FooterLinkProps extends ButtonProps {
  target?: string;
}

const useStyles = makeStyles(theme => ({
  root: {
    borderTop: "1px solid",
    borderTopColor: "rgba(6, 60, 79, .3)",
    width: "100%",
    textTransform: "none",
    padding: theme.spacing(.25, 0),
    lineHeight: "32px",
    fontSize: 24,
    textAlign: "left",
    justifyContent: "left",
    color: theme.palette.primary.main,
    borderRadius: 0,
    [theme.breakpoints.down("md")]: {
      fontSize: "16px",
      letterSpacing: "-0.75px",
      lineHeight: "20px",
    },
    "&:hover": {
      backgroundColor: "transparent",
      color: theme.palette.primary.dark,
    },
  },
}));
const FooterLink: React.FC<FooterLinkProps> = (props: any) => {
  const { children, className, ...rest } = props;
  const classes = useStyles();

  return (
    <Button {...rest} className={cls(classes.root, className)} >
      {children}
    </Button>
  );
};

export default FooterLink;