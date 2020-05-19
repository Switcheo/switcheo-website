
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Body, Footer, NavBar } from "./components";
import "./index.css";
import AppTheme from "./theme";
import { Home } from "./views";

const App = () => {

  return (
    <ThemeProvider theme={AppTheme}>
      <CssBaseline />
      <NavBar />
      <Body>
        <Switch>
          <Route path="/features" exact>

          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
      </Body>
      <Footer />
    </ThemeProvider>
  );
};

export default App;