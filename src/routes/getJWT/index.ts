import { FastifyPluginAsync } from "fastify";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../../static/cookiesNames";

const JWTRoutes: FastifyPluginAsync = async (
  fastify,
  _options
): Promise<void> => {
  fastify.get("/", async (_request, reply) => {
    const accessToken = await reply.jwtSign(
      {
        name: "Lior",
      },
      { expiresIn: "10m" }
    );

    const refreshToken = await reply.jwtSign(
      {
        name: "Savion",
      },
      { expiresIn: "4h" }
    );

    reply
      .setCookie(REFRESH_TOKEN, refreshToken, {
        path: "/",
      })
      .setCookie(ACCESS_TOKEN, accessToken, {
        path: "/",
      })
      .code(200)
      .send({ access: "granted" });
  });

  fastify.get("/onlyWithJWT", async function (request, _reply) {
    //@ts-ignore
    return request.user;
  });
};

export default JWTRoutes;
