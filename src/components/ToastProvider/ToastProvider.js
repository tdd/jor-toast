import React from 'react'
import useEscapeKey from '../../hooks/use-escape-key.js'

const ToastContext = React.createContext()

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([])

  const clearToasts = React.useCallback(() => setToasts([]), [])
  useEscapeKey(clearToasts)

  const addToast = React.useCallback(function addToast({ message, variant }) {
    const newToast = { id: crypto.randomUUID(), message, variant }
    setToasts((toasts) => [...toasts, newToast])
  }, [])

  const removeToast = React.useCallback(function removeToast({ id }) {
    setToasts((toasts) => toasts.filter((toast) => toast.id !== id))
  }, [])

  const value = React.useMemo(
    () => ({ toasts, addToast, removeToast }),
    [toasts, addToast, removeToast]
  )

  return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
}

export function useToasts() {
  return React.useContext(ToastContext)
}

export default ToastProvider
