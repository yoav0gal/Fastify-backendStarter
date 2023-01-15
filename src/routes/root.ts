import { FastifyPluginAsync } from "fastify";

const root: FastifyPluginAsync = async (fastify, options): Promise<void> => {
  fastify.get("/", async function (request, reply) {
    //@ts-ignore
    return "hey";
  });
};

export default root;
