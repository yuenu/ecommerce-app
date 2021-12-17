import clsx from 'clsx'
import { ReactNode } from 'react'

type PanelProps = {
  children?: ReactNode
  className?: string
}

export function Panel({ children, className }: PanelProps) {
  return (
    <div className={clsx('bg-gray-lighter rounded-t-3xl', className)}>
      {children}
    </div>
  )
}
