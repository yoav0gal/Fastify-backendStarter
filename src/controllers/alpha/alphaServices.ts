import alphaMembers from "AlphaData";
import { FastifyRequest, FastifyReply } from "fastify";

/** Return an Alpha member based on his id */
export async function getById(reqest: FastifyRequest, reply: FastifyReply) {
  // @ts-ignore
  const id: sting = reqest.params?.id;
  const member = alphaMembers.find((member) => member.id === id);
  reply.send(member);
}

/** Returns all Alpha members */
export async function getAllMembers(
  _reqest: FastifyRequest,
  reply: FastifyReply
) {
  reply.send(alphaMembers);
}
