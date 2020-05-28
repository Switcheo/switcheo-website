import express from "express";
import path from "path";
import actions from "../client/store/actions";
import htmlMiddleware from "./middleware/html";
import renderMiddleware from "./middleware/render";
import { SvContentful } from "./service";
import ServerStore from "./store";

SvContentful.init();
SvContentful.reloadCache();
const publicPath = path.join(__dirname, "/public");
const app = express();

app.use(express.static(publicPath));
app.use(htmlMiddleware());
app.use(renderMiddleware());

export default app;
