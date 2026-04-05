import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { leadershipTheories } from '../data/LeadershipData'

export default function LeadershipFramework({ reducedMotion }) {
  const defaultId = leadershipTheories.find((t) => t.defaultExpanded)?.id ?? leadershipTheories[0].id
  const [expanded, setExpanded] = useState(defaultId)

  return (
    <section id="framework" className="section-divider scroll-mt-20 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          initial={reducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl font-semibold text-navy dark:text-cream sm:text-4xl"
        >
          Which Leadership Theory Won?
        </motion.h2>
        <p className="mt-3 text-charcoal/80 dark:text-cream/75">
          Click a card to expand. Relational leadership arrives highlighted for a reason.
        </p>

        <ul className="mt-10 space-y-4">
          {leadershipTheories.map((t) => {
            const isOpen = expanded === t.id
            const isGold = t.highlight
            return (
              <li key={t.id}>
                <motion.div
                  layout
                  className={`overflow-hidden rounded-lg border transition-colors ${
                    isGold
                      ? 'border-gold bg-gold/10 dark:border-gold dark:bg-gold/15'
                      : 'border-navy/15 bg-white/80 dark:border-white/10 dark:bg-navy/40'
                  } ${isOpen && isGold ? 'ring-2 ring-gold/40' : ''}`}
                >
                  <button
                    type="button"
                    onClick={() => setExpanded(isOpen ? null : t.id)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="font-display text-lg font-semibold text-navy dark:text-cream">{t.shortTitle}</span>
                    <span className="text-xs text-charcoal/50 dark:text-cream/50">{isOpen ? '−' : '+'}</span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: reducedMotion ? 0.01 : 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="space-y-3 border-t border-navy/10 px-5 pb-5 pt-3 dark:border-white/10">
                          <p className="font-display text-base italic text-gold dark:text-gold">{t.headline}</p>
                          <p className="text-sm leading-relaxed text-charcoal/88 dark:text-cream/85">{t.description}</p>
                          <p>
                            <span className="text-xs font-semibold uppercase tracking-wide text-navy dark:text-gold">
                              How it appeared (or didn&apos;t) at NMUN
                            </span>
                            <br />
                            <span className="text-sm leading-relaxed text-charcoal/88 dark:text-cream/85">{t.atNmun}</span>
                          </p>
                          <p className="text-xs text-charcoal/60 dark:text-cream/55">{t.citation}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
