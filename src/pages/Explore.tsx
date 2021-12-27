import { Main } from '@/layouts'
import {
  Nav,
  Icon,
  Panel,
  List,
  Badge,
  Section,
  AllProducts,
  Button,
  Input,
} from '@/components'
import clsx from 'clsx'
import {
  categories,
  headerTab,
  popularProduct,
} from '@/data/dummy-data'
import { ReactNode, useState } from 'react'

const sortByData = [
  {
    id: 1,
    name: 'Popularity',
  },
  {
    id: 2,
    name: 'Newest',
  },
  {
    id: 3,
    name: 'Oldest',
  },
  {
    id: 4,
    name: 'High Price',
  },
  {
    id: 5,
    name: 'Low Price',
  },
  {
    id: 6,
    name: 'Review',
  },
]

type ColumnSectionProps = {
  className?: string
  children: ReactNode
  title: string
}
function ColumnSection({
  className,
  children,
  title,
}: ColumnSectionProps) {
  return (
    <section className={clsx(className)}>
      <h2 className="text-base">{title}</h2>
      <div>{children}</div>
    </section>
  )
}

type FilterPanelProps = {
  onClose?: React.MouseEventHandler<HTMLButtonElement>
}

function FilterPanel({ onClose }: FilterPanelProps) {
  const [category, setCategory] = useState('Headphone')

  return (
    <Panel className="flex-1 px-6" style={{ background: '#fff' }}>
      <header className="flex items-center justify-between py-6">
        <h3 className="text-2xl font-bold">Filter</h3>
        <button className="px-2 py-2" onClick={onClose}>
          <Icon.X />
        </button>
      </header>

      <ColumnSection title="Category" className="mb-3">
        <List
          items={categories}
          className="gap-4 pt-3 pb-5 flex-nowrap">
          {(item) => (
            <Badge
              onClick={() => setCategory(item.name)}
              className={clsx(
                'rounded-xl',
                item.id === category
                  ? 'text-white bg-primary'
                  : 'text-gray-darker'
              )}>
              {item.name}
            </Badge>
          )}
        </List>
      </ColumnSection>

      <ColumnSection title="Sort By" className="mb-3">
        <List items={sortByData} className="flex-wrap gap-3 py-3">
          {(item) => (
            <button className="px-4 py-3 border border-gray-300 rounded-lg">
              <span className="whitespace-nowrap">{item.name}</span>
            </button>
          )}
        </List>
      </ColumnSection>

      <ColumnSection title="Price Range">
        <div className="flex items-center gap-5 py-3">
          <Input
            className="border rounded-xl"
            name="min-price"
            placeholder="Min Price"
            type="number"
          />
          <Input
            className="border rounded-xl"
            name="max-price"
            placeholder="Max Price"
            type="number"
          />
        </div>
      </ColumnSection>

      <Button className="my-5">Apply Filter</Button>
    </Panel>
  )
}

export function Explore() {
  const [filterModal, setFilterModal] = useState(false)

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
            onClick={() => setFilterModal(true)}
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
      {filterModal ? (
        <FilterPanel onClose={() => setFilterModal(false)} />
      ) : (
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
      )}
    </Main>
  )
}
