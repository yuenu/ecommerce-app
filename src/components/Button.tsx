import clsx from 'clsx'
import { ReactNode, isValidElement, cloneElement } from 'react'

type ButtonProps = {
  children?: ReactNode
  className?: string
  type?: 'button' | 'submit' | 'reset' | undefined
  disabled?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export function Button({
  children,
  className,
  type,
  onClick,
  disabled,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={clsx(
        'w-full bg-primary text-white py-4 rounded-lg',
        className
      )}
      type={type}
      onClick={onClick}
      disabled={disabled}
      {...rest}>
      {children}
    </button>
  )
}

type SocialMediaProps = {
  children?: ReactNode
  className?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

type ChildrenProps = {
  className: string
}

export function SocialMedia({
  children,
  onClick,
  className,
  ...rest
}: SocialMediaProps) {
  return (
    <button
      className={clsx(
        'p-3 bg-white rounded-lg w-12 h-12',
        'inline-block items-center justify-center',
        className
      )}
      onClick={onClick}
      {...rest}>
      {isValidElement(children) &&
        cloneElement(children as React.ReactElement<ChildrenProps>, { className: 'w-full h-full' })}
    </button>
  )
}
