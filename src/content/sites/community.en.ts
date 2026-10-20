// 社群 /engine/community/: copy for the v3 module page (plan in src/sites/community/SITE.md,
// sources in src/sites/community/facts.md). The section shapes are shared with create and trust.
import type { Item, MiniSite } from '../schema';

/** A v3 section: eyebrow, serif heading, lead text and an optional hairline facts list. */
export interface ModuleSection {
  label: string;
  headline: string;
  lead?: string | string[];
  facts?: Item[];
  note?: string;
}

/** The module family's strings: the ring of the five modules and the page's closing line. */
export interface ModuleFamilyStrings {
  closing: string;
}

/** A number written into the rules: a numeral, its unit and one sentence. */
export interface Figure {
  value: string;
  unit: string;
  body: string;
}

/** A large serif statement; `sub` is its muted second half. */
export interface ModuleStatement {
  statement: string;
  sub: string;
  body?: string;
}

export interface CommunityStrings {
  hero: { headline: string; lede: string; imageAlt: string };
  contentsLabel: string;
  person: ModuleSection;
  lead: ModuleSection & {
    /** The post's byline as two kinds of reader see it (示意). */
    specimen: {
      toggleLabel: string;
      toggle: [string, string];
      you: string;
      realm: string;
      follow: string;
      post: string;
      caption: string;
    };
  };
  realm: ModuleSection;
  leave: ModuleStatement;
  ratings: ModuleSection & { figures: Figure[] };
  follow: ModuleSection;
  feed: ModuleSection;
  recognition: ModuleSection;
  /** The module family (SITE.md): the ring's three labels and the page's closing line. */
  family: ModuleFamilyStrings;
}

