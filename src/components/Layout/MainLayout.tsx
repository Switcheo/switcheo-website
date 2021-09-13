import { BoxProps, makeStyles, Theme } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import { Footer, Header } from "./components";

type Props = BoxProps

const MainLayout: React.FC<Props> = (props: Props) => {
  const { children, className, ...rest } = props;

  const classes = useStyles();
  return (
    <main className={clsx(classes.app, className)} {...rest}>
      <Header />
      {children}
      <Footer />
    </main>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  app: {
    backgroundColor: theme.palette.background.default,
    display: "flex",
    flexDirection: "column",
    overflowX: "hidden",
    position: "relative",
    maxWidth: "100%",
    userSelect: "none",
  },
}));

export default MainLayout;
