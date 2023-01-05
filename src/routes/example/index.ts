import { FastifyPluginAsync } from "fastify";

const example: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get(
    "/",
    {
      schema: {
        description: "This is an endpoint for application health check",
        tags: ["health"],
        response: {
          200: {
            description: "Success Response",
            type: "object",
            properties: {
              msg: { type: "string" },
            },
          },
        },
      },
    },
    async function (request, reply) {
      return "this is an example";
    }
  );
};

export default example;
