import { z } from 'zod'

import { HttpResponse } from '@/gen/fake/http-client'

const successSchema = z
  .object({
    data: z.unknown().readonly(),
  })
  .readonly()

const errorSchema = z.array(z.any()).readonly()

export type ApiError = z.infer<typeof errorSchema>

export const defaultDataConverter = <T>(response: HttpResponse<T, Error>) => {
  if (response.ok) {
    return successSchema.parse(response).data as T
  } else {
    return errorSchema.parse(response.error)
  }
}
