import { FastifyPluginAsync } from "fastify";
import { generateJWT, haveJWTCheck } from "./jwtServices";

const exmpleRoutes: FastifyPluginAsync = async (
  fastify,
  _options
): Promise<void> => {
  fastify.get("/", generateJWT);

  fastify.get("/onlywith", haveJWTCheck);
};

export default exmpleRoutes;
