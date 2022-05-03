import clsx from 'clsx'

type AvatarProps = {
  className?: string
}

export function Avatar({ className }: AvatarProps) {
  return (
    <img
      width="32"
      height="32"
      className={clsx('rounded-full object-cover', className)}
      src="https://i.pravatar.cc/300"
      alt="avatar"
    />
  )
}
