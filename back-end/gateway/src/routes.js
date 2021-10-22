import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import express, { json } from "express";

const app = express()
  .use(cors())
  .options("*", cors())
  .use(morgan("dev"))
  .use(json())
  .use(helmet());

export default app;
