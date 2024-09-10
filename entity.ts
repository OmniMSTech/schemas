import { z } from "zod";

const Entity = z.object({
    dateCreated: z.date(),
    dateModified: z.date(),
});