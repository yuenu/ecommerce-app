import { ReactNode } from 'react'
import clsx from 'clsx'

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
  title: string
}

export function VerticalLayoutSection({
  className,
  children,
  title,
}: VerticalLayoutSectionProps) {
  return (
    <section className={clsx('px-6', className)}>
      <h2 className="mb-4 text-base font-normal">{title}</h2>
      {children}
    </section>
  )
}
