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
            Short version of what happened: prep, committee, what I still carry with me.
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
          &ldquo;NMUN is how I scratch my Speech and Debate itch&rdquo; was the most accurate quote I have heard about
          myself. I was confident speech and debate would back me in the interview, but what caught me by surprise was the
          impromptu speech of 10 minutes, louder volume, and leading people who were there ready to lead. I was selected for
          Lone Star that March. Without sacrificing weekends like Speech and Debate, I sacrificed Mondays in the fall.
          Mondays at University Park with every campus: Dr. Howard and Dr. Lambert on position papers and UN history; Dr.
          Tiffee and Professor Garcia on speeches and how the Model UN game operates. Bryant and I were{' '}
          <strong className="font-semibold text-navy dark:text-gold">Survival International</strong> in UNESCO with the
          Philippines. We had some trouble getting position papers done on time, but we got them done in the end.
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
          As spring semester approached, I was still unfamiliar with everyone because I could not attend the team retreat
          in Galveston. I deeply regret it to this day, missing the opportunity to bond with these amazing people. We
          walked the week day by day, with excursions like MoMA, Liberty, St. Patrick&apos;s, and Little Italy, and we were
          coached to network the first night and pick a meeting place. We also covered working papers, speeches, and
          holding a group together on a long day three. Three weeks before the
          conference, Bryant and I were switched. I thought it was my performance in class; it was not. The coaches believed
          Gwen and I would have better chemistry. My new partner was Gwen. With three weeks left I still felt lost, so I did
          not hesitate to ask questions.
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
          March 24th, 2024, I thought I would be a lot more nervous because I still had no clue what I was doing. I was not
          nervous for my first session that night. I tell myself it was the suits, the same way I depend on myself in speech
          and debate when things get tough.{' '}
          <span className="text-charcoal/85 dark:text-cream/80">
            &ldquo;The people who win in life aren&apos;t the one who works the hardest, it&apos;s the ones who knows how
            to play the game&rdquo;
          </span>{' '}
          was something our coach told us. I believe playing the game can take you to the top, and being genuine helps you
          stay there. In informals I got to know people I had talked to, not only clauses.
          I gave my agenda speech with Gwen on topic order and where to meet us in the room. With Bryant and Nate we formed
          a working group, and Gwen immediately took the group selfie so people would feel more inclined to stay. Debrief
          sessions with Dr. Tiffee, checklists, filmed speeches, and room for questions kept me sharp. I fully believe that
          contributed a lot to Gwen and I&apos;s success.
        </p>
        <InlinePhoto
          src={selfieSrc}
          alt="Selfie: working group tactic on the committee floor"
          variant="polaroid"
          pathHint="src/assets/gallery/selfie-working-group.jpg"
          polaroidCaptionClassName="mt-4 px-1 text-center font-sans text-sm italic leading-relaxed text-sage dark:text-sage"
          caption="Gwen immediately took a group selfie to make people feel more inclined to stay in this working group."
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
          Day 2 and day 3 are the two toughest days in my opinion; people can still leave the working group we made on day
          one. Nate has a natural charm in informals; I found my strength in public speaking and kept Survival International
          in the conversation. I used pause and power and change of tempo from Carnegie and slowed down for a diverse room.
          I asked Gwen which countries she had talked to who would agree on helping indigenous communities, and we gave
          mentions in our speeches until others called for indigenous populations too. Survival International kept getting
          mentions in committee. Day 2 and day 3 ended when Gwen and I met Kokona from Japan.
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
              Kokona didn&apos;t speak English very well and was very nervous to give a speech. Gwen mostly helped her
              with writing the speech itself while Dr. Tiffee helped her with delivery. Although I wasn&apos;t much help, I
              wanted to help her feel better and talked to her after the day ended.
            </p>
            <p>
              English is my second language as well. I felt proud, that Kokona has the courage to give a speech here. Using the tiniest bit of
              Japanese I know; I said &ldquo;Oyasuminasai&rdquo; which translate to &ldquo;goodnight&rdquo; in Japanese as
              my way of returning the courage she gave to this committee by speaking English.
            </p>
          </div>

          <blockquote className="pull-quote mt-14 text-charcoal dark:text-cream">
            In my mind, inspiring stories from people like Kokona is what I am here for, and I don&apos;t want to put a
            title or an award on it. I want it to be genuine.
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
          The last day was peer awards and resolution voting, and I wouldn&apos;t have been upset if Gwen and I
          didn&apos;t win Best in Committee. We were announced winners; Gwen seemed very happy, but I would&apos;ve felt
          just as good either way. Having the Indigenous community&apos;s name on 3 out of 4 resolutions passed was truly an
          accomplishment that made Gwen extremely happy. All resolutions passed; I was very happy with my committee and
          grateful to work with everyone.
        </p>
      </NarrativeBlock>
    </div>
  )
}
