import { FastifyRequest, FastifyReply } from "fastify";
import { ACCESS_TOKEN } from "EnvironmentVariables";
import { REDIRECTED_COOKIE } from "Constants/jwtReditrct";

export async function generateJWT(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const accessToken = await reply.jwtSign(
    {
      name: "accessToken",
    },
    { expiresIn: "1s" }
  );

  reply.setCookie(ACCESS_TOKEN, accessToken, {
    path: "/",
    signed: true,
  });

  redirectBack(request, reply);
}

export async function haveJWTCheck(
  reqest: FastifyRequest,
  reply: FastifyReply
) {
  return "got Here!";
}

/** Looks up the REDIRECTED_COOKIE in the cookies. when one is found, redirects the request
 * to the cookie value */
export async function redirectBack(
  request: FastifyRequest,
  reply: FastifyReply
) {
  /** No redirect cookie at all */
  if (!request?.cookies[REDIRECTED_COOKIE]) return reply.send("granted");

  const sendBackUrl = decodeURI(request?.cookies[REDIRECTED_COOKIE]);
  return reply.clearCookie(REDIRECTED_COOKIE).redirect(sendBackUrl);
}
