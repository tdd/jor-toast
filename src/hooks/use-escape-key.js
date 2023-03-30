import React from 'react'

export default function useEscapeKey(callback) {
  React.useEffect(() => {
    function clearAllToasts(e) {
      if (e.code === 'Escape') {
        callback()
      }
    }

    window.addEventListener('keydown', clearAllToasts)
    return () => window.removeEventListener('keydown', clearAllToasts)
  }, [callback])
}
