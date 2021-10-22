import Bull from "bull";
import { REDIS } from "../../../settings";

const opts = {
  redis: {
    host: REDIS.host,
    port: REDIS.port,
    password: REDIS.auth_pass,
  },
};

export const name = "fnkdasuksrwd";

// * filter
export const queueFilterByRegisterUser = new Bull(
  `${name}:FilterByRegisterUser`,
  opts
);

// export const queueFilterUser = new Bull(
//   `${name}:filterUser`,
//   opts
// );
// export const queueFilterUserChannel = new Bull(
//   `${name}:filterUserChannel`,
//   opts
// );

// // * Crud
// export const queueCreate = new Bull(`${name}:create`, opts);
// export const queueDelete = new Bull(`${name}:delete`, opts);
// export const queueUpdate = new Bull(`${name}:update`, opts);
