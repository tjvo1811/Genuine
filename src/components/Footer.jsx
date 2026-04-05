import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const references = [
  {
    text: 'Benmira, S. (2021). Evolution of Leadership Theory. BMJ Leader, 5(1).',
    href: 'https://bmjleader.bmj.com/content/leader/5/1/3.full.pdf',
  },
  {
    text: 'Carnegie, D., & Esenwein, J. B. (2018). The Art of Public Speaking. Clydesdale Press.',
    href: null,
  },
  {
    text: 'Chen, G.-M. (2010). The Impact of Intercultural Sensitivity on Ethnocentrism and Intercultural Communication Apprehension. DigitalCommons@URI.',
    href: 'https://digitalcommons.uri.edu/com_facpubs/16/',
  },
  {
    text: 'Conquergood, D. (2003). Performing as a Moral Act: Ethical Dimensions of the Ethnography of Performance.',
    href: 'http://www.csun.edu/~vcspc00g/603/PerfasaMoralAct.pdf',
  },
  {
    text: 'Cooper, R., & Lilyea, B. (2022). I\'m Interested in Autoethnography, but How Do I Do It? The Qualitative Report.',
    href: 'https://nsuworks.nova.edu/cgi/viewcontent.cgi?article=5288&context=tqr',
  },
  {
    text: 'Harrison, C. (2018). Leadership Theory and Research. Springer.',
    href: 'https://doi.org/10.1007/978-3-319-68672-1',
  },
  {
    text: 'Hieke, S., Takeshita, S., Matsushita, H., & Leigh, K. (2024). NMUN-NY 2024 Background Guide: UNESCO. NMUN.',
    href: 'https://www.nmun.org/assets/documents/conferences/ny/nmun-ny24-bgg-unescor.pdf',
  },
  {
    text: 'Horwitz, E. K., Horwitz, M. B., & Cope, J. (1986). Foreign language classroom anxiety. The Modern Language Journal, 70(2), 125–132.',
    href: 'https://doi.org/10.1111/j.1540-4781.1986.tb05256.x',
  },
  {
    text: 'Ihsan, M. D. (2016). Students\' Motivation in Speaking English. JEES, 1(1).',
    href: 'https://doi.org/10.21070/jees.v1i1.147',
  },
  {
    text: 'Khan, Z., Nawaz, A., & Khan, I. (2016). Leadership Theories and Styles: A Literature Review. IISTE.',
    href: 'https://core.ac.uk/download/pdf/234696192.pdf',
  },
  {
    text: 'Mercader-Rubio, I., Gutiérrez Ángel, N., Teixeira, A., & Brito-Costa, S. (2023). Relationships between Informal Sports Leadership and Emotional Intelligence. Sustainability, 15(19), 14571.',
    href: 'https://doi.org/10.3390/su151914571',
  },
  {
    text: 'Nasution, S. S., & Sukmawati, N. N. (2019). Model United Nations: Improving the Students\' Speaking Skill. JEES, 4(2), 47–52.',
    href: 'https://doi.org/10.21070/jees.v4i2.2100',
  },
  {
    text: 'NMUN. (2024). About Us: By the Numbers.',
    href: 'https://www.nmun.org/about-nmun/by-the-numbers.html',
  },
  {
    text: 'Novinger, T. (2001). Intercultural Communication: A Practical Guide. University of Texas Press.',
    href: null,
  },
  {
    text: 'Tajfel, H., & Turner, J. C. (1979). An Integrative Theory of Intergroup Conflict. In W. G. Austin & S. Worchel (Eds.), The Social Psychology of Intergroup Relations (pp. 33–47). Brooks/Cole.',
    href: null,
  },
  {
    text: 'Uhl-Bien, M. (2006). Relational Leadership Theory: Exploring the Social Processes of Leadership and Organizing. The Leadership Quarterly, 17(6), 654–676.',
    href: 'https://doi.org/10.1016/j.leaqua.2006.10.007',
  },
  {
    text: 'Wang, L., & Takai, J. (n.d.). Foreign Language Anxiety and Intercultural Communication Apprehension. Kent State University.',
    href: 'https://www-s3-live.kent.edu/s3fs-root/s3fs-public/file/CV_Wang.pdf',
  },
  {
    text: 'UNESCO_FRANCE.PDF. (2024). Google Drive.',
    href: 'https://drive.google.com/file/d/1s5mMvuxWVqTalK6yrU9mnUuJ-KnVGqlt/view',
  },
  {
    text: 'UNESCO_URUGUAY.PDF. (2024). Google Drive.',
    href: 'https://drive.google.com/file/d/1_EGYJoJ2PVawEaZUKt-ftnlS6ZPWr707/view',
  },
]

const contextOnly = [
  'Amabile, T. M., Schatzel, E. A., Moneta, G. B., & Kramer, S. J. (2004). Leader Behaviors and the Work Environment for Creativity: Perceived Leader Support. The Leadership Quarterly, 15(1), 5–32.',
  'Dess, G. G., & Picken, J. C. (2000). Changing Roles: Leadership in the 21st Century. Organizational Dynamics, 28(3), 18–34.',
  'Dobbins, G. H., & Platz, S. J. (1986). Sex Differences in Leadership: How Real Are They? Academy of Management Review, 11(1), 118–127.',
]

export default function Footer() {
  const [open, setOpen] = useState(false)

  return (
    <footer className="section-divider mt-12 border-t border-navy/20 bg-charcoal/5 px-4 py-12 dark:border-white/10 dark:bg-black/20 sm:px-6">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm leading-relaxed text-charcoal/85 dark:text-cream/80">
          Research by Tung Vo, Lone Star College | The Honors College, 2024 | SPCHH: Honors Argumentation and Debate
        </p>
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="mt-6 text-sm font-medium text-navy underline decoration-gold/60 underline-offset-4 hover:text-gold dark:text-gold dark:hover:text-cream"
          aria-expanded={open}
        >
          View Full References
        </button>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden text-left"
            >
              <ol className="mt-8 list-none space-y-3 pl-0 text-xs leading-relaxed text-charcoal/80 dark:text-cream/75 sm:text-sm">
                {references.map((r, i) => (
                  <li key={i} className="grid grid-cols-[minmax(1.75rem,auto)_1fr] gap-x-3 sm:grid-cols-[minmax(2rem,auto)_1fr]">
                    <span className="pt-0.5 text-right tabular-nums text-charcoal/70 dark:text-cream/65">{i + 1}.</span>
                    <span className="min-w-0">
                      {r.href ? (
                        <a href={r.href} className="text-navy hover:underline dark:text-gold" target="_blank" rel="noreferrer">
                          {r.text}
                        </a>
                      ) : (
                        r.text
                      )}
                    </span>
                  </li>
                ))}
              </ol>
              <p className="mt-8 text-xs font-semibold uppercase tracking-wide text-navy/70 dark:text-gold/80">
                Also consulted for context (not directly cited in text)
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-xs text-charcoal/75 dark:text-cream/70 sm:text-sm">
                {contextOnly.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
                <li>
                  Mboyo, J. (2021). Research in Educational Administration & Leadership. ERIC.{' '}
                  <a
                    href="https://files.eric.ed.gov/fulltext/EJ1324052.pdf"
                    className="text-navy hover:underline dark:text-gold"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://files.eric.ed.gov/fulltext/EJ1324052.pdf
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </footer>
  )
}
