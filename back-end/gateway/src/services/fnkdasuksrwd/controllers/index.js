import { status, InternalError } from "../../../settings";
import { queueFilterByRegisterUser } from "../adapter";

// export const Create = async ({ user, comment, channel }) => {
//   try {
//     const job = await queueCreate.add(
//       { user, comment, channel },
//       {}
//     );

//     const { statusCode, data, message } = await job.finished();

//     return { statusCode, data, message };
//   } catch (error) {
//     console.error({ step: "controller Create", error });
//     return { statusCode: status.error, message: InternalError };
//   }
// };

// export const handleFilterUser = async ({
//   limit,
//   offset,
//   user,
// }) => {
//   try {
//     const job = await queueFilterUser.add(
//       { limit, offset, user },
//       {}
//     );

//     const { statusCode, data, message } = await job.finished();

//     return { statusCode, data, message };
//   } catch (error) {
//     console.error({
//       step: "controller handleFilterUser",
//       error,
//     });
//     return { statusCode: status.error, message: InternalError };
//   }
// };

// export const handleFilterChannel = async ({
//   limit,
//   offset,
//   channel,
// }) => {
//   try {
//     const job = await queueFilterChannel.add(
//       { limit, offset, channel },
//       {}
//     );

//     const { statusCode, data, message } = await job.finished();

//     return { statusCode, data, message };
//   } catch (error) {
//     console.error({
//       step: "controller handleFilterChannel",
//       error,
//     });
//     return { statusCode: status.error, message: InternalError };
//   }
// };

// export const handleFilterUserChannel = async ({
//   limit,
//   offset,
//   channel,
//   user,
// }) => {
//   try {
//     const job = await queueFilterUserChannel.add(
//       { limit, offset, channel, user },
//       {}
//     );

//     const { statusCode, data, message } = await job.finished();

//     return { statusCode, data, message };
//   } catch (error) {
//     console.error({
//       step: "controller handleFilterUserChannel",
//       error,
//     });
//     return { statusCode: status.error, message: InternalError };
//   }
// };

// export const handleDelete = async ({ pk, user, channel }) => {
//   try {
//     const job = await queueDelete.add({ pk, user, channel }, {});

//     const { statusCode, data, message } = await job.finished();

//     return { statusCode, data, message };
//   } catch (error) {
//     console.error({ step: "controller handleDelete", error });
//     return { statusCode: status.error, message: InternalError };
//   }
// };

export const handleFilterByRegisterUser = async ({
  limit,
  offset,
  registerUser,
}) => {
  try {
    const job = await queueFilterByRegisterUser.add(
      { limit, offset, registerUser },
      {}
    );

    const result = await job.finished();

    return result;
  } catch (error) {
    console.error({
      step: "controller handleFilterByRegisterUser",
      error,
    });
    return { statusCode: status.error, message: InternalError };
  }
};
