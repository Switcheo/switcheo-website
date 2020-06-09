
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Body, Footer, NavBar } from "./components";
import "./index.css";
import AppTheme from "./theme";
import { Home, Features, Culture, Story, Press, Terms } from "./views";
import { Paths } from "./constants";

const App = () => {

  return (
    <ThemeProvider theme={AppTheme}>
      <CssBaseline />
      <NavBar />
      <Body>
        <Switch>
          <Route path={Paths.home} exact component={Home} />
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
          <Route path={Paths.terms_of_use} exact>
            <Terms />
          </Route>
          <Route path={Paths.privacy_policy} exact>
            <Terms />
          </Route>
          <Route path={Paths.security_policy} exact>
            <Terms />
          </Route>
          <Route path={Paths.listing_policy} exact>
            <Terms />
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