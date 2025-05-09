import { z} from "zod";

export const FormSchemma = z.object({ name: z.string().min(5).max(10), pwd: z.string().min(5), hobbies: z.string().nonempty()})

export type FormValues = z.infer < typeof FormSchemma >;
