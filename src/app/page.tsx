"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black">
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-zinc-800/20 via-zinc-700/10 to-transparent"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundSize: "200% 200%",
          }}
        />
      </div>

      {/* Shining effect overlay */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 0% 0%, rgba(255,255,255,0.05) 0%, transparent 50%)",
            "radial-gradient(circle at 100% 100%, rgba(255,255,255,0.05) 0%, transparent 50%)",
            "radial-gradient(circle at 0% 100%, rgba(255,255,255,0.05) 0%, transparent 50%)",
            "radial-gradient(circle at 100% 0%, rgba(255,255,255,0.05) 0%, transparent 50%)",
            "radial-gradient(circle at 0% 0%, rgba(255,255,255,0.05) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        className="relative z-10"
      >
        <motion.h1
          className="text-8xl md:text-9xl font-bold text-white tracking-wider"
          animate={{
            textShadow: [
              "0 0 20px rgba(255,255,255,0.5), 0 0 40px rgba(255,255,255,0.3)",
              "0 0 30px rgba(255,255,255,0.7), 0 0 60px rgba(255,255,255,0.4)",
              "0 0 20px rgba(255,255,255,0.5), 0 0 40px rgba(255,255,255,0.3)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          irisi
        </motion.h1>
      </motion.div>
    </div>
  );
}
