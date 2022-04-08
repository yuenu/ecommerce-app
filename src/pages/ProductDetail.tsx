import { Main } from '@/layouts'
import {
  Badge,
  Icon,
  List,
  Nav,
  Button,
  Section,
  FeaturedProduct,
  Panel,
  Card,
  Review,
} from '@/components'
import {
  featuredProducts,
  topProducts,
  reviewHeaderTab,
  reivews,
} from '@/data/dummy-data'
import clsx from 'clsx'
import { useState } from 'react'

export function ProductDetail() {
  const [tab, setTab] = useState('overview')
  return (
    <Main>
      <Nav
        className="px-4 py-4"
        left={<Icon.ArrowLeft className="w-5" />}
        right={<Icon.ShoppingCart className="w-5" />}
      />
      <header className="px-6 mb-4">
        <span className="inline-block mb-2 font-semibold text-primary">
          USD 350
        </span>
        <h2 className="mb-1 text-2xl font-semibold">
          TMA-2 <span className="block"> HD WiRELESS</span>
        </h2>
        <List className="py-4 space-x-6" items={reviewHeaderTab}>
          {(item) => (
            <Badge
              onClick={() => setTab(item.id)}
              className={clsx(
                'px-0 font-base relative',
                item.id === tab
                  ? 'before:content-[""] before:bg-primary/80 before:w-2/5 before:h-[0.2rem] before:absolute before:-bottom-2 before:left-1/2 before:-translate-x-1/2'
                  : ''
              )}
            >
              {item.name}
            </Badge>
          )}
        </List>
      </header>

      <section>
        <div className="flex gap-5 px-6 flex-nowrap">
          <List
            items={topProducts}
            className="gap-4 py-3 flex-nowrap"
          >
            {(item) => (
              <Card className={clsx('w-[80vw] flex p-6 bg-gray-200')}>
                <img
                  src={item.img}
                  alt=""
                  className="w-full h-full"
                />
              </Card>
            )}
          </List>
        </div>
        <div className="p-6">
          <p className="mb-3">Reviews(102)</p>
          <div>
            <List items={reivews} className="flex flex-col gap-3">
              {(item) => <Review {...item} />}
            </List>
            <button className="w-full px-2 py-6 text-xs text-center text-gray-darker">
              Sell All Reviews
            </button>
          </div>
        </div>

        <Panel className="mb-4 rounded-t-none">
          <Section
            className="p-6"
            title="Featured Products"
            optional={
              <a href="#showAll" className="text-xs text-gray-darker">
                Show all
              </a>
            }
          >
            <List
              items={featuredProducts}
              className="gap-4 py-3 flex-nowrap"
            >
              {(item) => (
                <FeaturedProduct className="w-[38vw]" {...item} />
              )}
            </List>
          </Section>
        </Panel>
      </section>

      <div className="p-4">
        <Button>Add To Cart</Button>
      </div>
    </Main>
  )
}
