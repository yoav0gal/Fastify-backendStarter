import { FastifyPluginAsync } from "fastify";
import { generateJWT, haveJWTCheck } from "./jwtServices";
import { haveJWTCheckSchema } from "./jwtSchemas";

const exmpleRoutes: FastifyPluginAsync = async (
  fastify,
  _options
): Promise<void> => {
  fastify.get("/", generateJWT);

  fastify.get("/onlywith", haveJWTCheckSchema, haveJWTCheck);
};

export default exmpleRoutes;
