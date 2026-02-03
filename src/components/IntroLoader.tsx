"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface IntroLoaderProps {
  onComplete: () => void;
}

export default function IntroLoader({ onComplete }: IntroLoaderProps) {
  const [phase, setPhase] = useState(0); // Start at 0 for click-to-enter
  const [started, setStarted] = useState(false);
  const introSoundRef = useRef<HTMLAudioElement | null>(null);
  const curtainSoundRef = useRef<HTMLAudioElement | null>(null);

  // Preload audio on mount
  useEffect(() => {
    introSoundRef.current = new Audio("/audio/nouveau-jingle-netflix.mp3");
    introSoundRef.current.volume = 1.0;
    introSoundRef.current.load();

    curtainSoundRef.current = new Audio("/audio/intro_cinematic-270840.mp3");
    curtainSoundRef.current.volume = 1.0;
    curtainSoundRef.current.load();
  }, []);

  // Handle click to start
  const handleStart = () => {
    // Play intro sound IMMEDIATELY on click
    if (introSoundRef.current) {
      introSoundRef.current.play().catch((e) => {
        console.log("Audio play failed:", e);
      });
    }

    setStarted(true);
    setPhase(1);
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (introSoundRef.current) {
        introSoundRef.current.pause();
        introSoundRef.current = null;
      }
      if (curtainSoundRef.current) {
        curtainSoundRef.current.pause();
        curtainSoundRef.current = null;
      }
    };
  }, []);

  // Play curtain sound when phase 3 starts (curtains closing)
  useEffect(() => {
    if (phase === 3) {
      // Fade out intro sound
      if (introSoundRef.current) {
        introSoundRef.current.pause();
      }

      // Play curtain sound (already preloaded)
      if (curtainSoundRef.current) {
        curtainSoundRef.current.play().catch((e) => {
          console.log("Curtain audio play failed:", e);
        });
      }
    }
  }, [phase]);

  // Phase timers - only start when user clicks
  useEffect(() => {
    if (!started) return;

    const phase2Timer = setTimeout(() => setPhase(2), 2000);
    const phase3Timer = setTimeout(() => setPhase(3), 4000);
    const phase4Timer = setTimeout(() => setPhase(4), 5200);
    const phase5Timer = setTimeout(() => setPhase(5), 6200);
    const completeTimer = setTimeout(() => onComplete(), 8700);

    return () => {
      clearTimeout(phase2Timer);
      clearTimeout(phase3Timer);
      clearTimeout(phase4Timer);
      clearTimeout(phase5Timer);
      clearTimeout(completeTimer);
    };
  }, [onComplete, started]);

  // Phase 0: Click to enter
  if (phase === 0) {
    return (
      <div
        className="fixed inset-0 z-[100] bg-[#0a0a0a] flex items-center justify-center cursor-pointer"
        onClick={handleStart}
      >
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-white/40 text-sm tracking-[0.3em] mb-4">
            WELCOME TO
          </p>
          <h1 className="text-white text-4xl md:text-6xl font-light tracking-[0.2em] mb-8">
            IRISI FASHION
          </h1>
          <motion.p
            className="text-white/60 text-xs tracking-[0.2em]"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            CLICK TO ENTER
          </motion.p>
        </motion.div>
      </div>
    );
  }

  // Phase 5: Curtains open revealing page
  if (phase === 5) {
    return (
      <>
        {/* Left curtain - rendered as a SIBLING, not inside a wrapper with isolation */}
        <motion.div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            height: "100vh",
            width: "50vw",
            zIndex: 9999,
            backgroundColor: "#000",
            boxShadow: "inset 0 0 0 100px #000",
          }}
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 2.5, ease: [0.25, 0.1, 0.25, 1] }}
        />
        {/* Right curtain */}
        <motion.div
          style={{
            position: "fixed",
            top: 0,
            left: "50%",
            height: "100vh",
            width: "50vw",
            zIndex: 9999,
            backgroundColor: "#000",
            boxShadow: "inset 0 0 0 100px #000",
          }}
          initial={{ x: 0 }}
          animate={{ x: "100%" }}
          transition={{ duration: 2.5, ease: [0.25, 0.1, 0.25, 1] }}
        />
      </>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden">
      {/* Main background - hides when curtains meet */}
      <motion.div
        className="absolute inset-0 bg-[#1a1a1a] flex items-center justify-center"
        animate={{ opacity: phase >= 4 ? 0 : 1 }}
        transition={{ duration: 0.01 }}
      >
        {/* Background subtle pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 2px,
                rgba(255,255,255,0.03) 2px,
                rgba(255,255,255,0.03) 4px
              )`,
            }}
          />
        </div>

        {/* Animated lines */}
        <motion.div
          className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />

        {/* Main content */}
        <div className="relative text-center">
          {/* Logo letters animation */}
          <motion.div
            className="overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: phase >= 3 ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-center items-center gap-1">
              {"IRISI".split("").map((letter, index) => (
                <motion.span
                  key={index}
                  className="text-5xl md:text-7xl font-light tracking-[0.3em] text-white"
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* FASHION text with reveal */}
          <motion.div
            className="overflow-hidden mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: phase >= 3 ? 0 : 1 }}
            transition={{ duration: 0.3, delay: phase >= 3 ? 0 : 0.5 }}
          >
            <motion.p
              className="text-lg md:text-xl tracking-[0.5em] text-white/60 font-light"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              FASHION
            </motion.p>
          </motion.div>

          {/* Tagline - Phase 2 */}
          <AnimatePresence>
            {phase === 2 && (
              <motion.div
                className="mt-12 overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex justify-center items-center gap-[2px]">
                  {"TIMELESS ELEGANCE".split("").map((letter, index) => (
                    <motion.span
                      key={index}
                      className="text-sm tracking-[0.2em] text-white/40 font-light"
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.03,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Loading bar */}
          <motion.div
            className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-32"
            initial={{ opacity: 0 }}
            animate={{ opacity: phase >= 3 ? 0 : 1 }}
            transition={{ duration: 0.3, delay: phase >= 3 ? 0 : 1 }}
          >
            <div className="h-[1px] bg-white/20 w-full overflow-hidden">
              <motion.div
                className="h-full bg-white/60"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 4, ease: "easeInOut" }}
              />
            </div>
          </motion.div>

          {/* Decorative corner elements */}
          <motion.div
            className="absolute -top-16 -left-16 w-8 h-8 border-l border-t border-white/20"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: phase >= 3 ? 0 : 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          />
          <motion.div
            className="absolute -top-16 -right-16 w-8 h-8 border-r border-t border-white/20"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: phase >= 3 ? 0 : 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.6 }}
          />
          <motion.div
            className="absolute -bottom-16 -left-16 w-8 h-8 border-l border-b border-white/20"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: phase >= 3 ? 0 : 1, scale: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          />
          <motion.div
            className="absolute -bottom-16 -right-16 w-8 h-8 border-r border-b border-white/20"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: phase >= 3 ? 0 : 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
          />
        </div>
      </motion.div>

      {/* Curtains closing (Phase 3+) */}
      {phase >= 3 && (
        <>
          <motion.div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              height: "100%",
              width: "50vw",
              backgroundColor: "#000",
              boxShadow: "inset 0 0 0 100px #000",
              zIndex: 50,
            }}
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              height: "100%",
              width: "50vw",
              backgroundColor: "#000",
              boxShadow: "inset 0 0 0 100px #000",
              zIndex: 50,
            }}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />
        </>
      )}
    </div>
  );
}
