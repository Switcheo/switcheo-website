import escapeStringRegexp from 'escape-string-regexp';
import { Request, Response } from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import ClientApp from '../../client/app';
import { StaticRouter } from "react-router-dom";

const renderMiddleware = () => (req: Request, res: Response) => {
  let html = req.html || '';
  const htmlContent = ReactDOMServer.renderToString(
    <StaticRouter>
      <ClientApp />
    </StaticRouter>
  );
  const htmlReplacements: StringMap = {
    HTML_CONTENT: htmlContent,
  };

  Object.keys(htmlReplacements).forEach(key => {
    const value = htmlReplacements[key];
    html = html.replace(
      new RegExp('__' + escapeStringRegexp(key) + '__', 'g'),
      value
    );
  });

  res.send(html);
};

export default renderMiddleware;
