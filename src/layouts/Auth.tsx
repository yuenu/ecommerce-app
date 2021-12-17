import { ReactNode } from 'react'
import clsx from 'clsx'

type LayoutProps = {
  children?: ReactNode
}

export function Auth({ children }: LayoutProps) {
  return (
    <main
      className={clsx(
        'bg-auth h-screen p-8 w-full',
        'flex flex-col',
        'text-sm text-center text-white'
      )}>
      <header className="mt-20 space-y-4">
        <h1 className="text-6xl">Audio</h1>
        <p>It's modular and designed to last</p>
      </header>

      <form className="flex flex-col flex-1 mt-64">{children}</form>
    </main>
  )
}
