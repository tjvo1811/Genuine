const navLinks = [
  { href: '#about', label: 'Conference' },
  { href: '#theory', label: 'Research' },
  { href: '#story', label: 'Story' },
  { href: '#papers', label: 'Papers' },
  { href: '#reconnection', label: 'Recollection Gallery' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#framework', label: 'Framework' },
  { href: '#takeaways', label: 'Takeaways' },
]

export default function Navbar({ dark, onToggleTheme }) {
  return (
    <header className="sticky top-0 z-[100] border-b border-navy/10 bg-cream/90 backdrop-blur-md dark:border-white/10 dark:bg-navy/90">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a
          href="#hero"
          className="font-display text-xl font-semibold tracking-tight text-navy dark:text-cream"
        >
          Genuine
        </a>
        <div className="hidden flex-wrap items-center justify-end gap-1 md:flex md:gap-2">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="rounded px-2 py-1 text-xs font-medium text-charcoal/80 transition hover:text-navy dark:text-cream/80 dark:hover:text-gold sm:text-sm"
            >
              {label}
            </a>
          ))}
        </div>
        <button
          type="button"
          onClick={onToggleTheme}
          className="ml-auto shrink-0 rounded-full border border-navy/20 px-3 py-1.5 text-xs font-medium text-navy transition hover:bg-navy/5 dark:border-gold/40 dark:text-gold dark:hover:bg-white/5 sm:text-sm"
          aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {dark ? 'Light' : 'Dark'}
        </button>
      </nav>
    </header>
  )
}
