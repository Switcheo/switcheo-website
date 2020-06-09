import { Box, BoxProps, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import cls from "classnames";
import { Switch, Route } from "react-router";

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 100,
    paddingBottom: 100,
    color: theme.palette.primary.main,
    "& a": {
      color: theme.palette.primary.main,
    },
    "& p": {
    },
  },
}));

const Content: React.FC<BoxProps> = (props: BoxProps) => {
  const { children, className, ...rest } = props;
  const classes = useStyles();

  if (typeof document === "undefined")
    return null;

  const staticDocumentElement = document.getElementById("static-document");

  let __html = "";
  if (staticDocumentElement) {
    __html = staticDocumentElement.innerHTML;
    staticDocumentElement.remove();
  }
  return (
    <Box {...rest} className={cls(classes.root, className)}>
      <Switch>
        <Route path="/security-policy" exact>
          <Typography variant="h2">Security Policy</Typography>
        </Route>
        <Route path="/listing-policy" exact>
          <Typography variant="h2">Listing Policy</Typography>
        </Route>
        <Route path="/terms-of-use" exact>
          <Typography variant="h2">Terms of Use</Typography>
        </Route>
        <Route path="/privacy-policy" exact>
          <Typography variant="h2">Privacy Policy</Typography>
        </Route>
      </Switch>
      <div dangerouslySetInnerHTML={{ __html }} />
    </Box>
  );
};

export default React.memo(Content, () => false);