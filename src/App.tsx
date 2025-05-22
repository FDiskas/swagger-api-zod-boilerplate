import * as React from 'react'
import './App.css'
import { useActivitiesList } from './hooks/useActivities'
import { useIsFetching } from '@tanstack/react-query'
import { useActivityDetail } from './hooks/useActivityDetail'
import { Form, Field } from 'simple-react-form'
import { InputComponent } from './components/InputComponent'

function App() {
  const [count, setCount] = React.useState(0)
  const [state, setState] = React.useState<{ id?: string }>({ id: '0'})
  const isLoading = Boolean(useIsFetching())

  const { data: activityList, refetch: getActivities } = useActivitiesList()
  const { data: activityDetails } = useActivityDetail(Number(state.id))

  const result = isLoading
    ? 'Loading...'
    : activityList ?? activityDetails ?? null

  const handleClick = React.useCallback(() => {
    getActivities()
    setCount((count) => count + 1)
  }, [getActivities])

  return (
    <>
      <h1>Test case</h1>
      <h2>@tanstack/react-query</h2>
      <div className="card">
        <div>
          <Form state={state} onSubmit={setState}>
            <Field type={InputComponent} fieldName='id' />
            <button type='submit' disabled={isLoading}>Search by ID</button>
        </Form>
        </div>
        <button onClick={handleClick} disabled={isLoading}>Fetch All</button>
      </div>
        Fetch Count: {count}
        <pre>{JSON.stringify(result, null, 2)}</pre>
    </>
  )
}

export default App
