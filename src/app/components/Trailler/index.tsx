'use client'
import styles from './styles.module.scss'
import { Fragment, useCallback } from "react";
import { IoMdPlay } from "react-icons/io";
import { PrismicRichText } from '@prismicio/react';

const TrailerContent: React.FC<TrailerProps> = ({ title, iframe }: TrailerProps) => {
  return (
    <div className={styles.trailerContent}>
      <p>
        Filme: <PrismicRichText field={title}/>
      </p>
      <h4>Trailer</h4>
      <div dangerouslySetInnerHTML={{__html: iframe}} />
    </div>
  )
}

const Trailer: React.FC<TrailerProps> = ({ title, iframe }: TrailerProps) => {

  const toggle = useCallback(() => {
    if(typeof window !== 'undefined'){
      window.dispatchEvent(new CustomEvent('@cine:openModal', {
        detail:{
          children: <TrailerContent title={title} iframe={iframe}/>
        } 
      }))
    }
  }, [title, iframe])

  return (
    <Fragment>
      <button onClick={ toggle } className={styles.trailerButton}>
        <IoMdPlay size={20}/>
        <p>Assistir ao trailer</p>
      </button>
    </Fragment>
  )
}

export default Trailer;