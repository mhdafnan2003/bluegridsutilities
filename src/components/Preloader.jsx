import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/images/logo.png';

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState('loading'); // 'loading' | 'complete' | 'exit'

  useEffect(() => {
    // Simulate asset loading progress
    let current = 0;
    const totalDuration = 2600; // total ms for loading phase
    const interval = 18;
    const steps = totalDuration / interval;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      current += increment;
      // Add slight easing — faster at start, slows near 100
      const eased = Math.min(100, current < 80 ? current : current * 0.97 + 2);
      setProgress(Math.min(100, Math.round(eased)));

      if (current >= 100) {
        clearInterval(timer);
        setProgress(100);
        setTimeout(() => {
          setPhase('complete');
          setTimeout(() => {
            setPhase('exit');
            setTimeout(() => {
              onComplete?.();
            }, 700);
          }, 400);
        }, 200);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'exit' && (
        <motion.div
          key="preloader"
          className="preloader-root"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.65, ease: 'easeInOut' }}
        >
          {/* Animated background grid */}
          <div className="preloader-grid" aria-hidden="true">
            {Array.from({ length: 64 }).map((_, i) => (
              <div
                key={i}
                className="preloader-grid-cell"
                style={{ animationDelay: `${(i * 0.04) % 2}s` }}
              />
            ))}
          </div>

          {/* Scan line sweep */}
          <div className="preloader-scanline" aria-hidden="true" />

          {/* Central card */}
          <div className="preloader-card">
            {/* Corner accents */}
            <span className="preloader-corner preloader-corner--tl" />
            <span className="preloader-corner preloader-corner--tr" />
            <span className="preloader-corner preloader-corner--bl" />
            <span className="preloader-corner preloader-corner--br" />

            {/* Logo */}
            <motion.div
              className="preloader-logo-wrap"
              initial={{ opacity: 0, scale: 0.8, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            >
              <img src={logo} alt="BlueGrid Utilities" className="preloader-logo" />
            </motion.div>

            {/* Tagline */}
            <motion.p
              className="preloader-tagline"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.45 }}
            >
              Precision. Safety. Delivery.
            </motion.p>

            {/* Animated dots row */}
            <motion.div
              className="preloader-dots"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {[0, 1, 2, 3, 4].map((i) => (
                <span
                  key={i}
                  className="preloader-dot"
                  style={{ animationDelay: `${i * 0.14}s` }}
                />
              ))}
            </motion.div>

            {/* Progress bar */}
            <motion.div
              className="preloader-bar-wrap"
              initial={{ opacity: 0, scaleX: 0.7 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="preloader-bar-track">
                <motion.div
                  className="preloader-bar-fill"
                  style={{ width: `${progress}%` }}
                />
                {/* Shimmer */}
                <div className="preloader-bar-shimmer" />
              </div>
              <div className="preloader-bar-labels">
                <span className="preloader-bar-label">Initialising systems</span>
                <span className="preloader-bar-pct">{progress}%</span>
              </div>
            </motion.div>

            {/* Status pills */}
            <motion.div
              className="preloader-pills"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.85 }}
            >
              {['Water Networks', 'Civil Engineering', 'NRSWA Compliance'].map((label, i) => (
                <span
                  key={label}
                  className="preloader-pill"
                  style={{ animationDelay: `${0.9 + i * 0.25}s` }}
                >
                  <span className="preloader-pill-dot" />
                  {label}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Bottom strip */}
          <div className="preloader-bottom-strip">
            <span className="preloader-strip-text">© 2025 BlueGrid Utilities Ltd · Company No. 16442340</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
