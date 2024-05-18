import React from 'react';
import styles from './styles.module.scss'

import { SliceZone } from '@prismicio/react';
import { components } from '@/slices';

const ComingSoon: React.FC<ComingSoonProps> = ({ banners }: ComingSoonProps) => {

  return (
    <section className={styles.comingSoonContainer}>
      <SliceZone slices={banners} components={components} />;
    </section>
  )
}

export default ComingSoon;