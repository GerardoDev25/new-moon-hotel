import fs from "fs";
import https from "https";
import Socket from "socket.io";

import app from "./routes";
import { key, cert, port } from "./settings";

export default class Server {
  constructor() {
    this.server = https.createServer(
      {
        key: fs.readFileSync(key),
        cert: fs.readFileSync(cert),
      },
      app
    );
    this.io = new Socket.Server(this.server);
  }

  async listen() {
    try {
      await this.server.listen(port, () => {
        console.log("listen to port, ", port);
      });
    } catch (error) {
      console.log(error);
    }
  }
}
