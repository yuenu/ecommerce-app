import { ReactNode } from 'react'
import clsx from 'clsx'

interface Item {
  id: string
}

type ListProps<T extends Item> = {
  items: T[]
  children: (item: T) => ReactNode
  classNmae?: string
}

export function List<T extends Item>({
  items,
  children,
  classNmae,
}: ListProps<T>) {
  // Render Props
  return (
    <ul className={clsx('flex flex-nowrap overflow-auto', classNmae)}>
      {items.map((item) => (
        <li key={item.id}>{children(item)}</li>
      ))}
    </ul>
  )
}
