import { z } from "zod";

export const userDataSchema = z.object({
  id: z.number(),
  name: z.string(),
  city: z.string(),
});

export type UserData = z.infer<typeof userDataSchema>;
