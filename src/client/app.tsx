
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Body, Footer, NavBar } from "./components";
import "./index.css";
import AppTheme from "./theme";
import { Home, Features, Culture, Story, Press } from "./views";
import { Paths } from "./contants";

const App = () => {

  return (
    <ThemeProvider theme={AppTheme}>
      <CssBaseline />
      <NavBar />
      <Body>
        <Switch>
          <Route path={Paths.home} exact>
            <Home />
          </Route>
          <Route path={Paths.features} exact>
            <Features />
          </Route>
          <Route path={Paths.culture} exact>
            <Culture />
          </Route>
          <Route path={Paths.story} exact>
            <Story />
          </Route>
          <Route path={Paths.press} exact>
            <Press />
          </Route>
          <Route>
            <Redirect to={Paths.home} />
          </Route>
        </Switch>
      </Body>
      <Footer />
    </ThemeProvider>
  );
};

export default App;