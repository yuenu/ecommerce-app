import {
  Icon,
  Input,
  Nav,
  Panel,
  List,
  Badge,
  TopProduct,
  FeaturedProduct,
  Section,
  Avatar,
} from '@/components'
import clsx from 'clsx'
import { useState } from 'react'
import {
  topProducts,
  featuredProducts,
  categories,
} from '@/data/dummy-data'
import { Main } from '@/layouts'

export function Home() {
  const [category, setCategory] = useState('Headphone')

  return (
    <Main>
      <Nav
        className="px-4 py-4"
        left={<Icon.MenuVariant className="w-5" />}
        title={
          <>
            <Icon.Logo className="w-5" />
            <strong className="text-lg">Audio</strong>
          </>
        }
        right={<Avatar className="w-8" />}
        onLeftClickType="toggle-sidepanel"
        onRightClickType="profile"
      />
      <header className="px-6 mb-8">
        <p>Hi, Andrea</p>
        <h1 className="mt-2 text-2xl font-semibold">
          What are you looking for today?
        </h1>
        <Input
          type="search"
          name="search"
          placeholder="Search headphone"
          icon={<Icon.Search />}
          className="w-full py-3 mt-6 border border-gray-dark"
        />
      </header>

      <Panel className="flex-1 px-6 py-4">
        {/* TabsList */}
        <List items={categories} className="gap-4 py-4 flex-nowrap">
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

        {/* Product Card */}
        <List items={topProducts} className="gap-4 py-3 flex-nowrap">
          {(item) => <TopProduct className="w-[80vw]" {...item} />}
        </List>

        {/* Features Products */}
        <Section
          title="Featured Products"
          optional={
            <a href="#showAll" className="text-xs text-gray-darker">
              Show all
            </a>
          }>
          <List
            items={featuredProducts}
            className="gap-4 py-3 flex-nowrap">
            {(item) => (
              <FeaturedProduct className="w-[38vw]" {...item} />
            )}
          </List>
        </Section>
      </Panel>
    </Main>
  )
}
