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
    fontSize: "95%",
    textDecoration: "none",
    display: "flex",
    marginTop: theme.spacing(1),
    flexDirection: "row",
    alignItems: "center",
    fontWeight: "bold",
    cursor: "pointer",
    "&:hover, &:focus": {
      color: "inherit",
      "& $icon": {
        color: "inherit",
        transform: "scale(0.5) rotate(0)",
      },
    },
  },
  icon: {
    display: "inline-block",
    marginLeft: theme.spacing(0),
    transition: "transform .05s ease-in-out",
    transform: "scale(0.5) rotate(45deg)",
    height: "1em",
    width: "1em",
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