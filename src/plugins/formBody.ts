import fastifyPlugin from "fastify-plugin";
import formBody from "@fastify/formbody";

export default fastifyPlugin(async function (fastify, _options) {
  fastify.register(formBody);
});
