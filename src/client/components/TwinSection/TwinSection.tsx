import { Container, ContainerProps, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import cls from "classnames";
import React from "react";
import { minBlockHeight } from "../../contants";

export interface TwinSectionProps extends ContainerProps {
  mobileReverse?: boolean;
  hide?: "smDown" | "mdUp";
};

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "row",
    padding: theme.spacing(0, 1.5),
    minHeight: minBlockHeight,
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      minHeight: 0,
      padding: 0,
      marginTop: 0,
    },
  },
  mobileReverse: {
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
    },
  },
}));
const TwinSection: React.FC<TwinSectionProps> = (props: any) => {
  const { children, className, hide, mobileReverse, ...rest } = props;
  const classes = useStyles();
  const hiddenProps = {
    ... typeof hide === "string" && {
      [hide]: true,
    },
  };
  return (
    <Hidden {...hiddenProps}>
      <Container maxWidth="xl" {...rest} className={cls(classes.root, className, { [classes.mobileReverse]: mobileReverse })}>
        {children}
      </Container>
    </Hidden>
  );
};

export default TwinSection;