import { FastifyPluginAsync } from "fastify";
import { generateJWT, haveJWTCheck } from "./jwtServices";
import { haveJWTCheckSchema, getJWTSchema } from "./jwtSchemas";

const exmpleRoutes: FastifyPluginAsync = async (
  fastify,
  _options
): Promise<void> => {
  fastify.get("/", getJWTSchema, generateJWT);

  fastify.get("/onlywith", haveJWTCheckSchema, haveJWTCheck);
};

export default exmpleRoutes;
