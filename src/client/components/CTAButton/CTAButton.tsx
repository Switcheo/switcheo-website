import { Box, Button, ButtonProps } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import cls from "classnames";
import SwitcheoLogo from "../SwitcheoLogo";

export interface CTAButtonProps extends ButtonProps {
  secondary?: boolean;
  white?: boolean;
  target?: string;
};

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 300,
    [theme.breakpoints.down("md")]: {
      minWidth: 260,
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(3),
    },
    "&:hover $ctaIcon": {
      transform: "rotate(0)",
    },
  },
  ctaIcon: {
    marginLeft: "auto",
    transition: "transform .05s ease-in-out",
    transform: "rotate(45deg)",
    [theme.breakpoints.down("sm")]: {
      transform: "rotate(0)",
    },
  },
  whiteText: {
    color: "#fff",
  },
}));
const CTAButton: React.FC<CTAButtonProps> = (props: any) => {
  const { children, className, secondary, white, ...rest } = props;
  const classes = useStyles();
  return (
    <Button
      variant="contained"
      color={secondary ? "secondary" : "primary"}
      {...rest}
      className={cls(classes.root, className, { [classes.whiteText]: white })}>
      {children}
      <SwitcheoLogo className={classes.ctaIcon} />
    </Button>
  );
};

export default CTAButton;