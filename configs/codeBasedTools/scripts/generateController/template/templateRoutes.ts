import { FastifyPluginAsync } from "fastify";
import { tellWorldYoavIsTheBest } from "Scripts/generateController/template/templateServices";
import { yoavIsTheBestSchema } from "Scripts/generateController/template/templateSchemas";

const exmpleRoutes: FastifyPluginAsync = async (
  fastify,
  _options
): Promise<void> => {
  fastify.get("/", yoavIsTheBestSchema, tellWorldYoavIsTheBest);
};

export default exmpleRoutes;
