import { RootRoutes } from './Routes'
import { Toast } from '@/components'

export default function App() {
  return (
    <>
      <RootRoutes />
      <Toast title="Error Message" status="error" />
    </>
  )
}
