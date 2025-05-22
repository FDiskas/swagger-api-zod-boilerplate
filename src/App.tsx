import * as React from 'react'
import './App.css'
import { useActivities } from './hooks/useActivities'
import { useIsFetching } from '@tanstack/react-query'

function App() {
  const [count, setCount] = React.useState(0)
  const { data, refetch: getActivities } = useActivities()
  const isLoading = Boolean(useIsFetching())

  const handleClick = React.useCallback(() => {
    getActivities()
    setCount((count) => count + 1)
  }, [getActivities])

  return (
    <>
      <h1>Test case</h1>
      <h2>@tanstack/react-query</h2>
      <div className="card">
        <button onClick={handleClick} disabled={isLoading}>Click me to make API call</button>
      </div>
        Fetch Count: {count}
        <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}

export default App
