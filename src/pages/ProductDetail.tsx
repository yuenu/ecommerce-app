import { Main } from '@/layouts'
import { Icon, Nav } from '@/components'

export default function ProductDetail() {
  return (
    <Main>
      <Nav
        className="px-4 py-4"
        left={<Icon.ArrowLeft className="w-5" />}
        right={<Icon.ShoppingCart className="w-5" />}
      />
      <header className="px-6 mb-8">
        <span className="inline-block mb-1 font-semibold text-primary">
          USD 350
        </span>
        <h2 className="text-2xl font-semibold">
          TMA-2 <span className="block"> HD WiRELESS</span>
        </h2>
      </header>
    </Main>
  )
}
