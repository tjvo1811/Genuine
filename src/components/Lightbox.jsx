import { useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Lightbox({ open, items, index, onClose, onPrev, onNext }) {
  const item = items[index]
  const total = items.length

  const handleKey = useCallback(
    (e) => {
      if (!open) return
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    },
    [open, onClose, onPrev, onNext],
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [handleKey])

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <AnimatePresence>
      {open && item && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery"
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            className="absolute inset-0 bg-charcoal/85 dark:bg-black/90"
            onClick={onClose}
            aria-label="Close gallery"
          />
          <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            className="relative z-10 max-h-[90vh] max-w-5xl overflow-hidden rounded-lg bg-cream shadow-2xl dark:bg-navy"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative flex max-h-[80vh] items-center justify-center bg-black/5 dark:bg-black/30">
              {total > 1 && (
                <>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation()
                      onPrev()
                    }}
                    className="absolute left-2 z-20 rounded-full bg-charcoal/60 px-3 py-2 text-sm text-white hover:bg-charcoal md:left-4"
                    aria-label="Previous image"
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation()
                      onNext()
                    }}
                    className="absolute right-2 z-20 rounded-full bg-charcoal/60 px-3 py-2 text-sm text-white hover:bg-charcoal md:right-4"
                    aria-label="Next image"
                  >
                    →
                  </button>
                </>
              )}
              <img
                src={item.url}
                alt={item.alt}
                className="max-h-[80vh] w-auto max-w-full object-contain"
              />
            </div>
            <div className="flex items-center justify-between gap-4 border-t border-navy/10 px-4 py-3 dark:border-white/10">
              <p className="flex-1 text-sm text-charcoal/85 dark:text-cream/85">{item.caption}</p>
              <span className="shrink-0 text-xs tabular-nums text-navy/70 dark:text-gold/80">
                {index + 1} / {total}
              </span>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="absolute right-3 top-3 rounded-full bg-charcoal/70 px-3 py-1 text-xs font-medium text-white hover:bg-charcoal"
            >
              Esc
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
