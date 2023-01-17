import fastifyPlugin from "fastify-plugin";
import fastifyCookie from "@fastify/cookie";
import { SECRET_KEY } from "Configs/codeBasedTools/environmentVariables";

export default fastifyPlugin(async function (fastify, _options) {
  fastify.register(fastifyCookie, {
    secret: SECRET_KEY,
  });
});
