import { FastifyPluginAsync } from "fastify";
// import { getAllMembers, getById } from "AlphaController/alphaServices";
import {
  getAllMembers,
  getById,
} from "../../lib/controllers/alpha/alphaServices";

const AlphaRoutes: FastifyPluginAsync = async (
  fastify,
  _options
): Promise<void> => {
  fastify.get("/", getAllMembers);
  fastify.get("/:id", getById);
};

export default AlphaRoutes;