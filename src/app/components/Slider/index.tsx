'use client'
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './styles.module.scss';

const Slider = ({ children }:SliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const startX = useRef(0);
  const endX = useRef(0);
  const containerRef = useRef(null);

  const handleDragStart = (event: any) => {
    startX.current = event.clientX || event.touches[0].clientX;
  };

  const handleDragEnd = (event: any) => {
    endX.current = event.clientX || event.changedTouches[0].clientX;
    const distance = endX.current - startX.current;

    if (distance > 30 && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (distance < -30 && currentIndex < children.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div
      className={styles.container}
      ref={containerRef}
      onMouseDown={handleDragStart}
      onMouseUp={handleDragEnd}
      onTouchStart={handleDragStart}
      onTouchEnd={handleDragEnd}
    >
      <motion.div
        className={styles.slider}
        style={{ x: `-${currentIndex * 100}%` }}
        animate={{ x: `-${currentIndex * 100}%` }}
        transition={{ x: { type: 'spring', stiffness: 300, damping: 30 } }}
      >
        {children.map((child: React.ReactNode, index: number) => (
          <div 
            key={index} 
            className={styles.slide} 
            data-custom-position={index === currentIndex - 1 ? 'left' : index === currentIndex + 1 ? 'right': ''}
            data-custom-current-slide={index === currentIndex}
          >
            {child}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Slider;
