import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./store"

ReactDOM.render((
  // @ts-ignore
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
), document.getElementById("root"), () => {
  const ssStyles = document.getElementById('server-side-styles')
  if (ssStyles) {
    ssStyles.parentNode!.removeChild(ssStyles)
  }
});
