import { Icon } from '@/components'
import clsx from 'clsx'
import { useAppSelector, useAppDispatch } from '@/slice'
import { signOut } from '@/slice/auth'

export const Toast = () => {
  const dispatch = useAppDispatch()
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
      <button type="button" onClick={() => dispatch(signOut())}>
        SingOut
      </button>
    </div>
  )
}
