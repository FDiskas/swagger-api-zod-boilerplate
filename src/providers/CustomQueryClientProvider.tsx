import * as React from 'react'
import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { useSnackbar } from 'notistack'

const CustomQueryClientProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { enqueueSnackbar } = useSnackbar()
  // https://tkdodo.eu/blog/react-query-fa-qs#2-the-queryclient-is-not-stable
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        queryCache: new QueryCache({
          onError: (error) => {
            console.error('Query Error:', error)
            enqueueSnackbar('Query Error:', { variant: 'error' })
            throw error
          },
        }),
        mutationCache: new MutationCache({
          onError: (error) => {
            console.error('Mutation Error:', error)
            enqueueSnackbar('Mutation Error:', { variant: 'error' })
            throw error
          },
        }),
        defaultOptions: {
          queries: {
            staleTime: Infinity,
            refetchOnWindowFocus: false,
            retry: 2,
          },
        },
      }),
  )

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  )
}

export default CustomQueryClientProvider
