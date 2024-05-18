import { Fragment } from 'react';
import { IoMdClose } from "react-icons/io";
import styles from './styles.module.scss'

const Modal: React.FC<ModalProps> = ({ children, isOpened, toggle }: ModalProps) => {

  if(!isOpened) return <Fragment />

  return (
    <div className={styles.modalOverlay} onClick={toggle}>
      <div className={styles.modalBody} onClick={event => event.stopPropagation()}>
        <div className={styles.modalClose} onClick={toggle}>
          <IoMdClose size={24} color="#000"/>
        </div>
        { children }
      </div>s
    </div>
  )
}

export default Modal;