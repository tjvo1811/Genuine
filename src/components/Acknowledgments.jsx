import { motion } from 'framer-motion'

export default function Acknowledgments({ reducedMotion }) {
  return (
    <section id="thanks" className="scroll-mt-20 px-4 py-20 sm:px-6">
      <motion.div
        initial={reducedMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-2xl font-display text-lg leading-relaxed text-charcoal/90 dark:text-cream/85"
      >
        <p>
          Huge thanks to <span className="text-gold italic">Gwendolyn Crain</span>,{' '}
          <span className="text-gold italic">Nathaniel Victoriano</span>, and{' '}
          <span className="text-gold italic">Kokona Uetake</span>.
        </p>
      </motion.div>
    </section>
  )
}
