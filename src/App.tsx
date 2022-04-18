import { IRoutes } from './Routes'
import Toast from './features/toast'

export default function App() {
  return (
    <>
      <IRoutes />
      <Toast title="Error Message" status="error" />
    </>
  )
}
