import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ScrollAnimationProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale';
  delay?: number;
  className?: string;
}

export function ScrollAnimation({ 
  children, 
  direction = 'up', 
  delay = 0,
  className = ''
}: ScrollAnimationProps) {
  const variants = {
    hidden: {
      opacity: 0,
      ...(direction === 'up' && { y: 50 }),
      ...(direction === 'down' && { y: -50 }),
      ...(direction === 'left' && { x: 50 }),
      ...(direction === 'right' && { x: -50 }),
      ...(direction === 'scale' && { scale: 0.8 }),
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.05, margin: '0px' }}
      transition={{ duration: 0.4, delay }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.05, margin: '0px' }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, direction = 'up', className = '' }: { 
  children: ReactNode; 
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale';
  className?: string;
}) {
  const variants = {
    hidden: {
      opacity: 0,
      ...(direction === 'up' && { y: 30 }),
      ...(direction === 'down' && { y: -30 }),
      ...(direction === 'left' && { x: 30 }),
      ...(direction === 'right' && { x: -30 }),
      ...(direction === 'scale' && { scale: 0.8 }),
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1
    }
  };

  return (
    <motion.div variants={variants} className={className}>
      {children}
    </motion.div>
  );
}