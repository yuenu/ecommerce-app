import clsx from 'clsx'
import React, { ReactNode, isValidElement, cloneElement } from 'react'

type Props = {
  type: 'email' | 'password'
  name: string
  placeholder: string
  icon: ReactNode
}

export function Input({ type, name, placeholder, icon }: Props) {
  return (
    <label
      className={clsx(
        'inline-flex items-center gap-3',
        'bg-white',
        'p-3',
        'rounded-lg',
        'focus-within:ring ring-primary'
      )}>
      {isValidElement(icon) &&
        cloneElement(icon, { className: 'w-5 text-gray-dark' })}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={clsx(
          'w-full',
          'outline-none',
          'text-black placeholder-gray-dark'
        )}
      />
    </label>
  )
}
