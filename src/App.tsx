import { RootRoutes } from './Routes'
import { Toast } from '@/components'

export default function App() {
  return (
    <>
      <h1 className="mobile-only">Only Mobile version</h1>
      <div className="app">
        <RootRoutes />
        <Toast />
      </div>
    </>
  )
}
