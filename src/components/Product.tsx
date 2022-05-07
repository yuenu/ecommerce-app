import { Card, Icon } from '@/components'
import clsx from 'clsx'

type TopProductProps = {
  name: string
  img: string
  className?: string
}

export function TopProduct({
  name,
  img,
  className,
}: TopProductProps) {
  return (
    <Card className={clsx('w-[80vw] flex p-6', className)}>
      <div className="flex flex-col flex-1">
        <h2 className="text-xl font-bold">{name}</h2>
        <a
          href="#shop"
          className="inline-flex items-center gap-2 mt-auto font-medium text-primary">
          <span>Shop now</span>
          <Icon.ArrowRight />
        </a>
      </div>
      <div className="flex-1">
        <img src={img} alt="product" />
      </div>
    </Card>
  )
}

type FeaturedProductProps = {
  name: string
  img: string
  price: string
  className?: string
}

export function FeaturedProduct({
  name,
  img,
  price,
  className,
}: FeaturedProductProps) {
  return (
    <Card
      className={clsx('flex p-3 flex-col gap-8 h-full', className)}>
      <div className="flex-1 px-3">
        <img src={img} alt="product" />
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-xs font-normal">{name}</p>
        <strong className="text-xs">{price}</strong>
      </div>
    </Card>
  )
}

type AllProductsProps = {
  name: string
  image: any
  price: string
  rate: number
  reviews: number
  className?: string
}

export function AllProducts({
  name,
  image,
  price,
  rate,
  reviews,
  className,
}: AllProductsProps) {
  return (
    <Card className={clsx('flex p-3 flex-col gap-8', className)}>
      <div className="flex-1 w-32 h-32 px-3 mx-auto">
        <img
          src={image}
          alt="product"
          className="object-cover w-32 h-32"
        />
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-xs font-normal">{name}</p>
        <strong className="mb-2 text-xs">{price}</strong>

        <footer className="flex items-center mb-2 text-xs">
          <div className="flex items-center gap-1">
            <span className="text-yellow-400">
              <Icon.Star className="w-4 h-4" />
            </span>
            {rate}
          </div>
          <p className="ml-4">{reviews} Reviews</p>
          <button className="ml-auto">
            <Icon.MoreVertical className="w-5 h-5" />
          </button>
        </footer>
      </div>
    </Card>
  )
}

type PopularProductProps = {
  image: string
  name: string
  price: string
  rate: number
  reviews: number
  className?: string
}

export function PopularProduct({
  image,
  name,
  price,
  rate,
  reviews,
  className,
}: PopularProductProps) {
  return (
    <div className={clsx('flex gap-4 mb-5', className)}>
      <div className="flex items-center justify-center w-20 h-20 bg-gray-100 rounded-xl">
        <img className="w-14" src={image} alt="" />
      </div>
      <div className="flex flex-col flex-1">
        <h4>{name}</h4>
        <h5 className="font-bold">{price}</h5>
        <footer className="flex items-center flex-1">
          <div className="flex items-center gap-1">
            <span className="text-yellow-400">
              <Icon.Star className="w-4 h-4" />
            </span>
            {rate}
          </div>
          <p className="ml-4">{reviews} Reviews</p>
          <button className="ml-auto">
            <Icon.MoreVertical className="w-5 h-5" />
          </button>
        </footer>
      </div>
    </div>
  )
}

type CartProductProps = {
  id: number
  image: string
  name: string
  price: number
  amount: number
  className?: string
  deleteItem: (itemId: number) => void
  changleAmount: (id: number, amount: number) => void
}

export function CartProduct({
  id,
  image,
  name,
  price,
  amount,
  className,
  deleteItem,
  changleAmount,
}: CartProductProps) {
  return (
    <Card className={clsx('flex gap-3', className)}>
      <div className="flex items-center justify-center w-20 h-20 bg-gray-100 rounded-lg">
        <img src={image} alt="" className="object-cover w-14 h-14" />
      </div>
      <div className="flex flex-col flex-1">
        <p className="mb-1">{name}</p>
        <p className="text-xs font-bold">USD {price}</p>
        <div className="flex items-end mt-auto">
          <div className="flex items-center gap-5">
            <button
              className="inline-block p-1 px-2 text-2xl border border-gray-300 rounded-lg"
              onClick={() => changleAmount(id, amount - 1)}>
              <Icon.Minus className="w-4" />
            </button>
            <span>{amount}</span>
            <button
              className="inline-block p-1 px-2 border border-gray-300 rounded-lg"
              onClick={() => changleAmount(id, amount + 1)}>
              <Icon.Plus className="w-4" />
            </button>
          </div>
          <button
            className="ml-auto text-gray-500"
            onClick={() => deleteItem(id)}>
            <Icon.Trash2 className="w-5" />
          </button>
        </div>
      </div>
    </Card>
  )
}
