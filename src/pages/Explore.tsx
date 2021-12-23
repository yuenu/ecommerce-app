import { Main } from '@/layouts'
import {
  Nav,
  Icon,
  Panel,
  List,
  Badge,
  Section,
  AllProducts,
} from '@/components'
import clsx from 'clsx'
import { headerTab, popularProduct } from '@/data/dummy-data'

export function Explore() {
  return (
    <Main>
      <Nav
        className="px-4 py-4"
        left={<Icon.ArrowLeft className="w-5" />}
        right={<Icon.ShoppingCart className="w-5" />}
      />
      <header className="px-6 mb-8">
        <p className="mb-2">Headphone</p>
        <h2 className="text-2xl font-bold ">TMA Wireless</h2>

        <div className="flex items-center">
          <button
            className={clsx(
              'py-2 px-3 border border-gray-300 rounded-lg',
              'flex items-center gap-2'
            )}>
            <Icon.Sliders className="w-5" />
            <span className="text-xs font-medium">Filter</span>
          </button>
          {/* TabsList */}
          <List
            items={headerTab}
            className="gap-4 py-4 ml-4 flex-nowrap">
            {(item) => (
              <Badge className="whitespace-nowrap">{item.name}</Badge>
            )}
          </List>
        </div>
      </header>

      <Panel className="flex-1 px-6">
        <Section className="pt-2 pb-8">
          <List
            items={popularProduct}
            className="grid grid-cols-2 gap-4">
            {(item) => (
              <AllProducts className="rounded-2xl " {...item} />
            )}
          </List>
        </Section>
      </Panel>
    </Main>
  )
}
