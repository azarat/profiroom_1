import { RefObject, useEffect } from 'react'

const useOutsideClick = (ref: RefObject<HTMLElement>, callback: () => void): void => {
  const handleClick = (e: Event) => {
    const t = e.target as HTMLElement
    if (ref.current && !ref.current.contains(t)) {
      callback()
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  })
}

export default useOutsideClick
