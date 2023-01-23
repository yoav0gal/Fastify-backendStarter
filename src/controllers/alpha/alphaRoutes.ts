import { FastifyPluginAsync } from "fastify";
import { getAllMembers, getById } from "./alphaServices";
import { getAllMembersSchema, getByIdSchema } from "./alphaSchemas";

const AlphaRoutes: FastifyPluginAsync = async (
  fastify,
  _options
): Promise<void> => {
  fastify.get("/", getAllMembersSchema, getAllMembers);
  fastify.get("/:id", getByIdSchema, getById);
};

export default AlphaRoutes;
