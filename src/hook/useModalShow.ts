import { useRef, useState, useEffect } from 'react'

export const useModalShow = <T extends HTMLElement>() => {
  const [modalShow, setModalShow] = useState<boolean>(false)
  const modalRef = useRef<T>(null)

  const onClickModalShow = () => {
    setModalShow(!modalShow)
  }

  useEffect(() => {
    const clickModalOutside = (event: MouseEvent) => {
      if (
        modalShow === true &&
        !modalRef.current?.contains(event.target as Node)
      ) {
        onClickModalShow()
      }
    }

    document.addEventListener('mousedown', clickModalOutside)

    return () => {
      document.removeEventListener('mousedown', clickModalOutside)
    }
  })

  return { modalRef, modalShow, onClickModalShow, setModalShow }
}
