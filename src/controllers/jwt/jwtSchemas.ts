import { Type } from "@sinclair/typebox";

export const haveJWTCheckSchema = {
  schema: {
    response: {
      200: Type.String(),
    },
  },
};
