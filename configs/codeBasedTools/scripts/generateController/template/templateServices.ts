import { FastifyRequest, FastifyReply } from "fastify";

/** This is an exmple for a basic route handler */
export async function tellWorldYoavIsTheBest(
  _reqest: FastifyRequest,
  reply: FastifyReply
) {
  reply.send("Yoav is the best!");
}
