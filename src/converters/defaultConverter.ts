import { z } from 'zod'

import { HttpResponse } from '@/gen/fake/http-client'
import { zodError } from '@/helpers/zodError'

const successSchema = z
  .object({
    data: z.unknown().readonly(),
  })
  .catch(zodError)
  .readonly()

const errorSchema = z.array(z.any()).readonly()

export type ApiError = z.infer<typeof errorSchema>

export const defaultDataConverter = <T>(response: HttpResponse<T, any>) => {
  if (response.ok) {
    return successSchema.parse(response).data as T
  } else {
    return errorSchema.parse(response.error)
  }
}
