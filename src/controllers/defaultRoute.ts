import { FastifyPluginAsync } from "fastify";

const root: FastifyPluginAsync = async (fastify, options): Promise<void> => {
  fastify.get("/", async function (request, reply) {
    return "hereWeGO";
  });
};

export default root;
