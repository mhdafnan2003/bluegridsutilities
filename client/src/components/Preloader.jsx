import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/images/logo.png';

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState('loading');
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    let current = 0;
    const totalDuration = 1200; // ms
    const interval = 16;
    const increment = 100 / (totalDuration / interval);

    // Hard fallback safety: ensure preloader unmounts even if background tab throttles setInterval
    const safetyTimer = setTimeout(() => {
      setPhase('exit');
      onCompleteRef.current?.();
    }, 2000);

    const timer = setInterval(() => {
      current += increment;
      if (current >= 100) {
        clearInterval(timer);
        clearTimeout(safetyTimer);
        setProgress(100);
        setTimeout(() => {
          setPhase('exit');
          setTimeout(() => {
            onCompleteRef.current?.();
          }, 300);
        }, 100);
      } else {
        setProgress(Math.min(100, Math.round(current)));
      }
    }, interval);

    return () => {
      clearInterval(timer);
      clearTimeout(safetyTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {phase !== 'exit' && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          <div className="flex flex-col items-center justify-center px-4">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 4 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mb-8"
            >
              <img
                src={logo}
                alt="BlueGrid Utilities"
                className="h-14 sm:h-16 w-auto object-contain"
              />
            </motion.div>

            {/* Minimal loading bar */}
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="w-36 h-[3px] bg-gray-100 rounded-full overflow-hidden relative"
            >
              <div
                className="h-full bg-[#0160d8] rounded-full transition-all duration-75 ease-linear"
                style={{ width: `${progress}%` }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;

