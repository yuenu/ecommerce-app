import { Main } from '@/layouts'
import { Icon, Nav, List, Card } from '@/components'
import { shoppingCart } from '@/data/dummy-data'

export default function ShoppingCart() {
  return (
    <Main>
      <Nav
        className="px-4 py-4"
        left={<Icon.ArrowLeft className="w-5" />}
        right={<Icon.Trash2 className="w-5" />}
        title="Shopping Cart"
      />
      <section className="flex-1 px-6 mt-6">
        <List items={shoppingCart} className="flex flex-col gap-8">
          {(item) => (
            <Card className="flex gap-3">
              <div className="flex items-center justify-center w-20 h-20 bg-gray-100 rounded-lg">
                <img
                  src={item.image}
                  alt=""
                  className="object-cover w-14 h-14"
                />
              </div>
              <div className="flex flex-col flex-1">
                <p className="mb-1">{item.name}</p>
                <p className="text-xs font-bold">USD {item.price}</p>
                <div className="flex items-end mt-auto">
                  <div className="flex items-center gap-5">
                    <button className="inline-block p-1 px-2 text-2xl border border-gray-300 rounded-lg">
                      <Icon.Minus className="w-4" />
                    </button>
                    <span>{item.amount}</span>
                    <button className="inline-block p-1 px-2 border border-gray-300 rounded-lg">
                      <Icon.Plus className="w-4" />
                    </button>
                  </div>
                  <button className="ml-auto text-gray-500">
                    <Icon.Trash2 className="w-5" />
                  </button>
                </div>
              </div>
            </Card>
          )}
        </List>
      </section>
      <footer className="p-6">
        <div className="flex items-end justify-between py-6">
          <span className="text-xs font-medium text-gray-600">
            Total 2 Items
          </span>
          <span className="font-bold">USD 295</span>
        </div>
        <button className="flex items-center justify-between w-full px-10 py-3 text-white rounded-lg bg-primary">
          <span>Proceed to Checkout</span>
          <Icon.ArrowRight className="w-5" />
        </button>
      </footer>
    </Main>
  )
}
