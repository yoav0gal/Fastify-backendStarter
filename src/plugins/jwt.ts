import fastifyPlugin from "fastify-plugin";
import fastifyJwt from "@fastify/jwt";
import {
  SECRET_KEY,
  ACCESS_TOKEN,
  ACCESS_TOKEN_EXPIRE,
} from "EnvironmentVariables";
import { verfiyJWT } from "Lib/other/jwtLogic";

export default fastifyPlugin(async function (fastify, _options) {
  fastify.register(fastifyJwt, {
    secret: SECRET_KEY,
    cookie: {
      cookieName: ACCESS_TOKEN,
      signed: true,
    },
    sign: {
      expiresIn: ACCESS_TOKEN_EXPIRE,
    },
  });

  fastify.addHook("onRequest", verfiyJWT);
  // fastify.addHook("onError")
});
