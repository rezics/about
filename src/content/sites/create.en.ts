// 創作與發行 /engine/create/: copy for the v3 module page (plan in src/sites/community/SITE.md,
// sources in src/sites/community/facts.md).
import type { MiniSite } from '../schema';
import type { ModuleFamilyStrings, ModuleSection, ModuleStatement } from './community';

export interface CreateStrings {
  hero: { headline: string; lede: string; imageAlt: string };
  contentsLabel: string;
  writing: ModuleSection;
  world: ModuleSection;
  chapters: ModuleSection;
  editions: ModuleSection & {
    specimen: {
      label: string;
      items: { title: string; value: string; unit: string; note: string }[];
      caption: string;
    };
  };
  copyright: ModuleStatement;
  rights: ModuleSection;
  sell: ModuleSection;
  /** The statement of account: its lines and what fills each, never amounts or shares. */
  account: ModuleSection & {
    rows: { label: string; detail: string; kind: 'paid' | 'deduct' | 'net' | 'share' }[];
    deduct: string;
    caption: string;
  };
  /** The module family (SITE.md): the ring's three labels and the page's closing line. */
  family: ModuleFamilyStrings;
}

const strings: CreateStrings = {
  contentsLabel: 'On this page',
  hero: {
    headline: 'Track every draft, edition, and right.',
    lede: 'Write, schedule, and publish chapters here. Each release is archived as its own record, with translations and licenses attributed individually. Sell books and games directly, with every deduction listed in the statement.',
    imageAlt: 'Two stacks of paper bound along one edge with dark gray strips, layered so their colored edges show.',
  },
  writing: {
    label: 'Writing',
    headline: 'Find every saved version.',
    lead: 'Long-form writing opens the full toolbar. Replies keep only the most useful formatting tools. On a phone, the toolbar stays above the keyboard, which remains open when you use it. Long chapters are as easy to write as short replies.',
    facts: [
      { title: 'Every save is a revision', body: 'Each save preserves an exact version. Clearing a chapter also saves a blank revision, but blank chapters cannot be published.' },
      { title: 'Publish in your time zone', body: 'Schedule a chapter for Friday at 8 p.m. and it publishes at that time in your time zone. Scheduling runs on the server, so your computer can be off.' },
      { title: 'Set clear roles for collaborators', body: 'When you invite someone to write with you, grant reading, suggesting, editing, and publishing permissions separately. Being able to edit does not mean they can publish. Reader and collaborator feedback stays in one inbox.' },
      { title: 'Take your whole work with you', body: 'Back up a complete work and export it in a format that preserves all formatting. Plain text is available as a simpler option. You can also import older plain-text and Markdown drafts and continue writing.' },
      { title: 'Annotations and emphasis', body: 'Add notes such as zhuyin or furigana in the editor, along with emphasis marks. Japanese works support vertical reading.' },
    ],
  },
  world: {
    label: 'Worldbuilding',
    headline: 'A world of your own, beside your draft.',
    lead: 'Use editable templates for characters, places, groups, events, objects, and lore. Keep them beside your draft, where only you can see them.',
    facts: [
      { title: 'Maps', body: 'Mark places on maps you draw yourself.' },
      { title: 'Relationship maps', body: 'Connect characters and show how they relate.' },
      { title: 'Timelines', body: 'Add events even when their dates are uncertain. Every diagram also has a list you can read item by item.' },
      { title: 'Share selected pages', body: 'Choose a few pages to publish to the work’s Wiki+. Readers cannot see your private revisions.' },
      { title: 'Continuity assistant', body: 'An optional assistant only flags conflicts between your notes and draft. You still write the chapters yourself.' },
      { title: 'No subscription required', body: 'Worldbuilding and complete exports that can be imported again do not require a paid subscription.' },
    ],
  },
  chapters: {
    label: 'Chapters',
    headline: 'A chapter is a post in a book.',
    lead: 'Chapters do not become separate works. The book is the work, with its ratings, tracking, and author credits. Each chapter is a post listed in the book’s table of contents.',
    facts: [
      { title: 'One chapter in two places', body: 'The same chapter can appear in both a serial and a collection. Its text and comments are stored once, while reading progress is tracked separately in each place.' },
      { title: 'Images or polls on their own', body: 'Publish a post with only an image or a poll. It does not need accompanying text.' },
      { title: 'Author’s notes are not part of the text', body: 'An author’s note at the end of a chapter is an attachment to the post. It does not count toward the word count, is skipped in translation, and is excluded from formal releases.' },
      { title: 'Continue with the next chapter', body: 'The “Continue” section on the home page opens the next unread chapter. Chapter discussion stops at each reader’s progress, and spoilers beyond it stay hidden.' },
      { title: 'Comments stay with the text', body: 'Comments and quotes record the revision and passage they refer to. If the author edits later, they stay beside the same sentences.' },
    ],
  },
  editions: {
    label: 'Editions',
    specimen: {
      label: 'Edition example',
      items: [
        { title: 'Master version', value: '13', unit: 'chapters', note: 'Continues to update as chapters are added' },
        { title: 'Archived first edition', value: '12', unit: 'chapters', note: 'Preserves the content as it was released' },
      ],
      caption: 'After chapter 13 is added to the master version, the first edition still contains only the first 12 chapters.',
    },
    headline: 'Archive each release. Record later changes separately.',
    lead: 'Every work has one master version that keeps growing as chapters and languages are added. A formal release is an archived record of what was actually published at that time. Later translations and additions get their own records, linked to their sources.',
    facts: [
      { title: 'Master version', body: 'Every work has one master version, where all readers begin. New chapters and languages are added here without changing the work’s identity.' },
      { title: 'Online serial', body: 'An online serial is a type of release. Since its content changes, its original URL and dated snapshots are recorded, with each snapshot archived separately.' },
      { title: 'Fixed edition', body: 'Choose published content and archive it as a fixed edition. New chapters added later will not appear in it.' },
      { title: 'One edition, many outlets', body: 'An edition can appear in many stores and on many sites while remaining one release. Reposts made without permission get separate records and are never merged into the official edition.' },
      { title: 'Translations', body: 'A translation is a new content version linked to the revision or edition it was translated from. If the source is unclear, it is marked as unknown rather than guessed.' },
      {
        title: 'Reader translations',
        body: 'A reader translation of an online work is recorded as a virtual release, with its coverage stated, such as “the first 20 of 100 chapters” (example). A virtual release is an organizational record on REZICS, not a claim that this edition was published.',
      },
    ],
    note: 'Each release is marked as official, unofficial, virtual, discontinued, or canceled. Its record remains when its status changes.',
  },
  copyright: {
    statement: 'Making a work public',
    sub: 'does not grant permission to repost, sell, translate, or train AI on it.',
  },
  rights: {
    label: 'Translations and rights',
    headline: 'Credit translators. State each right clearly.',
    lead: 'Who may translate, whether a translation can be public, and how much AI was used in a work are never left to assumption. Each declaration records who made it and when.',
    facts: [
      {
        title: 'A limited service license',
        body: 'You keep your copyright. By uploading content to REZICS, you authorize REZICS to store, reproduce, transmit, display, process, and reformat it only to provide the service you use. This license does not cover advertising, selling your private content, creating new commercial editions, or unrestricted AI training.',
      },
      { title: 'Each translation has its own credit', body: 'A work can have several translations, chosen separately by readers and Realms. Each translation is credited to its translator. Authors can refuse a link from the original work’s page to a translation and can file a rights appeal.' },
      {
        title: 'Public access needs a basis',
        body: 'Reader translations are private by default. To make one visible, there must be a recorded reason: the original is in the public domain, it uses an open license that permits translation, the author has given consent, or the author has already publicly allowed translations. A community vote cannot make a translation public.',
      },
      {
        title: 'Track progress passage by passage',
        body: 'Each translated passage has a status: draft, translated, reviewed, or final. If the original passage changes, its translation is marked “needs update” and stays in place rather than moving under a new sentence.',
      },
      {
        title: 'License declarations',
        body: 'Each license declaration states what is licensed, which version of which terms applies, who made the declaration, when, and what it covers. Unknown details are marked unknown. A declaration is not legal confirmation of a license. Authors can also publish a standing license, such as permission to translate. If it is withdrawn, the original declaration is not rewritten.',
      },
      {
        title: 'AI use declarations',
        body: 'Text, images, and translations each state whether AI was not used, assisted, or generated the content. Human review is recorded separately, so readers can choose what they want to see.',
      },
    ],
  },
  sell: {
    label: 'Publishing',
    headline: 'Sell books and games directly to readers.',
    lead: 'Creators with a REZICS agreement can sell books and games directly to readers. Books come as EPUB or PDF files. Games and visual novels are downloadable files. None use DRM or require a launcher.',
    facts: [
      { title: 'Know the terms before buying', body: 'Before checkout, see the edition, language, compatibility requirements, price, taxes, seller, license, and refund terms.' },
      { title: 'Preview, update, and download again', body: 'Readers can preview sample chapters. Updates and re-downloads after purchase follow the purchase terms.' },
      { title: 'Your purchase remains yours', body: 'If a work is removed or its agreement ends, buyers keep their license under the original terms and applicable law.' },
      { title: 'Reader privacy', body: 'Buying your work does not give you access to a reader’s reading history or library. You receive only the aggregated data needed for accounting.' },
      { title: 'Agreements cover publishing only', body: 'A publishing agreement lets REZICS host, convert, promote, and sell a work. Translation, adaptations, new editions, and AI training require separate consent.' },
      { title: 'Sales for contracted creators', body: 'This is not an open marketplace. Explicit sexual content and works rated R18 or R18G are not sold here.' },
    ],
  },
  account: {
    label: 'Accounting',
    headline: 'See every line in your statement.',
    lead: 'Net revenue is the amount actually received after collected taxes, agreed payment and transaction fees, refunds, reversals, and chargebacks are deducted. Operating costs such as hosting, salaries, and marketing, as well as REZICS income tax, are not deductions.',
    rows: [
      { label: 'Reader payment', detail: 'The amount paid by the reader, including tax', kind: 'paid' },
      { label: 'Taxes', detail: 'Taxes collected and remitted as required by law', kind: 'deduct' },
      { label: 'Payment and transaction fees', detail: 'Documented payment processing fees, plus exchange and dispute fees listed in the agreement', kind: 'deduct' },
      { label: 'Refunds and disputed payments', detail: 'Refunded, reversed, and charged-back amounts', kind: 'deduct' },
      { label: 'Net revenue', detail: 'Payments after agreed transaction deductions', kind: 'net' },
      { label: 'Creator share', detail: 'Paid to you at the rate in the agreement', kind: 'share' },
      { label: 'REZICS share', detail: 'Retained by the platform at the rate in the agreement', kind: 'share' },
    ],
    deduct: 'Deduction',
    caption: 'Example statement: each deduction has its own line, none is counted twice, and amounts are calculated per transaction.',
  },
  family: {
    closing: 'Write your work. REZICS records every edition and every payment.',
  },
};

export default {
  id: 'create',
  base: '/engine/create/',
  name: 'Create and publish',
  theme: { module: 'create' },
  pages: [
    {
      slug: '',
      label: 'Overview',
      meta: {
        title: 'Create and publish: drafts, editions, and accounting',
        description:
          'Write, schedule, and publish chapters on REZICS, with every save preserved as a revision. Archive each release separately, credit translations to their translators, and state each right. Sell books and games directly with every deduction listed in the statement.',
      },
    },
  ],
  strings,
} satisfies MiniSite<CreateStrings>;
