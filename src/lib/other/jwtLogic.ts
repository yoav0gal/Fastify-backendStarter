import { FastifyRequest, FastifyReply } from "fastify";
import UNSECURED_PATHS from "UnsecuredPaths";

/** This function verfiys that the request have a valid JWT assigned */
export async function verfiyJWT(request: FastifyRequest, reply: FastifyReply) {
  try {
    if (UNSECURED_PATHS.get(request.url)) return;
    await request.jwtVerify();
  } catch (err) {
    const { url: _url, hostname } = request;
    const GET_JWT_PATH = "/getJWT";
    //@ts-ignore
    if (err.message === "Authorization token expired") {
      const REDIRECT_URL = `http${hostname.includes("local") ? "" : "s"}://${
        hostname + GET_JWT_PATH
      }`;
      reply.redirect(REDIRECT_URL);
    }
    reply.send(err);
  }
}
