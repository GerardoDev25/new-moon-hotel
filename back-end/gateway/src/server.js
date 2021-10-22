import fs from "fs";
import https from "https";
import Socket from "socket.io";

import app from "./routes";
import { key, cert } from "./settings";

export default class Server {
  constructor() {
    this.port = process.env.PORT || 443;
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
      await this.server.listen(this.port, () => {
        console.log("listen to port, ", this.port);
      });
    } catch (error) {
      console.log(error);
    }
  }
}

// ! old index
// import moment from "moment";

// import { server, io } from "./server.js";

// import services from "./services";
// import { name } from "./services/fnkdasuksrwd/adapter/index.js";

// async function main() {
//   await server.listen(443, () => {
//     console.log(
//       `listening on *:${443}`,
//       moment().format("DD/MM/YYYY HH:mm:ss")
//     );

//     io.on("connection", async (socket) => {
//       console.log("connection", socket.id);

//       socket.on(
//         `req:${name}:FilterByRegisterUser`,
//         async ({ limit, offset, registerUser }) => {
//           let { statusCode, data, message } =
//             await services.fnkdasuksrwd.handleFilterByRegisterUser(
//               {
//                 limit,
//                 offset,
//                 registerUser,
//               }
//             );

//           io.to(socket.id).emit(
//             `res:${name}:FilterByRegisterUser`,
//             { statusCode, data, message }
//           );
//         }
//       );

//       socket.on("disconnect", () => {
//         console.log("disconnect", socket.id);
//       });
//     });
//   });
// }

// main();
