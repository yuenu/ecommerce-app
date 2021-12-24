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
        'px-3 py-[0.1rem] font-light',
        'ease-out duration-300',
        className
      )}
      onClick={onClick}>
      {children}
    </button>
  )
}
