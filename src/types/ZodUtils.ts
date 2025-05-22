import { input, ZodError, ZodTypeAny } from 'zod'

export type SchemaType<E> = {
  [k in keyof E]?: unknown
}

export type ZodCatchCtx<Schema extends ZodTypeAny> = {
  error: ZodError<input<Schema>>
  input: input<Schema>
}
