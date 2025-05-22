import { activitySchema } from '@/gen/fake/Schemas'
import { zodError } from '@/helpers/zodError'
import { z } from 'zod'

export const activityDetailsConverter = <T>(response: T) => {
  return activitySchema.readonly().catch(zodError).parse(response)
}

export type ActivityResponse = z.infer<typeof activitySchema>
