import { zodError } from '@/helpers/zodError'
import { z } from 'zod/v4'

const activitySchema = z.object({
  id: z.number().optional(),
  title: z.string().optional().nullable(),
  dueDate: z.iso.datetime().optional().default(''),
  completed: z.boolean().optional(),
})

export const activitiesConverter = <T>(response: T) => {
  return z.array(activitySchema).readonly().catch(zodError).parse(response)
}

export type ActivityResponse = z.infer<typeof activitySchema>
