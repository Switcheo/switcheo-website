import { Typography, TypographyProps } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import cls from "classnames";
import React from "react";

export interface FooterTitleProps extends TypographyProps {
  large?: boolean;
  secondary?: boolean;
};

const useStyles = makeStyles(theme => ({
  root: {
    borderTop: "1px solid",
    borderTopColor: "rgba(6, 60, 79, .3)",
    width: "100%",
    marginBottom: theme.spacing(4.5),
    padding: theme.spacing(.5, 0),
  },
}));
const FooterTitle: React.FC<FooterTitleProps> = (props: any) => {
  const { children, title, className, large, ...rest } = props;
  const classes = useStyles();

  return (
    <Typography
      variant="h3"
      color="primary"
      {...rest}
      className={cls(classes.root, className)}>
      {children}
    </Typography>
  );
};

export default FooterTitle;