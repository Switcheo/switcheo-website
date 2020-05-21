import escapeStringRegexp from 'escape-string-regexp';
import { Request, Response } from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom";
import ClientApp from '../../client/app';
import ServerStore from '../store';


const renderMiddleware = () => async (req: Request, res: Response) => {
  let html = req.html || '';
  const htmlContent = ReactDOMServer.renderToString(
    // @ts-ignore
    <Provider store={ServerStore}>
      <StaticRouter  location={req.url} context={{}}>
        <ClientApp />
      </StaticRouter>
    </Provider>
  );

  const preloadedState = ServerStore.getState();
  const htmlReplacements: StringMap = {
    HTML_CONTENT: htmlContent,
    PRELOADED_STATE: JSON.stringify(preloadedState).replace(/\"/g, "\\\""),
  };

  Object.keys(htmlReplacements).forEach(key => {
    const value = htmlReplacements[key];
    html = html.replace(
      new RegExp('{{' + escapeStringRegexp(key) + '}}', 'g'),
      value
    );
  });

  res.send(html);
};

export default renderMiddleware;
