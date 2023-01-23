import fastifyPlugin from "fastify-plugin";
import cors from "@fastify/cors";

export default fastifyPlugin(async function (fastify, _options) {
  fastify.register(cors);
});
