import { ReactNode } from 'react'
import clsx from 'clsx'

interface Item {
  id: string | number
}

type ListProps<T extends Item> = {
  items: T[]
  children: (item: T) => ReactNode
  className?: string
}

export function List<T extends Item>({
  items,
  children,
  className,
}: ListProps<T>) {
  // Render Props
  return (
    <ul className={clsx('flex overflow-auto', className)}>
      {items.map((item) => (
        <li key={item.id}>{children(item)}</li>
      ))}
    </ul>
  )
}
