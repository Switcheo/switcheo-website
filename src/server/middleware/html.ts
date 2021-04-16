import { NextFunction, Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import { CANONICAL_ORIGIN } from './constants';

const htmlMiddleware = () => (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const publicPath = path.join(__dirname, '/public');

  const host = req.header("host");
  if (process.env.NODE_ENV === "production" && host !== CANONICAL_ORIGIN) {
    res.redirect(`${CANONICAL_ORIGIN}${req.originalUrl}`);
    return;
  }

  fs.readFile(`${publicPath}/app.html`, 'utf8', (err, html) => {
    if (!err) {
      req.html = html;
      next();
    } else {
      res.status(500).send('Error parsing app.html');
    }
  });
};

export default htmlMiddleware;
