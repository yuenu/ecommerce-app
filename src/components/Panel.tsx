import clsx from 'clsx'
import { ReactNode } from 'react'

type PanelProps = {
  children: ReactNode
  className?: string
  style?: React.CSSProperties
}

export function Panel({ children, className, style }: PanelProps) {
  return (
    <div
      className={clsx('bg-gray-lighter rounded-t-3xl', className)}
      style={style}>
      {children}
    </div>
  )
}
