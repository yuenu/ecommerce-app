import { Main } from '@/layouts'
import { Badge, Icon, List, Nav, Button } from '@/components'
import { topProducts } from '@/data/dummy-data'
import clsx from 'clsx'

const headerTab = [
  {
    id: 1,
    name: 'Overview',
  },
  {
    id: 2,
    name: 'Features',
  },
  {
    id: 3,
    name: 'Specification',
  },
]

export function ProductDetail() {
  return (
    <Main>
      <Nav
        className="px-4 py-4"
        left={<Icon.ArrowLeft className="w-5" />}
        right={<Icon.ShoppingCart className="w-5" />}
      />
      <header className="px-6 mb-4">
        <span className="inline-block mb-1 font-semibold text-primary">
          USD 350
        </span>
        <h2 className="text-2xl font-semibold">
          TMA-2 <span className="block"> HD WiRELESS</span>
        </h2>
        <List className="py-4 space-x-6" items={headerTab}>
          {(item) => (
            <Badge className="px-0 text-xs font-base">
              {item.name}
            </Badge>
          )}
        </List>
      </header>

      <section>
        <div className="flex gap-5 px-6 overflow-auto flex-nowrap">
          {topProducts.map((item) => {
            return (
              <div
                className={clsx(
                  'flex items-center justify-center',
                  'w-72 h-72 bg-gray-100 rounded-lg'
                )}>
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-28 h-28"
                />
              </div>
            )
          })}
        </div>
      </section>

      <div className="p-4">
        <Button>Add To Cart</Button>
      </div>
    </Main>
  )
}
