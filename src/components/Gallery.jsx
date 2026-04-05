import { useState, useMemo, useEffect } from 'react'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'
import { galleryItems, galleryCategories } from '../data/GalleryData'
import { resolveGalleryUrl } from '../utils/galleryAssets'
import Lightbox from './Lightbox'

function PlaceholderIcon() {
  return (
    <svg className="mx-auto h-10 w-10 text-charcoal/25 dark:text-cream/25" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  )
}

export default function Gallery({ reducedMotion }) {
  const [filter, setFilter] = useState('All')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const resolved = useMemo(
    () =>
      galleryItems.map((g) => ({
        ...g,
        url: resolveGalleryUrl(g.filename),
      })),
    [],
  )

  const visible = useMemo(
    () => (filter === 'All' ? resolved : resolved.filter((g) => g.category === filter)),
    [resolved, filter],
  )

  const openable = useMemo(() => visible.filter((g) => g.url), [visible])

  useEffect(() => {
    setLightboxOpen(false)
  }, [filter])

  const openAt = (item) => {
    const idx = openable.findIndex((x) => x.id === item.id)
    if (idx < 0) return
    setLightboxIndex(idx)
    setLightboxOpen(true)
  }

  const lbPrev = () => {
    setLightboxIndex((i) => (i - 1 + openable.length) % openable.length)
  }

  const lbNext = () => {
    setLightboxIndex((i) => (i + 1) % openable.length)
  }

  return (
    <section id="gallery" className="section-divider scroll-mt-20 bg-sage/5 px-4 py-20 dark:bg-white/[0.03] sm:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={reducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl font-semibold text-navy dark:text-cream sm:text-4xl"
        >
          Image gallery
        </motion.h2>

        <div className="mt-8 flex flex-wrap gap-2">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={`rounded-full border px-4 py-1.5 text-sm transition ${
                filter === cat
                  ? 'border-navy bg-navy text-cream dark:border-gold dark:bg-gold/20 dark:text-cream'
                  : 'border-navy/20 text-charcoal/80 hover:border-navy/40 dark:border-white/20 dark:text-cream/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <LayoutGroup>
          <motion.div layout className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
            <AnimatePresence mode="popLayout">
              {visible.map((item) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={reducedMotion ? false : { opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={reducedMotion ? undefined : { opacity: 0, scale: 0.98 }}
                  transition={{ duration: reducedMotion ? 0.01 : 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="mb-4 break-inside-avoid"
                >
                  {item.url ? (
                    <button
                      type="button"
                      onClick={() => openAt(item)}
                      className="group relative block w-full overflow-hidden rounded-lg bg-neutral-200 dark:bg-navy/50"
                    >
                      <img
                        src={item.url}
                        alt={item.alt}
                        loading="lazy"
                        className="h-auto w-full object-contain transition duration-500 group-hover:scale-[1.02]"
                      />
                      <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-0 transition group-hover:opacity-100">
                        <p className="w-full p-3 text-left text-xs text-white">{item.caption}</p>
                      </div>
                    </button>
                  ) : (
                    <div className="flex min-h-[180px] flex-col items-center justify-center rounded-lg border-2 border-dashed border-neutral-300 bg-neutral-100/90 px-4 py-8 text-center dark:border-white/20 dark:bg-navy/30">
                      <PlaceholderIcon />
                      <p className="mt-3 font-sans text-sm font-medium text-charcoal/65 dark:text-cream/65">{item.caption}</p>
                      <p className="mt-1 font-mono text-[10px] text-charcoal/45 dark:text-cream/40">src/assets/gallery/{item.filename}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>
      </div>

      <Lightbox
        open={lightboxOpen && openable.length > 0}
        items={openable}
        index={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onPrev={lbPrev}
        onNext={lbNext}
      />
    </section>
  )
}
