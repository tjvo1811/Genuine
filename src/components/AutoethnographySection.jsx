import { motion } from 'framer-motion'
import NarrativeBlock from './NarrativeBlock'
import InlinePhoto from './InlinePhoto'
import { resolveGalleryUrl } from '../utils/galleryAssets'

const selfieSrc = resolveGalleryUrl('selfie-working-group.jpg')
const kokonaSrc = resolveGalleryUrl('kokona-moment.jpg')

export default function AutoethnographySection({ reducedMotion }) {
  const kokonaMotion = {
    initial: reducedMotion ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: reducedMotion ? 0.01 : 0.55, ease: [0.22, 1, 0.36, 1] },
  }

  return (
    <div id="story" className="scroll-mt-20">
      <div className="section-divider px-4 pb-4 pt-16 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <motion.h2
            {...kokonaMotion}
            className="font-display text-3xl font-semibold text-navy dark:text-cream sm:text-4xl"
          >
            The autoethnography
          </motion.h2>
          <p className="mt-3 text-charcoal/80 dark:text-cream/75">
            Short version of what happened: prep, committee, the parts I still think about.
          </p>
        </div>
      </div>

      <NarrativeBlock
        id="narrative-fall"
        label="Fall Semester 2023"
        title="Fall: Preparing"
        bgClass="bg-cream dark:bg-navy"
        reducedMotion={reducedMotion}
      >
        <p>
          NMUN scratched the same itch as Speech and Debate for me. The interview still threw me: a ten-minute impromptu,
          loud volume, leading people who were also trying to lead. I got picked for Lone Star anyway. Mondays at
          University Park with every campus: Howard and Lambert on papers and UN history; Tiffee and Garcia on speeches
          and procedure. Bryant and I were{' '}
          <strong className="font-semibold text-navy dark:text-gold">Survival International</strong> in UNESCO with the
          Philippines. We barely got our position papers in on time.
        </p>
      </NarrativeBlock>

      <NarrativeBlock
        id="narrative-spring"
        label="Spring Semester 2024"
        title="Spring: Getting Ready"
        bgClass="bg-sage/[0.08] dark:bg-white/[0.03]"
        reducedMotion={reducedMotion}
      >
        <p>
          I skipped the Galveston retreat and still regret it; I barely knew the team. We got a day-by-day playbook
          (MoMA, Liberty, St. Patrick&apos;s, Little Italy) and coached first-night networking: pick a meeting spot, look
          like you mean it. Three weeks out, Bryant and I were split up for Gwen. I thought I was in trouble; I
          wasn&apos;t. I had to gel with someone new while still half-lost, so I asked a lot of questions.
        </p>
      </NarrativeBlock>

      <NarrativeBlock
        id="narrative-day1"
        label="March 24, 2024"
        title="Day 1: No Nerves"
        bgClass="bg-cream dark:bg-navy"
        reducedMotion={reducedMotion}
      >
        <p>
          I expected nerves on day one and felt none, which made no sense because I still didn&apos;t fully get the
          format. The suits helped, same as debate. I leaned relational in informals: actually talk to people, not only
          clauses. Agenda speech: topic order with Gwen, point to where to find us. Bryant, Nate, Gwen, and I pulled
          together a bloc; Gwen grabbed the group selfie our coach had told us to use so people stuck around. Debriefs
          with Tiffee (checklists, filmed speeches) kept me from spiraling.
        </p>
        <InlinePhoto
          src={selfieSrc}
          alt="Selfie: working group tactic on the committee floor"
          variant="polaroid"
          pathHint="src/assets/gallery/selfie-working-group.jpg"
          polaroidCaptionClassName="mt-4 px-1 text-center font-sans text-sm italic leading-relaxed text-sage dark:text-sage"
          caption="Gwen&apos;s move: one selfie, people stayed. (Same idea as in-group bonding in social identity theory.)"
        />
      </NarrativeBlock>

      <NarrativeBlock
        id="narrative-days2-3"
        label="March 25-26, 2024"
        title="Days 2-3: Finding My Strength"
        bgClass="bg-sage/[0.08] dark:bg-white/[0.03]"
        reducedMotion={reducedMotion}
      >
        <p>
          Days two and three were messy: blocs could fracture, Nate was magnetic in informals, and I found my lane in
          speeches. I slowed down on purpose (Carnegie-style pause and tempo) for a mostly international room, synced
          with Gwen on who to shout out, and kept Survival International in the conversation until other delegations
          started echoing indigenous protections too. That stretch ended when we met Kokona from Japan.
        </p>
      </NarrativeBlock>

      {/* Kokona: distinct visual treatment */}
      <motion.section
        {...kokonaMotion}
        id="narrative-kokona"
        className="scroll-mt-20 bg-cream px-4 py-24 dark:bg-navy sm:px-6"
      >
        <div className="mx-auto max-w-2xl">
          <hr className="mb-10 border-0 border-t border-navy/35 dark:border-gold/35" />
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-sage dark:text-sage/90">Day 3</p>
          <h2 className="mt-3 font-display text-3xl italic text-navy dark:text-cream sm:text-4xl">Kokona</h2>

          <InlinePhoto
            src={kokonaSrc}
            alt="Photo with Kokona"
            variant="framed"
            pathHint="src/assets/gallery/kokona-moment.jpg"
            caption="With Kokona, UNESCO committee, NMUN-NY 2024."
          />

          <div className="space-y-5 text-base leading-relaxed text-charcoal/90 dark:text-cream/85">
            <p>
              Her English wasn&apos;t fluent and she was scared to speak in front of that room. Totally different
              stakes than a classroom. Gwen and Dr. Tiffee carried the speech; I wasn&apos;t much use there, so I
              checked in after we wrapped.
            </p>
            <p>
              English is my second language too, so I got why it took guts. I said &quot;Oyasuminasai&quot; on the way
              out, small return for her speaking English for all of us.
            </p>
          </div>

          <blockquote className="pull-quote mt-14 text-charcoal dark:text-cream">
            Inspiring stories from people like Kokona is what I am here for. I don&apos;t want to put a title or an award
            on it. I want it to be genuine.
          </blockquote>
        </div>
      </motion.section>

      <NarrativeBlock
        id="narrative-day4"
        label="March 27, 2024"
        title="Day 4: Best in Committee"
        bgClass="bg-sage/[0.08] dark:bg-white/[0.03]"
        reducedMotion={reducedMotion}
      >
        <p>
          I would have been fine without an award; Kokona-type moments were the point. We won Best in Committee anyway,
          Gwen was thrilled, and indigenous communities landed on three of four resolutions. Good way to close it.
        </p>
      </NarrativeBlock>
    </div>
  )
}
