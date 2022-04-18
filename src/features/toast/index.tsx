import { Icon } from '@/components'
import clsx from 'clsx'
import { ToastOptions } from './types'

const Toast = ({ title }: ToastOptions) => {
  return (
    <div
      className={clsx(
        'toast',
        'fixed -translate-x-1/2 top-10 left-1/2 ',
        'flex gap-2 px-4 py-3 rounded-lg',
        'bg-amber-600 text-white'
      )}>
      <Icon.AlertCircle />
      {title}
    </div>
  )
}

export default Toast
