import { useState } from 'react'
import { motion } from 'framer-motion'

const columns = [
  {
    id: 'survival',
    title: 'Survival International',
    subtitle: 'Gwen & I (Survival International)',
    body: (
      <>
        <p>
          Our paper opened with a clear NGO stance but the second paragraph stayed vague; we didn&apos;t fully leverage
          Survival International&apos;s on-the-ground identity. Solutions leaned broad: strong principles, fewer
          concrete mechanisms.
        </p>
      </>
    ),
  },
  {
    id: 'france',
    title: 'France',
    subtitle: 'Baylor University',
    body: (
      <>
        <p>
          Two-pronged solutions with explicit institutional hooks: IAEA and UNICRI collaboration named in operational
          terms. The third paragraph carried the weight: specific mandates and follow-up, not just thematic agreement.
        </p>
      </>
    ),
  },
  {
    id: 'uruguay',
    title: 'Uruguay',
    subtitle: 'University of Regensburg',
    body: (
      <>
        <p>
          Narrowed demographic focus made the problem legible in one page. INTERPOL and UNESCO collaboration was tight
          and purposeful. Solutions were highly concise; every sentence earned its place.
        </p>
      </>
    ),
  },
]

const lessons = [
  'Third paragraph = your solutions. That is the whole game.',
  'Specific beats vague.',
  'If you are an NGO, show a small proof-of-concept, not only big principles.',
]

export default function PositionPaperAnalysis({ reducedMotion }) {
  const [hovered, setHovered] = useState(null)

  return (
    <section id="papers" className="section-divider scroll-mt-20 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={reducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: reducedMotion ? 0.01 : 0.55 }}
          className="font-display text-3xl font-semibold text-navy dark:text-cream sm:text-4xl"
        >
          What Makes a Winning Paper
        </motion.h2>
        <p className="mt-3 max-w-2xl text-charcoal/80 dark:text-cream/75">
          I compared our paper to two award winners from the same committee. TL;DR: paragraph three is where you win or
          lose.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {columns.map((col) => {
            const dim = hovered && hovered !== col.id
            const lift = hovered === col.id
            return (
              <motion.article
                key={col.id}
                onMouseEnter={() => setHovered(col.id)}
                onMouseLeave={() => setHovered(null)}
                initial={reducedMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: reducedMotion ? 0.01 : 0.45 }}
                className={`rounded-lg border border-navy/15 bg-white/70 p-6 shadow-sm transition-all duration-300 dark:border-white/10 dark:bg-navy/40 ${
                  dim ? 'opacity-45 scale-[0.98]' : 'opacity-100 scale-100'
                } ${lift ? 'ring-2 ring-gold/50 shadow-md' : ''}`}
              >
                <h3 className="font-display text-xl font-semibold text-navy dark:text-gold">{col.title}</h3>
                <p className="text-sm text-sage dark:text-sage/90">{col.subtitle}</p>
                <div className="mt-4 space-y-3 text-sm leading-relaxed text-charcoal/88 dark:text-cream/85">{col.body}</div>
              </motion.article>
            )
          })}
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {lessons.map((text, i) => (
            <motion.div
              key={i}
              initial={reducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: reducedMotion ? 0 : i * 0.08, duration: 0.45 }}
              className="border-l-4 border-gold bg-sage/5 p-5 dark:bg-white/5"
            >
              <p className="font-display text-lg italic text-charcoal dark:text-cream">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
