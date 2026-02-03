"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface IntroLoaderProps {
  onComplete: () => void;
}

export default function IntroLoader({ onComplete }: IntroLoaderProps) {
  const [phase, setPhase] = useState(1);

  useEffect(() => {
    const phase2Timer = setTimeout(() => setPhase(2), 2000);
    const phase3Timer = setTimeout(() => setPhase(3), 4000);
    const phase4Timer = setTimeout(() => setPhase(4), 5200);
    const phase5Timer = setTimeout(() => setPhase(5), 6200);
    const completeTimer = setTimeout(() => onComplete(), 7500);

    return () => {
      clearTimeout(phase2Timer);
      clearTimeout(phase3Timer);
      clearTimeout(phase4Timer);
      clearTimeout(phase5Timer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

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

// "use client";

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// interface IntroLoaderProps {
//   onComplete: () => void;
// }

// export default function IntroLoader({ onComplete }: IntroLoaderProps) {
//   const [phase, setPhase] = useState(1);

//   useEffect(() => {
//     // Phase 1: Show logo animation (0-2s)
//     // Phase 2: Show tagline (2-4s)
//     // Phase 3: Curtains close to middle (4-5.2s)
//     // Phase 4: Hold at middle - content hidden, bg becomes transparent (5.2-6.2s)
//     // Phase 5: Curtains open revealing page (6.2-7.5s)

//     const phase2Timer = setTimeout(() => setPhase(2), 2000);
//     const phase3Timer = setTimeout(() => setPhase(3), 4000);
//     const phase4Timer = setTimeout(() => setPhase(4), 5200);
//     const phase5Timer = setTimeout(() => setPhase(5), 6200);
//     const completeTimer = setTimeout(() => onComplete(), 7500);

//     return () => {
//       clearTimeout(phase2Timer);
//       clearTimeout(phase3Timer);
//       clearTimeout(phase4Timer);
//       clearTimeout(phase5Timer);
//       clearTimeout(completeTimer);
//     };
//   }, [onComplete]);

//   // Phase 5: Only show curtains opening to reveal page
//   if (phase === 5) {
//     return (
//       <div
//         className="fixed inset-0 z-[100] overflow-hidden"
//         style={{ isolation: "isolate" }}
//       >
//         {/* Left curtain - positioned at center, slides to the left */}
//         <motion.div
//           style={{
//             position: "absolute",
//             top: 0,
//             right: "50%",
//             height: "100%",
//             width: "50vw",
//             background: "#000",
//           }}
//           initial={{ x: 0 }}
//           animate={{ x: "-100%" }}
//           transition={{ duration: 2.5, ease: [0.25, 0.1, 0.25, 1] }}
//         />
//         {/* Right curtain - positioned at center, slides to the right */}
//         <motion.div
//           style={{
//             position: "absolute",
//             top: 0,
//             left: "50%",
//             height: "100%",
//             width: "50vw",
//             background: "#000",
//           }}
//           initial={{ x: 0 }}
//           animate={{ x: "100%" }}
//           transition={{ duration: 2.5, ease: [0.25, 0.1, 0.25, 1] }}
//         />
//       </div>
//     );
//   }

//   return (
//     <div className="fixed inset-0 z-[100] overflow-hidden">
//       {/* Main background - hides when curtains meet */}
//       <motion.div
//         className="absolute inset-0 bg-[#1a1a1a] flex items-center justify-center"
//         animate={{ opacity: phase >= 4 ? 0 : 1 }}
//         transition={{ duration: 0.01 }}
//       >
//         {/* Background subtle pattern */}
//         <div className="absolute inset-0 opacity-5">
//           <div
//             className="absolute inset-0"
//             style={{
//               backgroundImage: `repeating-linear-gradient(
//                 45deg,
//                 transparent,
//                 transparent 2px,
//                 rgba(255,255,255,0.03) 2px,
//                 rgba(255,255,255,0.03) 4px
//               )`,
//             }}
//           />
//         </div>

//         {/* Animated lines */}
//         <motion.div
//           className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"
//           initial={{ x: "-100%" }}
//           animate={{ x: "100%" }}
//           transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
//         />
//         <motion.div
//           className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"
//           initial={{ x: "100%" }}
//           animate={{ x: "-100%" }}
//           transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
//         />

//         {/* Main content */}
//         <div className="relative text-center">
//           {/* Logo letters animation */}
//           <motion.div
//             className="overflow-hidden"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: phase >= 3 ? 0 : 1 }}
//             transition={{ duration: 0.3 }}
//           >
//             <div className="flex justify-center items-center gap-1">
//               {"IRISI".split("").map((letter, index) => (
//                 <motion.span
//                   key={index}
//                   className="text-5xl md:text-7xl font-light tracking-[0.3em] text-white"
//                   initial={{ y: 100, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   transition={{
//                     duration: 0.8,
//                     delay: index * 0.1,
//                     ease: [0.22, 1, 0.36, 1],
//                   }}
//                 >
//                   {letter}
//                 </motion.span>
//               ))}
//             </div>
//           </motion.div>

//           {/* FASHION text with reveal */}
//           <motion.div
//             className="overflow-hidden mt-2"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: phase >= 3 ? 0 : 1 }}
//             transition={{ duration: 0.3, delay: phase >= 3 ? 0 : 0.5 }}
//           >
//             <motion.p
//               className="text-lg md:text-xl tracking-[0.5em] text-white/60 font-light"
//               initial={{ y: 50, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{
//                 duration: 0.8,
//                 delay: 0.8,
//                 ease: [0.22, 1, 0.36, 1],
//               }}
//             >
//               FASHION
//             </motion.p>
//           </motion.div>

//           {/* Tagline - Phase 2 */}
//           <AnimatePresence>
//             {phase === 2 && (
//               <motion.div
//                 className="mt-12 overflow-hidden"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 <div className="flex justify-center items-center gap-[2px]">
//                   {"TIMELESS ELEGANCE".split("").map((letter, index) => (
//                     <motion.span
//                       key={index}
//                       className="text-sm tracking-[0.2em] text-white/40 font-light"
//                       initial={{ y: 30, opacity: 0 }}
//                       animate={{ y: 0, opacity: 1 }}
//                       exit={{ y: -20, opacity: 0 }}
//                       transition={{
//                         duration: 0.5,
//                         delay: index * 0.03,
//                         ease: [0.22, 1, 0.36, 1],
//                       }}
//                     >
//                       {letter === " " ? "\u00A0" : letter}
//                     </motion.span>
//                   ))}
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>

//           {/* Loading bar */}
//           <motion.div
//             className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-32"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: phase >= 3 ? 0 : 1 }}
//             transition={{ duration: 0.3, delay: phase >= 3 ? 0 : 1 }}
//           >
//             <div className="h-[1px] bg-white/20 w-full overflow-hidden">
//               <motion.div
//                 className="h-full bg-white/60"
//                 initial={{ width: "0%" }}
//                 animate={{ width: "100%" }}
//                 transition={{ duration: 4, ease: "easeInOut" }}
//               />
//             </div>
//           </motion.div>

//           {/* Decorative corner elements */}
//           <motion.div
//             className="absolute -top-16 -left-16 w-8 h-8 border-l border-t border-white/20"
//             initial={{ opacity: 0, scale: 0.5 }}
//             animate={{ opacity: phase >= 3 ? 0 : 1, scale: 1 }}
//             transition={{ delay: 1.2, duration: 0.6 }}
//           />
//           <motion.div
//             className="absolute -top-16 -right-16 w-8 h-8 border-r border-t border-white/20"
//             initial={{ opacity: 0, scale: 0.5 }}
//             animate={{ opacity: phase >= 3 ? 0 : 1, scale: 1 }}
//             transition={{ delay: 1.3, duration: 0.6 }}
//           />
//           <motion.div
//             className="absolute -bottom-16 -left-16 w-8 h-8 border-l border-b border-white/20"
//             initial={{ opacity: 0, scale: 0.5 }}
//             animate={{ opacity: phase >= 3 ? 0 : 1, scale: 1 }}
//             transition={{ delay: 1.4, duration: 0.6 }}
//           />
//           <motion.div
//             className="absolute -bottom-16 -right-16 w-8 h-8 border-r border-b border-white/20"
//             initial={{ opacity: 0, scale: 0.5 }}
//             animate={{ opacity: phase >= 3 ? 0 : 1, scale: 1 }}
//             transition={{ delay: 1.5, duration: 0.6 }}
//           />
//         </div>
//       </motion.div>

//       {/* Curtains - these stay on top */}
//       {phase >= 3 && (
//         <>
//           {/* Left curtain - closes from left to middle */}
//           <motion.div
//             style={{
//               position: "absolute",
//               top: 0,
//               left: 0,
//               height: "100%",
//               width: "50vw",
//               background: "#000",
//               backfaceVisibility: "hidden",
//               WebkitBackfaceVisibility: "hidden",
//               zIndex: 50,
//             }}
//             initial={{ x: "-100%" }}
//             animate={{ x: 0 }}
//             transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
//           />
//           {/* Right curtain - closes from right to middle */}
//           <motion.div
//             style={{
//               position: "absolute",
//               top: 0,
//               right: 0,
//               height: "100%",
//               width: "50vw",
//               background: "#000",
//               backfaceVisibility: "hidden",
//               WebkitBackfaceVisibility: "hidden",
//               zIndex: 50,
//             }}
//             initial={{ x: "100%" }}
//             animate={{ x: 0 }}
//             transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
//           />
//         </>
//       )}
//     </div>
//   );
// }
