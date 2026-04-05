import { useState, useEffect } from 'react'

function CameraIcon() {
  return (
    <svg className="h-12 w-12 text-charcoal/35 dark:text-cream/35" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.25}
        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.25} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}

export default function InlinePhoto({
  src,
  alt,
  caption,
  variant = 'polaroid',
  pathHint,
  polaroidCaptionClassName,
}) {
  const [failed, setFailed] = useState(!src)

  useEffect(() => {
    setFailed(!src)
  }, [src])

  const showImage = src && !failed

  const inner = showImage ? (
    <img
      src={src}
      alt={alt}
      className="block h-auto w-full max-h-[min(72vh,560px)] object-contain"
      loading="lazy"
      onError={() => setFailed(true)}
    />
  ) : (
    <div className="flex min-h-[200px] flex-col items-center justify-center gap-3 bg-neutral-200/80 px-4 py-10 text-center dark:bg-white/10">
      <CameraIcon />
      <p className="font-mono text-xs text-charcoal/60 dark:text-cream/55">{pathHint || 'Image not found'}</p>
    </div>
  )

  if (variant === 'polaroid') {
    return (
      <figure className="mx-auto my-10 w-full max-w-full">
        <div className="mx-auto max-w-md overflow-hidden sm:max-w-lg">
          <div
            className="rotate-[-1.5deg] bg-white p-3 pb-5 shadow-lg ring-1 ring-black/5 dark:bg-cream/95 dark:ring-white/10 sm:rotate-[-2deg]"
          >
            <div className="flex min-h-[12rem] items-center justify-center overflow-hidden bg-neutral-100 dark:bg-navy/30">
              {inner}
            </div>
            {caption != null && (
              <figcaption
                className={
                  polaroidCaptionClassName ||
                  'mt-4 px-1 text-center font-hand text-xl leading-snug text-charcoal/85 dark:text-charcoal'
                }
              >
                {caption}
              </figcaption>
            )}
          </div>
        </div>
      </figure>
    )
  }

  return (
    <figure className="mx-auto my-10 w-full max-w-2xl">
      <div className="flex min-h-[14rem] items-center justify-center overflow-hidden rounded-sm border border-navy/20 bg-white shadow-md dark:border-gold/25 dark:bg-navy/40">
        {inner}
      </div>
      {caption != null && (
        <figcaption className="mt-3 text-center font-sans text-sm italic text-charcoal/75 dark:text-cream/75">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
