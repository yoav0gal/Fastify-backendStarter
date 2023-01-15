import { FastifyPluginAsync } from "fastify";
import { ACCESS_TOKEN } from "EnvironmentVariables";

const JWTRoutes: FastifyPluginAsync = async (
  fastify,
  _options
): Promise<void> => {
  fastify.get("/", async (_request, reply) => {
    const accessToken = await reply.jwtSign(
      {
        name: "accessToken",
      },
      { expiresIn: "1m" }
    );

    reply
      .setCookie(ACCESS_TOKEN, accessToken, {
        path: "/",
        signed: true,
      })
      .code(200)
      .send({ access: "granted" });
  });

  fastify.get("/onlyWithJWT", async function (_request, _reply) {
    return "got Here!";
  });
};

export default JWTRoutes;
