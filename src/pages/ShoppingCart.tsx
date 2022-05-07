import { useState } from 'react'
import { Main } from '@/layouts'
import { Icon, Nav, List, Button, CartProduct } from '@/components'
import { shoppingCart } from '@/data/dummy-data'

export function ShoppingCart() {
  const [cartData, setCartData] = useState(shoppingCart)

  const deleteItemFromCart = (itemId: number) => {
    setCartData((prev) => {
      return prev.filter((item) => item.id !== itemId)
    })
  }

  return (
    <Main>
      <Nav
        className="px-4 py-4"
        left={<Icon.ArrowLeft className="w-5" />}
        right={<Icon.Trash2 className="w-5" />}
        title="Shopping Cart"
      />
      <section className="flex-1 px-6 mt-6">
        <List items={cartData} className="flex flex-col gap-8">
          {(item) => (
            <CartProduct {...item} deleteItem={deleteItemFromCart} />
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
        <Button className="flex items-center justify-between px-8">
          <span>Proceed to Checkout</span>
          <Icon.ArrowRight className="w-5" />
        </Button>
      </footer>
    </Main>
  )
}
