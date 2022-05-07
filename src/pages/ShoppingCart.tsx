import { Main } from '@/layouts'
import { Icon, Nav, List, Button, CartProduct } from '@/components'
import { useAppSelector, useAppDispatch } from '@/slice'
import { removeProduct, updateProduct } from '@/slice/cart'

export function ShoppingCart() {
  const dispatch = useAppDispatch()
  const { products, totalPrice } = useAppSelector(
    (state) => state.cart
  )

  const deleteItemFromCart = (id: number) => {
    dispatch(removeProduct({ id }))
  }

  const changleAmount = (id: number, amount: number) => {
    dispatch(updateProduct({ id, amount }))
  }

  return (
    <Main>
      <Nav
        className="px-4 py-4"
        left={<Icon.ArrowLeft className="w-5" />}
        right={<Icon.Trash2 className="w-5" />}
        title="Shopping Cart"
        onLeftClickType="back"
        onRightClickType="reset-cart"
      />
      <section className="flex-1 px-6 mt-6">
        <List items={products} className="flex flex-col gap-8">
          {(item) => (
            <CartProduct
              {...item}
              deleteItem={deleteItemFromCart}
              changleAmount={changleAmount}
            />
          )}
        </List>
      </section>
      <footer className="p-6">
        <div className="flex items-end justify-between py-6">
          <span className="text-xs font-medium text-gray-600">
            Total {products.length} Items
          </span>
          <span className="font-bold">USD {totalPrice}</span>
        </div>
        <Button className="flex items-center justify-between px-8">
          <span>Proceed to Checkout</span>
          <Icon.ArrowRight className="w-5" />
        </Button>
      </footer>
    </Main>
  )
}
