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
          I want to give special acknowledgments to <span className="text-gold italic">Gwendolyn Crain</span> and{' '}
          <span className="text-gold italic">Nathaniel Victoriano</span> for being amazing second years, guiding my path,
          and leading my way when I needed help. I truly believe their help greatly contributed to my success at this
          conference.
        </p>
        <p className="mt-4">
          Lastly, I want to recognize <span className="text-gold italic">Kokona Uetake</span>
          &apos;s bravery at this conference. It is an inspiration and honor to be able to work with her.
        </p>
      </motion.div>
    </section>
  )
}
