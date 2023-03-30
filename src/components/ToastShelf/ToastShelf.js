import React from 'react'
import Toast from '../Toast'
import styles from './ToastShelf.module.css'
import { useToasts } from '../ToastProvider'

function ToastShelf() {
  const { toasts, removeToast } = useToasts()

  return (
    <ol
      className={styles.wrapper}
      role='region'
      aria-live='polite'
      aria-label='Notification'
    >
      {toasts.map(({ id, variant, message }) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast variant={variant} onClose={() => removeToast({ id })}>
            {message}
          </Toast>
        </li>
      ))}
    </ol>
  )
}

export default React.memo(ToastShelf)
