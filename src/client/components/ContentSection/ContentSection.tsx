import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import cls from "classnames";

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(0, 1.5, 1.5),
    flex: 1,
    flexBasis: "50%",
    padding: theme.spacing(3),

    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    [theme.breakpoints.down("sm")]: {
      margin: 0,
    },
  },
}));
const ContentSection: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props: any) => {
  const { children, className, ...rest } = props;
  const classes = useStyles();
  return (
    <Box {...rest} className={cls(classes.root, className)}>
      {children}
    </Box>
  );
};

export default ContentSection;