import { Type, Static } from "@sinclair/typebox";
import { RouteShorthandOptions } from "fastify";

const alphaMember = Type.Object({
  id: Type.String(),
  firstName: Type.String(),
  lastName: Type.String(),
});

export type AlphaMember = Static<typeof alphaMember>;

export const getAllMembersSchema = {
  schema: {
    description: "Get all the alphaMembers",
    tags: ["Alpha"],
    response: {
      200: Type.Array(alphaMember),
    },
  },
} satisfies RouteShorthandOptions;

export const getByIdSchema = {
  schema: {
    description: "Get a single alpha member based on his id",
    tags: ["Alpha"],
    params: {
      id: Type.String({ default: "1" }),
    },
    response: {
      200: alphaMember,
    },
  },
} satisfies RouteShorthandOptions;
