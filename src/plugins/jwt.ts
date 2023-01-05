import fastifyPlugin from "fastify-plugin";
import fastifyJwt from "@fastify/jwt";
import fastifyCookie from "@fastify/cookie";

import { SECRET_KEY } from "../../configs/configuration";
import { REFRESH_TOKEN } from "../../static/cookiesNames";
import { verfiyJWT } from "../lib/other/jwtLogic";

export default fastifyPlugin(async function (fastify, _options) {
  fastify.register(fastifyCookie);
  fastify.register(fastifyJwt, {
    secret: SECRET_KEY,
    cookie: {
      cookieName: REFRESH_TOKEN,
      signed: true,
    },
    sign: {
      expiresIn: "10m",
    },
  });

  fastify.addHook("onRequest", verfiyJWT);
});
