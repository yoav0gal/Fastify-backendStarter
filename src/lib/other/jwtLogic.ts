import { FastifyRequest, FastifyReply } from "fastify";
import UNSECURED_PATHS from "UnsecuredPaths";
import {
  AUTH_PROVIDER_PATH,
  REDIRECTED_COOKIE,
  REDIRECT_ERRORS,
  EXPIRARION_TIME,
} from "Constants/jwtReditrct";

/** This function verfiys that the request have a valid JWT assigned */
export async function verfiyJWT(request: FastifyRequest, reply: FastifyReply) {
  try {
    if (UNSECURED_PATHS.get(request.url)) return;
    await request.jwtVerify();
  } catch (err: any) {
    if (REDIRECT_ERRORS.has(err.code)) return redirectToAuth(request, reply);

    reply.send(err);
    return;
  }
}

/** Redirects the request to the auth provider. adds `REDIRECTED_COOKIE` containing the original request path and parameters
 * **parameters are not implemented yet** */
async function redirectToAuth(request: FastifyRequest, reply: FastifyReply) {
  const { url: originalRequestPath, hostname: domain } = request;

  /** The request protocol: http for local and https for remote. */
  const redirectProtocol = `http${domain.includes("local") ? "" : "s"}://`;

  /** The full redirect url should output exmple: https://yourApp/jwt */
  const redirectURL = redirectProtocol + domain + AUTH_PROVIDER_PATH;

  /** Adds the cookie and redirects the request*/
  reply
    .setCookie(REDIRECTED_COOKIE, originalRequestPath, {
      path: "/",
      encode: encodeURI,
      expires: new Date(Date.now() + EXPIRARION_TIME),
    })
    .redirect(redirectURL);
  return;
}
