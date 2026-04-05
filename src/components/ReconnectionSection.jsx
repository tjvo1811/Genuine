import { motion } from 'framer-motion'
import InlinePhoto from './InlinePhoto'
import { resolveGalleryUrl } from '../utils/galleryAssets'

const reunionSrc = resolveGalleryUrl('kokona-japan-reunion.png')

export default function ReconnectionSection({ reducedMotion }) {
  const motionProps = {
    initial: reducedMotion ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: reducedMotion ? 0.01 : 0.55, ease: [0.22, 1, 0.36, 1] },
  }

  return (
    <motion.section
      {...motionProps}
      id="reconnection"
      className="scroll-mt-20 bg-sage/[0.08] px-4 py-24 dark:bg-white/[0.03] sm:px-6"
    >
      <div className="mx-auto max-w-2xl">
        <hr className="mb-10 border-0 border-t border-navy/35 dark:border-gold/35" />
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-sage dark:text-sage/90">
          About two years later
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold text-navy dark:text-cream sm:text-4xl">
          Recollection Gallery
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/90 dark:text-cream/85">
          A couple of years after NMUN-NY 2024 I was just in Japan and met Kokona again.
        </p>

        <InlinePhoto
          src={reunionSrc}
          alt="Photo with Kokona in Japan, reuniting after the conference"
          variant="framed"
          pathHint="src/assets/gallery/kokona-japan-reunion.png"
          caption="With Kokona in Japan, a couple of years after NMUN-NY 2024."
        />

        <p className="text-sm leading-relaxed text-charcoal/75 dark:text-cream/70">
          Gallery tag for &quot;saw them again somewhere else.&quot; Kokona is the first one.
        </p>
      </div>
    </motion.section>
  )
}
