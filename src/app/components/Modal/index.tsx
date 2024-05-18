'use client'
import { Fragment, useCallback, useEffect, useState } from 'react';
import { IoMdClose } from "react-icons/io";
import styles from './styles.module.scss'

const Modal: React.FC = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [childrenBlock, setChidrenBlock] = useState<React.ReactNode>({} as React.ReactNode);

  const toggle = () => setIsOpened(prev => !prev);

  const handleEvent = useCallback((event: any) => {
    setIsOpened(true)
    setChidrenBlock(event.detail.children)
  }, [])

  useEffect(() => {
    if(typeof window !== 'undefined'){
      window.addEventListener('@cine:openModal', handleEvent)
    }
    return () => {
      window.removeEventListener('@cine:openModal', handleEvent)
    }
  }, [])

  if(!isOpened) return <Fragment />

  return (
    <div className={styles.modalOverlay} onClick={toggle}>
      <div className={styles.modalBody} onClick={event => event.stopPropagation()}>
        <div className={styles.modalClose} onClick={toggle}>
          <IoMdClose size={24} color="#000"/>
        </div>
        { childrenBlock }
      </div>
    </div>
  )
}

export default Modal;
