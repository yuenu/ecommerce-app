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
