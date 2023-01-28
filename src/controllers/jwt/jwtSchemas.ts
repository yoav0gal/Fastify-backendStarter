import { Type } from "@sinclair/typebox";
import { RouteShorthandOptions } from "fastify";

export const haveJWTCheckSchema = {
  schema: {
    description:
      "This is a scured path, user can get here only if he have a valid JWT token",
    tags: ["JWT"],
    response: {
      200: Type.String(),
    },
  },
} satisfies RouteShorthandOptions;

export const getJWTSchema = {
  schema: {
    description: "generates and sets a valid JWT token",
    tags: ["JWT"],
    response: {
      200: Type.String(),
    },
  },
} satisfies RouteShorthandOptions;
