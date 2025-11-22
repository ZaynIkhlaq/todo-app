import { z } from "zod";

// creating the scheme using zod
export const todoSchema = z.object({
    id: z.number(), 
    title: z.string().min(1, "Title is required"),
    completed:z.boolean().default(false),
});

