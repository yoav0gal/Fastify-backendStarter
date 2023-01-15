import fastifyPlugin from "fastify-plugin";
import fastifyJwt from "@fastify/jwt";
import { SECRET_KEY, ACCESS_TOKEN } from "EnvironmentVariables";
import { verfiyJWT } from "Lib/other/jwtLogic";

export default fastifyPlugin(async function (fastify, _options) {
  fastify.register(fastifyJwt, {
    secret: SECRET_KEY,
    cookie: {
      cookieName: ACCESS_TOKEN,
      signed: true,
    },
    sign: {
      expiresIn: "1m",
    },
  });

  fastify.addHook("onRequest", verfiyJWT);
});
