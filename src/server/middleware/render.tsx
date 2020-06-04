import { ServerStyleSheets } from "@material-ui/core";
import escapeStringRegexp from 'escape-string-regexp';
import { Request, Response } from 'express';
import moment from "moment";
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom";
import ClientApp from '../../client/app';
import { SvContentful } from '../service';
import ServerStore from '../store';


const renderMiddleware = () => (req: Request, res: Response) => {
  let html = req.html || '';
  const origin = req.get("origin");
  const sheets = new ServerStyleSheets();
  const htmlContent = ReactDOMServer.renderToString(sheets.collect(
    // @ts-ignore
    <Provider store={ServerStore}>
      <StaticRouter  location={req.url} context={{}}>
        <ClientApp />
      </StaticRouter>
    </Provider>
  ));

  const preloadedState = ServerStore.getState();
  const htmlReplacements: StringMap = {
    HTML_CONTENT: htmlContent,
    PRELOADED_STATE: JSON.stringify(preloadedState).replace(/\"/g, "\\\""),
    WEBSITE_URL: origin || "",
    CSS_CONTENT: `<style>${sheets.toString()}</style>`, // inline styles to initial html 
  };

  Object.keys(htmlReplacements).forEach(key => {
    const value = htmlReplacements[key];
    html = html.replace(
      new RegExp('{{' + escapeStringRegexp(key) + '}}', 'g'),
      value
    );
  });

  res.send(html);

  const contentCacheThreshold = moment().add(-15, "second");
  if (!preloadedState.Content.timestamp || !preloadedState.Content.timestamp!.isAfter(contentCacheThreshold))
    SvContentful.reloadCache().catch(console.error);
};

export default renderMiddleware;
