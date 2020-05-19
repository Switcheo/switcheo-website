
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";
import React from "react";
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
        <Home />
      </Body>
      <Footer />
    </ThemeProvider>
  );
};

export default App;