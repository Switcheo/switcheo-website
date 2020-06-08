import express, { Request, Response } from "express";

const env = require("dotenv").config().parsed;
const port = process.env.PORT || env.PORT;

let app = require("./server").default;

if (module.hot) {
  module.hot.accept("./server", () => {
    console.log("Server reloading...");

    try {
      app = require("./server").default;
    } catch (error) {
      // Do nothing
    }
  });
}

express()
  .use((req: Request, res: Response) => app.handle(req, res))
  .listen(port || 3000, () => {
    console.log(`Switcheo Website is running: http://localhost:${port || 3000}`);
  });
