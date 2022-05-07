import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const IMAGE = {
  prod1: require('@/assets/images/product1.png'),
  prod2: require('@/assets/images/product2.png'),
  prod3: require('@/assets/images/product3.png'),
}

type Product = {
  id: number
  image: any
  amount: number
  price: number
  name: string
}

type IState = {
  products: Product[]
  totalPrice: number
}

function getTotalPrice(products: Product[]) {
  let total = 0
  products.forEach((product) => {
    total += product.amount * product.price
  })
  return total
}

const initialState: IState = {
  products: [
    {
      id: 1,
      image: IMAGE.prod1,
      amount: 1,
      price: 270,
      name: 'TMA-2 Comfort Wireless',
    },
    {
      id: 2,
      image: IMAGE.prod3,
      amount: 1,
      price: 25,
      name: 'C02 - Cable',
    },
  ],
  totalPrice: 295,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    updateProduct(
      state,
      action: PayloadAction<{ id: number; amount: number }>
    ) {
      if (action.payload.amount === 0) {
        const updatedProducts = state.products.filter(
          (product) => product.id !== action.payload.id
        )
        return {
          ...state,
          products: updatedProducts,
          totalPrice: getTotalPrice(updatedProducts),
        }
      }

      const newProducts = state.products.map((product) => {
        if (product.id === action.payload.id)
          return {
            ...product,
            amount: action.payload.amount,
          }

        return product
      })

      return {
        ...state,
        products: newProducts,
        totalPrice: getTotalPrice(newProducts),
      }
    },
    removeProduct(state, action: PayloadAction<{ id: number }>) {
      const updatedProducts = state.products.filter(
        (product) => product.id !== action.payload.id
      )
      return {
        ...state,
        products: updatedProducts,
        totalPrice: getTotalPrice(updatedProducts),
      }
    },
    resetCart(state) {
      return { ...state, products: [], totalPrice: 0 }
    },
  },
})

export const { updateProduct, removeProduct, resetCart } =
  cartSlice.actions
export default cartSlice.reducer
