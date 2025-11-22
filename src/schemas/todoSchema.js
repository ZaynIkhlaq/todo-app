import { z } from "zod";

// creating the scheme using zod
export const todoSchema = z.object({
    id: z.number(), 
    title: z.string(),
    completed:z.boolean().default(false),
});

