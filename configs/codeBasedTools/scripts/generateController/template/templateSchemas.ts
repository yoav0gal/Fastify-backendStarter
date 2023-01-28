import { Type } from "@sinclair/typebox";
import { RouteShorthandOptions } from "fastify";

export const yoavIsTheBestSchema = {
  schema: {
    response: {
      200: Type.String(),
    },
  },
} satisfies RouteShorthandOptions;
