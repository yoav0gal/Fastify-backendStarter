import { Type, Static } from "@sinclair/typebox";

const alphaMember = Type.Object({
  id: Type.String(),
  firstName: Type.String(),
  lastName: Type.String(),
});

export type AlphaMember = Static<typeof alphaMember>;

export const getAllMembersSchema = {
  schema: {
    response: {
      200: Type.Array(alphaMember),
    },
  },
};

export const getByIdSchema = {
  schema: {
    response: {
      200: alphaMember,
    },
  },
};
