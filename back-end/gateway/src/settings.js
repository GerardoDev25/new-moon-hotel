import dotenv from "dotenv";

dotenv.config();

// import { createClient } from 'redis';

export const key = process.env.KEY;
export const cert = process.env.CERT;

// export const REDIS = {
//     host: process.env.REDIS_HOST,
//     port: process.env.REDIS_PORT,
//     auth_pass: process.env.REDIS_PASS
// };

// export const redisClient = createClient({
//     host: REDIS.host,
//     port: REDIS.port,
//     auth_pass: REDIS.auth_pass
// });

// export const status = {
//     success: 'success',
//     error: 'error',
// }

// export const InternalError = "No podemos procesar tu solicitud en este momento";
