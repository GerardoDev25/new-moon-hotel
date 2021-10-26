import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import express, { json } from "express";

import { loginRouter } from "./login.router";
import { adminRouter } from "./adminRouter.router";
import { laundryRouter } from "./laundryRouter.router";
import { receptionRouter } from "./receptionRouter.router";
import { coffeeShopRouter } from "./coffeeShopRouter.router";

const app = express()
  .use(cors())
  .options("*", cors())
  .use(morgan("dev"))
  .use(json())
  .use(helmet());

// app.use("/", (req, res) => {
//   res.status(200).json({ msg: "root", success: true });
// });

app.use("/api/login", loginRouter);
app.use("/api/admin", adminRouter);
app.use("/api/laundry", laundryRouter);
app.use("/api/reception", receptionRouter);
app.use("/api/coffeeShop", coffeeShopRouter);

export default app;
