import { FastifyPluginAsync } from "fastify";
import axios from "axios";

const root: FastifyPluginAsync = async (fastify, options): Promise<void> => {
  fastify.get("/", async function (request, reply) {
    const { data: theTopG } = await axios("https://www.tateapi.com/api/quote");
    return { theTopG };
  });
};

export default root;
