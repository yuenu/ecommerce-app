import clsx from 'clsx'
import { Icon } from '@/components'
import { useAppSelector } from '@/slice'

export const Toast = () => {
  const { message, visible } = useAppSelector((state) => state.toast)

  if (!visible) return null
  return (
    <div
      className={clsx(
        'toast',
        'fixed -translate-x-1/2 top-10 left-1/2 ',
        'flex gap-2 px-4 py-3 rounded-lg',
        'bg-amber-600 text-white'
      )}>
      <Icon.AlertCircle />
      {message}
    </div>
  )
}
