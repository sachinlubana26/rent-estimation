import http from "http";
import express from "express";
import dotenv from "dotenv";
import { applyMiddleware, applyRoutes } from "./utils";
import middleware from "./middleware";
import errorHandlers from "./middleware/errorHandlers";
import routes from "./services";
import logger from './logging/index';
import { db } from './models';

dotenv.config();

process.on("uncaughtException", e => {
  logger.error(e);
  process.exit(1);
});

process.on("unhandledRejection", e => {
  logger.error(e);
  process.exit(1);
});

const router = express();
applyMiddleware(middleware, router);
applyRoutes(routes, router);
applyMiddleware(errorHandlers, router);

const { PORT = 3000 } = process.env;
const server = http.createServer(router);

server.listen(PORT, () => {
  db.sequelize.sync();
  logger.log(`Server is running http://localhost:${PORT}`)
});





