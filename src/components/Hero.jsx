import { motion } from 'framer-motion'

const stats = [
  { text: '4,500+ Delegates from around the world' },
  { text: '57% International participants (107 countries)' },
  { text: 'Best in Committee — UNESCO' },
  { text: 'Outstanding Delegation — NMUN-NY' },
]

const statContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.35 },
  },
}

const statItem = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero({ reducedMotion }) {
  const transition = reducedMotion ? { duration: 0.01 } : { duration: 0.55, ease: [0.22, 1, 0.36, 1] }

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-4 pb-16 pt-20 sm:px-6"
    >
      {/* CSS world map / meridian motif */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07] dark:opacity-[0.12]"
        aria-hidden
      >
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path
                d="M48 0H0V48"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-navy dark:text-gold"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <ellipse
            cx="50%"
            cy="50%"
            rx="42%"
            ry="38%"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.75"
            className="text-navy dark:text-gold"
          />
          <ellipse
            cx="50%"
            cy="50%"
            rx="28%"
            ry="38%"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-navy dark:text-gold"
          />
          <line
            x1="0"
            y1="50%"
            x2="100%"
            y2="50%"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-navy dark:text-gold"
          />
        </svg>
      </div>
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.h1
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition}
          className="font-display text-5xl font-semibold tracking-tight text-navy dark:text-cream sm:text-6xl md:text-7xl"
        >
          Genuine
        </motion.h1>
        <motion.p
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: reducedMotion ? 0 : 0.08 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-charcoal/85 dark:text-cream/85 sm:text-lg"
        >
          NMUN-NY 2024: what stuck about speaking and leading across cultures
        </motion.p>

        <motion.ul
          variants={reducedMotion ? undefined : statContainer}
          initial={reducedMotion ? false : 'hidden'}
          animate={reducedMotion ? { opacity: 1 } : 'show'}
          className="mx-auto mt-14 w-full max-w-xl space-y-3 text-left"
        >
          {stats.map((s) => (
            <motion.li
              key={s.text}
              variants={reducedMotion ? undefined : statItem}
              initial={reducedMotion ? false : undefined}
              className="flex w-full items-center gap-2 font-sans text-sm font-medium text-navy dark:text-gold sm:text-base"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden />
              <span>{s.text}</span>
            </motion.li>
          ))}
        </motion.ul>

        <motion.blockquote
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: reducedMotion ? 0 : 0.85 }}
          className="pull-quote mt-16 border-l-gold text-charcoal dark:text-cream"
        >
          The people who win in life aren&apos;t the one who works the hardest; it&apos;s the ones who knows how to play
          the game. I believe that knowing how to play the game can lead to the top, but being genuine on your way there
          helps you stay at the top.
        </motion.blockquote>
      </div>

      <motion.a
        href="#about"
        initial={reducedMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: reducedMotion ? 0 : 1.2 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-navy/60 dark:text-gold/70"
        aria-label="Scroll to next section"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <span className="block h-8 w-5 rounded-full border-2 border-current">
          <motion.span
            className="mx-auto mt-1 block h-1.5 w-1.5 rounded-full bg-current"
            animate={
              reducedMotion
                ? {}
                : { y: [0, 8, 0], opacity: [1, 0.4, 1] }
            }
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </span>
      </motion.a>
    </section>
  )
}
