import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'

export default function NarrativeBlock({
  id,
  label,
  title,
  children,
  bgClass = '',
  reducedMotion: reducedMotionProp,
}) {
  const systemReduced = useReducedMotion()
  const reducedMotion = reducedMotionProp !== undefined ? reducedMotionProp : systemReduced
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], reducedMotion ? [0, 0] : [30, -30])

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={reducedMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: reducedMotion ? 0.01 : 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`relative scroll-mt-20 overflow-hidden px-4 py-16 sm:px-6 sm:py-20 ${bgClass}`}
    >
      {!reducedMotion && (
        <motion.div
          style={{ y }}
          className="pointer-events-none absolute inset-0 -z-10 opacity-40"
          aria-hidden
        >
          <div className="h-full w-full bg-gradient-to-b from-transparent via-sage/5 to-transparent dark:via-gold/5" />
        </motion.div>
      )}
      <div className="relative z-10 mx-auto max-w-3xl">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-sage dark:text-sage/90">{label}</p>
        <h2 className="mt-3 font-display text-4xl font-semibold text-navy dark:text-cream sm:text-5xl">{title}</h2>
        <div className="mt-8 space-y-5 text-lg leading-relaxed text-charcoal/90 dark:text-cream/85 sm:text-xl">{children}</div>
      </div>
    </motion.section>
  )
}
