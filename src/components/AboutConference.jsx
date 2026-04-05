import { motion } from 'framer-motion'

const fadeUp = (reducedMotion) => ({
  initial: reducedMotion ? false : { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: reducedMotion ? 0.01 : 0.55, ease: [0.22, 1, 0.36, 1] },
})

const facts = [
  ['Conference', 'NMUN-NY 2024'],
  ['Location', 'Hilton Midtown Manhattan'],
  ['Committee', 'UNESCO'],
  ['Delegation', 'Survival International (NGO)'],
  ['Partner', 'Gwendolyn Crain'],
  ['Committee size', '~90-110 delegates'],
  ['Result', 'Best in Committee'],
]

export default function AboutConference({ reducedMotion }) {
  const anim = fadeUp(reducedMotion)
  return (
    <section id="about" className="section-divider scroll-mt-20 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          {...anim}
          className="font-display text-3xl font-semibold text-navy dark:text-cream sm:text-4xl"
        >
          About the conference
        </motion.h2>
        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div {...anim} className="space-y-5 text-lg leading-relaxed text-charcoal/90 dark:text-cream/85">
            <p>
              NMUN-NY is huge: <strong className="font-semibold text-navy dark:text-gold">4,500+</strong> delegates,{' '}
              <strong className="font-semibold text-navy dark:text-gold">57%</strong> international,{' '}
              <strong className="font-semibold text-navy dark:text-gold">107</strong> countries (NMUN, 2024). I was{' '}
              <strong className="font-semibold text-navy dark:text-gold">Survival International</strong> with the{' '}
              <strong className="font-semibold text-navy dark:text-gold">Philippines</strong> in{' '}
              <strong className="font-semibold text-navy dark:text-gold">UNESCO</strong>, roughly{' '}
              <strong className="font-semibold text-navy dark:text-gold">90-110</strong> people in the room, mostly women.
              Details are in the box.
            </p>
          </motion.div>

          <motion.aside
            {...anim}
            className="border border-navy/25 bg-white/60 p-6 font-mono text-sm shadow-sm dark:border-gold/25 dark:bg-navy/40 sm:p-8"
          >
            <p className="mb-4 border-b border-navy/15 pb-2 text-xs uppercase tracking-[0.2em] text-navy/70 dark:border-gold/20 dark:text-gold/80">
              Conference facts
            </p>
            <dl className="space-y-3">
              {facts.map(([k, v]) => (
                <div key={k} className="grid grid-cols-[minmax(0,38%)_1fr] gap-x-3 gap-y-1 border-b border-navy/10 pb-3 last:border-0 dark:border-white/10">
                  <dt className="text-navy/65 dark:text-gold/75">{k}</dt>
                  <dd className="text-charcoal dark:text-cream">{v}</dd>
                </div>
              ))}
            </dl>
          </motion.aside>
        </div>
      </div>
    </section>
  )
}
