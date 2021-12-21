import { Icon, Avatar } from '@/components'
import clsx from 'clsx'

type NavPrpos = {
  className?: string
}

export function Nav({ className }: NavPrpos) {
  return (
    <nav
      className={clsx(
        'flex justify-between items-center',
        className
      )}>
      <button className="p-2">
        <Icon.MenuVariant className="w-5" />
      </button>

      <span className="inline-flex gap-2">
        <Icon.Logo className="w-5" />
        <strong className="text-lg">Audio</strong>
      </span>

      <Avatar className="w-8" />
    </nav>
  )
}

type SubNavProps = {
  className?: string
}

export function SubNav({ className }: SubNavProps) {
  return (
    <nav
      className={clsx(
        'flex justify-between items-center',
        className
      )}>
      <button className="p-2">
        <Icon.ArrowLeft className="w-5" />
      </button>

      <strong className="text-base font-medium">Search</strong>

      <button className="p-2">
        <Icon.ShoppingCart />
      </button>
    </nav>
  )
}
