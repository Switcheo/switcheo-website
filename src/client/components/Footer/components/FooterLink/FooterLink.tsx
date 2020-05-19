import { Typography, ButtonProps, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import cls from "classnames";
import React from "react";


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
  },
}));
const FooterLink: React.FC<ButtonProps> = (props: any) => {
  const { children, href, className, ...rest } = props;
  const classes = useStyles();

  return (
    <Button variant="a" href={href} {...rest} className={cls(classes.root, className)} >
      {children}
    </Button>
  );
};

export default FooterLink;