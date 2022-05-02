import { RootRoutes } from './Routes'
import { Toast } from '@/components'

export default function App() {
  return (
    <>
      <RootRoutes />
      <Toast title="Unexpect Error" status="error" />
    </>
  )
}
