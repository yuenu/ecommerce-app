import clsx from 'clsx'
import React, { ReactNode, isValidElement, cloneElement } from 'react'

type Props = {
  type: 'email' | 'password' | 'search' | 'number'
  name: string
  placeholder: string
  icon?: ReactNode
  className?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}

export function Input({
  type,
  name,
  placeholder,
  icon,
  className,
  onChange,
}: Props) {
  return (
    <label
      className={clsx(
        'inline-flex items-center gap-3',
        'bg-white',
        'p-3',
        'rounded-lg',
        'focus-within:ring ring-primary',
        className
      )}>
      {isValidElement(icon) &&
        cloneElement(icon, { className: 'w-5 text-gray-dark' })}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        className={clsx(
          'w-full',
          'outline-none',
          'text-black placeholder-gray-dark'
        )}
      />
    </label>
  )
}
