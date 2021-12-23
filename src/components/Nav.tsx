// import { Icon, Avatar } from '@/components'
import clsx from 'clsx'
import { ReactNode } from 'react'

type NavPrpos = {
  className?: string
  left: ReactNode
  title?: ReactNode | string
  right: ReactNode
}

export function Nav({ className, left, title, right }: NavPrpos) {
  return (
    <nav
      className={clsx(
        'flex justify-between items-center',
        className
      )}>
      <button className="p-2">{left}</button>

      <span className="inline-flex gap-2">{title}</span>

      <button className="p-2">{right}</button>
    </nav>
  )
}

// type SubNavProps = {
//   className?: string
// }

// export function SubNav({ className }: SubNavProps) {
//   return (
//     <nav
//       className={clsx(
//         'flex justify-between items-center',
//         className
//       )}>
//       <button className="p-2">
//         <Icon.ArrowLeft className="w-5" />
//       </button>

//       <strong className="text-base font-medium">Search</strong>

//       <button className="p-2">
//         <Icon.ShoppingCart />
//       </button>
//     </nav>
//   )
// }
