import clsx from 'clsx'
import { ReactNode } from 'react'

type ButtonProps = {
  children?: ReactNode
  className?: string
}

export function Button({ children, className }: ButtonProps) {
  return (
    <button
      className={clsx(
        'w-full bg-primary text-white py-4 rounded-lg',
        className
      )}>
      {children}
    </button>
  )
}
