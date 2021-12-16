import React, { ReactNode, isValidElement, cloneElement } from 'react'
import clsx from 'clsx'
import { Icon } from './components/Icon'

type Props = {
  type: 'email' | 'password'
  name: string
  placeholder: string
  icon: ReactNode
}

function Input({ type, name, placeholder, icon }: Props) {
  return (
    <label
      className={clsx(
        'inline-flex items-center',
        'bg-white',
        'px-3 py-3',
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

function App() {
  return (
    <main
      className={clsx(
        'bg-auth h-screen p-8',
        'flex flex-col',
        'text-sm text-center text-white'
      )}>
      <header className="mt-20 space-y-4">
        <h1 className="text-6xl">Audio</h1>
        <p>It's modular and designed to last</p>
      </header>

      <form className="flex flex-col flex-1 mt-10">
        <div className="flex flex-col gap-2">
          <Input
            type="email"
            name="email"
            placeholder="Email"
            icon={<Icon.Mail />}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            icon={<Icon.Lock />}
          />
        </div>

        <div>
          <a href="/">Forget Password</a>
        </div>

        <button>Sign In</button>

        <p>
          <span>Didn't have any account?</span>
          <a href="/">Sign Up here</a>
        </p>
      </form>
    </main>
  )
}

export default App
