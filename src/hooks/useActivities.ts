import { FakeApiClient } from '@/clients/fakeApiClient'
import { activitiesConverter } from '@/converters/activitiesConverter'
import { defaultDataConverter } from '@/converters/defaultConverter'
import { getQueryCacheKey } from '@/helpers/getQueryCacheKey'
import { useQuery } from '@tanstack/react-query'

export const useActivitiesList = () => {
  return useQuery({
    queryKey: getQueryCacheKey(FakeApiClient.v1ActivitiesList),
    queryFn: FakeApiClient.v1ActivitiesList,
    select: (response) => activitiesConverter(defaultDataConverter(response)),
    enabled: false,
  })
}
