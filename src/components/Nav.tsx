// import { Icon, Avatar } from '@/components'
import { ReactNode, useState } from 'react'
import clsx from 'clsx'
import { Link, useNavigate } from 'react-router-dom'
import { useAppDispatch } from '@/slice'
import { signOut } from '@/slice/auth'
import { resetCart } from '@/slice/cart'

type NavPrpos = {
  className?: string
  left: ReactNode
  title?: ReactNode | string
  right?: ReactNode
  onRightClickType?: 'profile' | 'go-cart' | 'reset-cart'
  onLeftClickType?: 'toggle-sidepanel' | 'back'
}

export function Nav({
  className,
  left,
  title,
  right,
  onRightClickType,
  onLeftClickType,
}: NavPrpos) {
  let navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [isOpen, setIsOpen] = useState(false)

  const onLeftClick = () => {
    if (onLeftClickType === 'toggle-sidepanel')
      setIsOpen((prev) => !prev)

    if (onLeftClickType === 'back') navigate(-1)
  }

  const onRightClick = () => {
    if (onRightClickType === 'profile') navigate('/profile')
    if (onRightClickType === 'go-cart') navigate('/shopping-cart')
    if (onRightClickType === 'reset-cart') dispatch(resetCart())
  }

  const onClose = () => setIsOpen(false)

  return (
    <nav
      className={clsx(
        'flex justify-between items-center',
        className
      )}>
      <button className="z-20 p-2" onClick={onLeftClick}>
        {left}
      </button>
      <SidePanel isOpen={isOpen} onClose={onClose} />

      <span className="inline-flex gap-2 text-base font-semibold">
        {title}
      </span>

      <button className="p-2" onClick={onRightClick}>
        {right}
      </button>
    </nav>
  )
}

const sidePanelNav = [
  {
    id: 1,
    link: '/',
    name: 'Home',
  },
  {
    id: 2,
    link: '/explore',
    name: 'Explore',
  },
  {
    id: 3,
    link: '/product-detail',
    name: 'Product Detail',
  },
  {
    id: 4,
    link: '/profile',
    name: 'Profile',
  },
  {
    id: 5,
    link: '/search',
    name: 'Search',
  },
  {
    id: 6,
    link: '/shopping-cart',
    name: 'Shopping Cart',
  },
]

type SidePanelType = {
  isOpen: boolean
  onClose: () => void
}

function SidePanel({ isOpen, onClose }: SidePanelType) {
  const dispatch = useAppDispatch()
  const onLogout = () => {
    onClose()
    dispatch(signOut())
  }

  return (
    <div
      className={clsx(
        'fixed inset-0 w-screen h-screen',
        isOpen ? 'bg-black/80 z-10' : 'transparent z-[-1]'
      )}>
      <div
        className={clsx(
          'absolute top-0 w-1/2 h-screen',
          'bg-white cursor-pointer transition-all',
          'px-4 pt-28',
          isOpen ? 'left-0' : '-left-1/2'
        )}>
        <ul className="flex flex-col gap-4 text-center uppercase">
          {sidePanelNav.map((nav) => (
            <li key={nav.id} className="border border-red-400">
              <Link
                onClick={onClose}
                className="inline-block p-4"
                to={nav.link}>
                {nav.name}
              </Link>
            </li>
          ))}
          <div
            className="p-4 mt-auto border cursor-pointer border-cyan-400"
            onClick={onLogout}>
            Logout
          </div>
        </ul>
      </div>
    </div>
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
