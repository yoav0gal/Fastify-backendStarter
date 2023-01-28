import { FastifyPluginAsync } from "fastify";
import fastifyPlugin from "fastify-plugin";
import swagger from "@fastify/swagger";
import swaggerUI from "@fastify/swagger-ui";
import { APPLICATION_NAME } from "EnvironmentVariables";

/** Not working  */
const swaggerPlugin: FastifyPluginAsync = async (
  fastify,
  options
): Promise<void> => {
  fastify.register(swagger, {
    swagger: {
      info: {
        title: APPLICATION_NAME,
        description: "Alpha-Beackend-Template created by Yoav Gal",
        version: "1.0.0",
      },
      externalDocs: {
        url: "https://swagger.io",
        description: "About swagger",
      },
      host: "localhost:3447",
      schemes: ["http"],
      consumes: ["application/json"],
      produces: ["application/json"],
      tags: [
        { name: "JWT", description: "JWT related end-points" },
        { name: "Alpha", description: "Alpha related end-points" },
      ],
    },
  });

  fastify.register(swaggerUI, {
    routePrefix: "/docs",
    uiConfig: {
      docExpansion: "none",
      deepLinking: true,
    },
    staticCSP: true,
    transformStaticCSP: (header) => header,
    transformSpecification: (swaggerObject, request, reply) => {
      return swaggerObject;
    },
    transformSpecificationClone: true,
  });
};

export default fastifyPlugin(swaggerPlugin);
