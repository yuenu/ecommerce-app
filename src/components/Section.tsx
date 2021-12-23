import { ReactNode } from 'react'
import clsx from 'clsx'
import { List } from '@/components'

type SectionProps = {
  className?: string
  children?: ReactNode
  optional?: ReactNode
  title?: string
}

export function Section({
  className,
  title,
  children,
  optional,
}: SectionProps) {
  return (
    <section className={clsx('', className)}>
      <header className="flex items-center justify-between py-2">
        <h3>{title}</h3>

        {optional}
      </header>

      {children}
    </section>
  )
}

type VerticalLayoutSectionProps = {
  className?: string
  children?: ReactNode
  title?: string
}

export function VerticalLayoutSection({
  className,
  children,
  title,
}: VerticalLayoutSectionProps) {
  return (
    <section className="p-6">
      <h2></h2>
    </section>
  )
}