const strings: CommunityStrings = {
  contentsLabel: 'On this page',
  hero: {
    headline: 'You are the voice. A Realm is the place.',
    lede: 'You have one public identity, with your reviews, lists, and library. Each Realm provides topics, rules, and moderation without claiming your identity as its own.',
    imageAlt: 'Small pieces of paper gather around a larger sheet of dark gray paper, like people around one table.',
  },
  person: {
    label: 'Identity',
    headline: 'One public identity across every Realm.',
    lead: 'You can use a pseudonym, but you cannot impersonate someone else. Your library, lists, reviews, works, translations, and discussions belong to this identity, not to a community. You remain the same person when you move between Realms.',
    facts: [
      { title: 'Names can change without breaking links', body: 'After you change your name, old URLs redirect to the new one. Names that are too similar to someone else’s are blocked.' },
      { title: 'Claim your work', body: 'If your work is already in the catalog, you can claim its identity.' },
      { title: 'Following is one way', body: 'People can follow you without your approval, and you can decline a follow. Each follower chooses which notices to receive and how often.' },
      { title: 'Posts stay where they are', body: 'When you leave a Realm, your posts there keep your name and remain in that Realm.' },
      {
        title: 'When a Realm speaks',
        body: 'A Realm can publish picks and decisions under its own name, through authorized representatives. Each pick links to the decision behind it. Your posts do not become Realm statements just because they appear there.',
      },
    ],
  },
  lead: {
    label: 'Bylines',
    headline: 'A consistent rule for whose name comes first.',
    lead: 'Every post shows your name and the Realm’s name. For people who do not know you yet, your name alone says little, so they see the place first. After they follow you, they see you first.',
    specimen: {
      toggleLabel: 'Switch viewer',
      toggle: ['What followers see', 'What non-followers see'],
      you: 'You',
      realm: 'Fantasy novel book club',
      follow: 'Follow',
      post: 'The ending of volume three was quieter than I expected.',
      caption: 'Example: two readers see different bylines on the same post.',
    },
    facts: [
      { title: 'The reader follows you', body: 'Your name comes before the Realm name.' },
      { title: 'The post is outside a Realm', body: 'Your name comes first.' },
      { title: 'Other cases', body: 'The Realm name comes first, with the follow button on the same line.' },
      { title: 'Realm picks and decisions', body: 'Show the Realm name only, not the person who selected it.' },
    ],
    note: 'The name shown first appears first, with an icon and bold type. The rule stays consistent for every view of a post.',
  },
  realm: {
    label: 'Realm',
    headline: 'A Realm sets the rules for its space.',
    lead: 'Each Realm decides who can join, what new members can see, and how content is moderated. Its settings are shown clearly.',
    facts: [
      { title: 'Three ways to join', body: 'Join openly, request to join, or join by invitation. Joining also follows the Realm. Leaving only removes the follow that came from joining.' },
      { title: 'Rules in every language', body: 'Members who read Chinese see the Chinese version, and members who read Japanese see the Japanese version. Posts can use any language.' },
      {
        title: 'Readable does not mean discoverable',
        body: 'A Realm can be public to read but excluded from search, recommendations, and the sitemap. If a private Realm accepts requests, visitors see only its name, description, rules, and request button.',
      },
      { title: 'Reports become cases', body: 'Reports from members become cases. Decisions include reasons, and the people involved can appeal.' },
      { title: 'Voting and decisions', body: 'A Realm can hold a vote. An approved decision can only do what the Realm is already allowed to do.' },
      { title: 'Platform rules take precedence', body: 'A Realm can set stricter rules than the platform, but not looser ones. Owners cannot close a Realm themselves. The platform can remove it for moderation or rights issues and restore it later.' },
    ],
  },
  leave: {
    statement: 'You can leave a Realm at any time,',
    sub: 'because your identity, library, and lists were never part of it.',
  },
  ratings: {
    label: 'Ratings',
    headline: 'Each rating shows its question, subject, and group.',
    lead: [
      'Every rating identifies three things: the question, the subject, and the group of people who rated it. Ratings for different questions are not averaged together. Episode ratings do not count toward the full series, and a rating for one edition stays with that edition.',
      'Reviews do not need a score, but they name whether they cover the story, translation, narration, or production, and which edition. The site wide view appears first, followed by your Realm and the Realms with the most ratings. When there are no ratings, the page shows neither a zero score nor an empty chart.',
    ],
    figures: [
      { value: '5', unit: 'ratings', body: 'A work needs 5 ratings before its average appears. Until then, the count and distribution are shown with the number still needed.' },
      { value: '10', unit: 'ratings', body: 'A more specific subject, such as a character in one episode, needs 10 ratings before its average appears.' },
      { value: '50', unit: 'ratings', body: 'A work needs 50 ratings to appear in rankings. Rankings disclose their average and weighting.' },
    ],
    note: 'These are default thresholds. Each rating type can adjust them to fit its data.',
  },
  follow: {
    label: 'Follow',
    headline: 'Follow what matters to you.',
    lead: 'Follow people, organizations, Realms, works, topics, lists, and even saved filters. Each follow has three notification levels: all, highlights, or off.',
    facts: [
      { title: 'People and organizations', body: 'New works and announcements are sent by default.' },
      { title: 'Works', body: 'Get a notice when a new chapter or edition appears in a language you understand. Adding a work to “Reading” follows it automatically.' },
      { title: 'Realm', body: 'Announcements and decisions are sent by default. Regular posts stay in the feed.' },
      { title: 'Topics and views', body: 'No notices are sent by default. Each gets its own tab on the home page.' },
      { title: 'Lists', body: 'Lists can mix kinds, with anime and games after a novel. Add notes to each item, choose the order, and export the whole list at any time.' },
      { title: 'Direct notices still reach you', body: 'Even with notifications off, you still receive replies and mentions that concern you directly.' },
    ],
  },
  feed: {
    label: 'Feed',
    headline: 'The newest comes first, and read posts stay marked.',
    lead: 'The “Latest” feed is ordered by time and is never silently rearranged. Other sorting methods show what they are based on.',
    facts: [
      { title: '“Best” scores each Realm separately', body: 'The “Best” sort is scored separately within each Realm. One Realm cannot fill a page, and smaller Realms remain visible.' },
      { title: 'Recommendations explain why', body: 'Recommendations use only your follows, language, and library. Each one explains why it was shown, and you can turn them all off.' },
      { title: 'Mute, ignore, and block', body: 'These are three different actions in one menu.' },
      { title: 'Where to get notices', body: 'Choose separately between the inbox, push notifications, and regular email summaries. Unsubscribe from email with one click.' },
    ],
  },
  recognition: {
    label: 'Levels',
    headline: 'Accepted contributions count. Check-ins do not.',
    lead: 'Each Realm has its own experience points and levels, earned through accepted reviews, corrections, translations, moderation, and creative work that helps the community. Levels cannot be spent or transferred and do not grant moderation powers. Using multiple accounts to inflate your level violates the terms of use.',
  },
  family: {
    closing: 'Give your community a Zone to shape every page.',
  },
};

export default {
  id: 'community',
  base: '/engine/community/',
  name: 'Community',
  theme: { module: 'community' },
  pages: [
    {
      slug: '',
      label: 'Overview',
      meta: {
        title: 'Community: one identity across every Realm',
        description:
          'You have one public identity in REZICS, with your library, lists, and reviews across every Realm. Realms provide a place, rules, and moderation. Ratings name their question and subject, and you choose what to follow and how to receive notices.',
      },
    },
  ],
  strings,
} satisfies MiniSite<CommunityStrings>;
