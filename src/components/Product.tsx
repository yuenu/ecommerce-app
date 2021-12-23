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
    <Card className={clsx('flex p-3 flex-col gap-8', className)}>
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
