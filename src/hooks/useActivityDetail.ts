import { FakeApiClient } from '@/clients/fakeApiClient'
import { activityDetailsConverter } from '@/converters/activityDetailsConverter'
import { defaultDataConverter } from '@/converters/defaultConverter'
import { getQueryCacheKey } from '@/helpers/getQueryCacheKey'
import { useQuery } from '@tanstack/react-query'

export const useActivityDetail = (id = 0) => {
  return useQuery({
    queryKey: getQueryCacheKey(FakeApiClient.v1ActivitiesDetail, { id }),
    queryFn: () => FakeApiClient.v1ActivitiesDetail(id),
    select: (response) => activityDetailsConverter(defaultDataConverter(response)),
    enabled: id != 0,
  })
}
