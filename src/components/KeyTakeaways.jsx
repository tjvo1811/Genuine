import { motion } from 'framer-motion'

const quotes = [
  'Everyone there could lead. I led with relationships first.',
  'I slowed my speeches down on purpose. People actually heard them.',
  "Kokona mattered more than a plaque. I wanted it to stay genuine.",
]

export default function KeyTakeaways({ reducedMotion }) {
  return (
    <section id="takeaways" className="section-divider scroll-mt-20 bg-sage/10 px-4 py-20 dark:bg-white/[0.04] sm:px-6">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={reducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl font-semibold text-navy dark:text-cream sm:text-4xl"
        >
          Key takeaways
        </motion.h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {quotes.map((q, i) => (
            <motion.figure
              key={i}
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: reducedMotion ? 0 : i * 0.1 }}
              className="border border-gold/50 bg-cream/90 p-6 shadow-sm dark:border-gold/40 dark:bg-navy/50"
            >
              <blockquote className="border-l-4 border-gold pl-4 font-display text-xl italic leading-snug text-charcoal dark:text-cream sm:text-2xl">
                {q}
              </blockquote>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
