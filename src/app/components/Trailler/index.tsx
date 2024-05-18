'use client'
import styles from './styles.module.scss'
import { Fragment, useState } from "react";
import { IoMdPlay } from "react-icons/io";
import Modal from '../Modal';
import { PrismicRichText } from '@prismicio/react';

const Trailer: React.FC<TrailerProps> = ({ title, iframe }: TrailerProps) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const toggle = () => setIsOpened(prev => !prev);

  return (
    <Fragment>
      <button onClick={ toggle } className={styles.trailerButton}>
        <IoMdPlay size={20}/>
        <p>Assistir ao trailer</p>
      </button>
      <Modal isOpened={isOpened} toggle={toggle}>
        <div className={styles.trailerContent}>
          <p>
            Filme: <PrismicRichText field={title}/>
          </p>
          <h4>Trailer</h4>
          <div dangerouslySetInnerHTML={{__html: iframe}} />
        </div>
      </Modal>
    </Fragment>
  )
}

export default Trailer;