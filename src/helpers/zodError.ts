import { ZodCatchCtx } from '@/types/ZodUtils'
import { ZodError, ZodInvalidTypeIssue, ZodTypeAny, input, z } from 'zod/v4'
import { $ZodCatchCtx } from 'zod/v4/core'

const extractNameFromStack = (stackTrace?: string): string => {
  if (!stackTrace) {
    return 'UnknownSource'
  }
  const regex = /\b([A-Za-z_][A-Za-z0-9_]*(?:Schema|Converter))\b/g
  const matches = stackTrace.match(regex)

  if (matches && matches.length > 0) {
    return matches[0]
  }

  return 'UnknownSchemaOrConverter'
}

export const zodError = <Schema extends $ZodCatchCtx>(ctx: ZodError<Schema>): Schema => {
  // return z.prettifyError(ctx.error);
  // const errors = ctx.error.issues.map((err) => {
  //   const path = err.path.length > 0 ? err.path.join('/') : 'N/A'

  //   const expected = 'expected' in err ? ` Expected: ${String((err as ZodInvalidTypeIssue).expected)}` : ''
  //   const received = 'received' in err ? ` Received: ${String((err as ZodInvalidTypeIssue).received)}` : ''

  //   return `Path: ${path} Message: ${err.message} [${err.code}]${expected}${received}`
  // })
console.dir(ctx)
  const sourceName = extractNameFromStack(ctx.error.stack)
  // const errorMessage = `Error: Invalid API response for ${sourceName}:\n${errors.join('\n')}`

  console.groupCollapsed(`[ZodValidationError] Invalid API response for ${sourceName}`)
  console.info(z.prettifyError(ctx.error))
  console.groupEnd()

  return ctx.input
}
