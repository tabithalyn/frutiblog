import { z } from "zod";

export const postSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be more than 2 characters."
  }),
  content: z.string().min(50, {
    message: "Description must be at least 50 characters."
  }),
  id: z.string().optional()
});

export type PostValues = z.infer<typeof postSchema>;