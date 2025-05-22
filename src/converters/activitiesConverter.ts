import { activitySchema } from '@/gen/fake/Schemas'
import { zodError } from '@/helpers/zodError'
import { z } from 'zod'

export const activitiesConverter = <T>(response: T) => {
  return z.array(activitySchema).readonly().catch(zodError).parse(response)
}

export type ActivitiesResponse = z.infer<typeof activitySchema>[]
