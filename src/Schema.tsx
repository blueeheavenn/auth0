import {any, number, string, z} from "zod";

export const FormSchemma = z.object({name: z.string().min(5).max(10), pwd: z.number().nonnegative(), hobbies: z.string().array()})

export type FormValues = z.infer < typeof FormSchemma >;
