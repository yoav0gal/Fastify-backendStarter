import { FastifyPluginAsync } from "fastify";
import { tellWorldYoavIsTheBest } from "Scripts/generateController/template/templateServices";

const exmpleRoutes: FastifyPluginAsync = async (
  fastify,
  _options
): Promise<void> => {
  fastify.get("/", tellWorldYoavIsTheBest);
};

export default exmpleRoutes;
