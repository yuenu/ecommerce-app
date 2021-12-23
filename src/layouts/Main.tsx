import { ReactNode } from 'react'
import clsx from 'clsx'

type Props = {
  className?: string
  children: ReactNode
}

export function Main({ children, className }: Props) {
  return (
    <main
      className={clsx('flex flex-col h-screen text-sm', className)}>
      {children}
    </main>
  )
}
