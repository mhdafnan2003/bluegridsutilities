import React from 'react';
import { motion } from 'framer-motion';

const defaultVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const MotionSection = ({
  as: Component = 'section',
  children,
  className,
  id,
  variants = defaultVariants,
  viewport = { once: true, amount: 0.2 },
  transition = { duration: 0.6, ease: 'easeOut' },
  initial = 'hidden',
  whileInView = 'visible',
  ...props
}) => {
  const MotionTag = motion.create(Component);

  return (
    <MotionTag
      id={id}
      className={className}
      variants={variants}
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      transition={transition}
      {...props}
    >
      {children}
    </MotionTag>
  );
};

export default MotionSection;
