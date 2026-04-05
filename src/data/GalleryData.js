/**
 * Images live in src/assets/gallery/ (see filenames below).
 * Resolved at build time via import.meta.glob in galleryAssets.js
 */
export const galleryItems = [
  {
    id: 'kokona',
    filename: 'kokona-moment.jpg',
    alt: 'Photo with Kokona at the conference',
    caption: 'With Kokona, a moment from committee.',
    category: 'Conference',
  },
  {
    id: 'selfie-wg',
    filename: 'selfie-working-group.jpg',
    alt: 'Selfie: working group tactic on the committee floor',
    caption: 'Working group tactic: the selfie that pulled people in.',
    category: 'Conference',
  },
  {
    id: 'team-kokona',
    filename: 'team-after-kokona-speech.jpg',
    alt: 'Selfie with Nate, Bryant, Gwen, Kokona, and me after we helped with her speech',
    caption:
      'Nate, Bryant, Gwen, Kokona, and I, after we helped with her speech and nerves.',
    category: 'Team',
  },
  {
    id: 'speech-placard',
    filename: 'speech-survival-placard.jpg',
    alt: 'Me giving a speech while Gwen holds the Survival International placard',
    caption: 'Giving a speech while Gwen holds the Survival International placard.',
    category: 'Conference',
  },
  {
    id: 'committee-full',
    filename: 'committee-full.jpg',
    alt: 'Full UNESCO committee group photo',
    caption: 'The full committee I was part of.',
    category: 'Conference',
  },
  {
    id: 'ss-wg',
    filename: 'screenshot-working-group.png',
    alt: 'Working group during the session',
    caption: 'Our working group in session.',
    category: 'Conference',
  },
  {
    id: 'ss-liberty',
    filename: 'screenshot-statue-liberty.png',
    alt: 'Gwen and me at the Statue of Liberty',
    caption: 'Gwen and I at the Statue of Liberty.',
    category: 'NYC',
  },
  {
    id: 'ss-food',
    filename: 'screenshot-food-day-one.png',
    alt: 'Gwen and me getting food after the first day',
    caption: 'Getting something to eat after the first day.',
    category: 'NYC',
  },
  {
    id: 'ss-best',
    filename: 'screenshot-best-committee.png',
    alt: 'Best in Committee photos with the team',
    caption:
      'Best in Committee: Gwen and I, and Nate and Bryant, with the team.',
    category: 'Award',
  },
  {
    id: 'ss-un',
    filename: 'screenshot-un-building.png',
    alt: 'Gwen and me at the UN building',
    caption: 'Gwen and I at the UN building.',
    category: 'NYC',
  },
  {
    id: 'kokona-japan-reunion',
    filename: 'kokona-japan-reunion.png',
    alt: 'Photo with Kokona in Japan, reuniting after the conference',
    caption: 'With Kokona in Japan, a couple of years after NMUN-NY 2024.',
    category: 'Reconnection',
  },
]

export const galleryCategories = ['All', 'Conference', 'Team', 'NYC', 'Award', 'Reconnection']
