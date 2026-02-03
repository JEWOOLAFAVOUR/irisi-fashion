"use client";

import { useRef, useEffect } from "react";

export function useClickSound() {
  const soundRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    soundRef.current = new Audio(
      "/audio/universfield-computer-mouse-click-352734.mp3",
    );
    soundRef.current.volume = 1.0;
    soundRef.current.load();
  }, []);

  const playClick = () => {
    if (soundRef.current) {
      soundRef.current.currentTime = 0;
      soundRef.current.play().catch(() => {});
    }
  };

  return playClick;
}
