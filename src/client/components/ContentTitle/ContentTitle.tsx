import { Typography, TypographyProps } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import cls from "classnames";
import React from "react";

export interface ContentTitleProps extends TypographyProps {
  large?: boolean;
  secondary?: boolean;
};

const useStyles = makeStyles(theme => ({
  root: {
  },
  large: {
    fontSize: "84px",
    lineHeight: "84px",
    letterSpacing: "-1px",
    [theme.breakpoints.down("md")]: {
      fontSize: "48px",
      lineHeight: "50px",
      letterSpacing: "-.5px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "66px",
      lineHeight: "58px",
      letterSpacing: "-2.5px",
    },
  },
}));
const ContentTitle: React.FC<ContentTitleProps> = (props: any) => {
  const { children, className, large, secondary, ...rest } = props;
  const classes = useStyles();
  return (
    <Typography
      variant="h2"
      color={secondary ? "secondary" : "primary"}
      {...rest}
      className={cls(classes.root, className, { [classes.large]: large })}>
      {children}
    </Typography>
  );
};

export default ContentTitle;