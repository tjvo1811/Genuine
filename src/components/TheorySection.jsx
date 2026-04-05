import { motion } from 'framer-motion'
import { theoryCards } from '../data/TheoryData'

const cardMotion = (reducedMotion) => ({
  initial: reducedMotion ? false : { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: reducedMotion ? 0.01 : 0.5, ease: [0.22, 1, 0.36, 1] },
})

export default function TheorySection({ reducedMotion }) {
  return (
    <section id="theory" className="section-divider scroll-mt-20 bg-sage/10 px-4 py-20 dark:bg-white/[0.04] sm:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          {...cardMotion(reducedMotion)}
          className="font-display text-3xl font-semibold text-navy dark:text-cream sm:text-4xl"
        >
          What the Research Says
        </motion.h2>
        <p
          className="mt-3 max-w-2xl text-charcoal/80 dark:text-cream/75"
        >
          Four ideas I leaned on when I wrote this up. Skim the quotes; skip the rest if you want.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {theoryCards.map((card, i) => (
            <motion.article
              key={card.id}
              {...cardMotion(reducedMotion)}
              transition={{
                duration: reducedMotion ? 0.01 : 0.5,
                delay: reducedMotion ? 0 : i * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col border-l-4 border-navy bg-cream/80 p-6 shadow-sm dark:border-gold dark:bg-navy/50"
            >
              <h3 className="font-display text-xl font-semibold text-navy dark:text-gold">{card.title}</h3>
              <p className="mt-1 text-sm text-sage dark:text-sage/90">{card.authorYear}</p>
              <blockquote className="mt-4 border-l-2 border-gold/60 pl-4 font-display text-base italic leading-relaxed text-charcoal/90 dark:text-cream/90">
                {card.quote}
              </blockquote>
              <p className="mt-4 flex-1 text-base leading-relaxed text-charcoal/85 dark:text-cream/80">
                {card.body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
