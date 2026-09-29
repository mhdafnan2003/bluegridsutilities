/**
 * Shared stagger variants for a grid/list of cards: put `staggerContainer` on the wrapping
 * `motion.div` (initial="hidden" whileInView="visible" viewport={{ once: true }}) and
 * `staggerItem` on each `motion.div` card inside it - each card then fades/slides in a beat
 * after the one before it, instead of the whole grid appearing as one flat block.
 */
export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};
