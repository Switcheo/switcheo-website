import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import React from "react";
import SwitcheoLogo from "../SwitcheoLogo";

export interface ViewLinkProps extends React.HTMLAttributes<HTMLButtonElement> {
  target?: string;
  href?: string;
};

const useStyles = makeStyles(theme => ({
  root: {
    fontSize: "20px",
    lineHeight: "22px",
    textDecoration: "none",
    display: "flex",
    marginTop: theme.spacing(1),
    flexDirection: "row",
    alignItems: "center",
    fontWeight: "bold",
    "&:hover": {
      color: theme.palette.primary.light,
    },
    "&:hover $icon": {
      transform: "rotate(0)",
      color: theme.palette.primary.light,
    },
  },
  icon: {
    display: "inline-block",
    marginLeft: theme.spacing(1.5),
    height: ".5em",
    width: ".5em",
    transition: "transform .05s ease-in-out",
    transform: "rotate(45deg)",
  },
}));
const ViewLink: React.FC<ViewLinkProps> = (props: ViewLinkProps) => {
  const { children, className, target, href } = props;
  const classes = useStyles();
  return (
    <Typography className={clsx(classes.root, className)} component="a" variant="body1" color="primary" target={target} href={href}>
      {children || "View"} <SwitcheoLogo className={classes.icon} />
    </Typography>
  );
};

export default ViewLink;