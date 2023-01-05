import { FastifyRequest, FastifyReply } from "fastify";
import UNSECURED_PATHS from "../../../static/unsecuredPaths";

/** This function verfiys that the request have a valid JWT assigned */
export async function verfiyJWT(request: FastifyRequest, reply: FastifyReply) {
  try {
    // console.log(UNSECURED_PATHS_PROXY.get(request.url));
    if (UNSECURED_PATHS.get(request.url)) return;

    /** Checks cookie refresh and token */
    await Promise.all([
      request.jwtVerify(),
      request.jwtVerify({ onlyCookie: true }),
    ]);
  } catch (err) {
    reply.send(err);
  }
}
