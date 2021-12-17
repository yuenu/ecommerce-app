import { ReactNode } from 'react'
import clsx from 'clsx'

type BadgeProps = {
  children?: ReactNode
  className?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export function Badge({ children, className, onClick }: BadgeProps) {
  return (
    <button
      className={clsx(
        'rounded-xl px-3 py-1 font-normal',
        'ease-out duration-300',
        className
      )}
      onClick={onClick}>
      {children}
    </button>
  )
}
