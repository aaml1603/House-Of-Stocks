'use client';

import { motion } from 'framer-motion';

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => {
    const isRed = i % 2 === 0; // Alternate between red and green
    return {
      id: i,
      // Modified to flow from top-right to bottom-left
      d: `M${680 + i * 5 * position} -${189 + i * 6}C${
        680 + i * 5 * position
      } -${189 + i * 6} ${612 + i * 5 * position} ${216 - i * 6} ${
        152 + i * 5 * position
      } ${343 - i * 6}C${-184 + i * 5 * position} ${470 - i * 6} ${
        -316 + i * 5 * position
      } ${875 - i * 6} ${-316 + i * 5 * position} ${875 - i * 6}`,
      color: isRed ? `rgba(220,38,38,${0.1 + i * 0.03})` : `rgba(34,197,94,${0.1 + i * 0.03})`, // Red and green
      strokeColor: isRed ? '#dc2626' : '#22c55e', // Red and green stroke colors
      width: 0.5 + i * 0.03,
    };
  });

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className="w-full h-full"
        viewBox="0 0 696 316"
        fill="none"
      >
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke={path.strokeColor}
            strokeWidth={path.width}
            strokeOpacity={0.1 + path.id * 0.03}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'linear',
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export interface BackgroundPathsProps {
  title?: string;
}

export function BackgroundPaths({
  title = 'Background Paths',
}: BackgroundPathsProps) {
  const words = title.split(' ');

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white dark:bg-neutral-950">
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-8 tracking-tighter">
            {words.map((word, wordIndex) => (
              <span
                key={wordIndex}
                className="inline-block mr-4 last:mr-0"
              >
                {word.split('').map((letter, letterIndex) => (
                  <motion.span
                    key={`${wordIndex}-${letterIndex}`}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: wordIndex * 0.1 + letterIndex * 0.03,
                      type: 'spring',
                      stiffness: 150,
                      damping: 25,
                    }}
                    className="inline-block text-transparent bg-clip-text 
                      bg-gradient-to-r from-neutral-900 to-neutral-700/80 
                      dark:from-white dark:to-white/80"
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>

        </motion.div>
      </div>
    </div>
  );
}
