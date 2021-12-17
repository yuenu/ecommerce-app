import { Icon, Input } from '@/components'
import clsx from 'clsx'

type AvatarProps = {
  className?: string
}

function Avatar({ className }: AvatarProps) {
  return (
    <img
      className={clsx('rounded-full object-cover', className)}
      src="https://i.pravatar.cc/300"
      alt="avatar"
    />
  )
}

type NavPrpos = {
  className?: string
}

function Nav({ className }: NavPrpos) {
  return (
    <nav
      className={clsx(
        'flex justify-between items-center',
        className
      )}>
      <button className="p-2">
        <Icon.MenuVariant className="w-5" />
      </button>

      <span className="inline-flex gap-2">
        <Icon.Logo className="w-5" />
        <strong className="text-lg">Audio</strong>
      </span>

      <Avatar className="w-8" />
    </nav>
  )
}

export default function App() {
  return (
    <main>
      <Nav className="px-6 py-4" />
      <header>
        <p>Hi, Andrea</p>
        <h1>What are you looking for today?</h1>
        <Input
          type="search"
          name="search"
          placeholder="Search headphone"
          icon={<Icon.Search />}
        />
      </header>
    </main>
  )
}
