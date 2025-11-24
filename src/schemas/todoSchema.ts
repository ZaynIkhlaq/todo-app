import { z } from "zod";

// Creating the schema using zod
export const todoSchema = z.object({
    id: z.number(), 
    title: z.string().min(1, "Title is required"),
    completed: z.boolean().default(false),
});

// This creates a TypeScript type from the Zod schema!
// Now TypeScript knows what a Todo looks like
// z.infer<typeof todoSchema> means "infer the TypeScript type from this Zod schema"
export type Todo = z.infer<typeof todoSchema>;

