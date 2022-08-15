import React, { useEffect } from 'react'

export const useOutsideClick = (
  ref: React.MutableRefObject<HTMLElement>,
  handler: React.Dispatch<React.SetStateAction<boolean>>,
  attached = true,
) => {
  useEffect(() => {
    if (!open) return
    const handleClickOutside = (event) => {
      if (open && ref.current && !ref.current.contains(event.target)) {
        handler(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [ref, handler, attached])
}
