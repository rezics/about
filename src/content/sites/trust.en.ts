// 信任 /engine/trust/: copy for the v3 module page (plan in src/sites/community/SITE.md). Every
// statement restates docs/contracts, docs/operations or docs/legal in rezics-next (facts.md).
import type { MiniSite } from '../schema';
import type { Figure, ModuleFamilyStrings, ModuleSection } from './community';

export interface TrustStrings {
  hero: { headline: string; lede: string; imageAlt: string };
  contentsLabel: string;
  marks: ModuleSection;
  imports: ModuleSection;
  humans: ModuleSection & { trail: { label: string; stages: string[] } };
  /** Numbers written into the policies: a numeral, its unit and one sentence. */
  numbers: ModuleSection & { figures: Figure[] };
  views: ModuleSection;
  privacy: ModuleSection;
  /** The module family (SITE.md): the ring's three labels and the page's closing line. */
  family: ModuleFamilyStrings;
}

const strings: TrustStrings = {
  contentsLabel: 'On this page',
  hero: {
    headline: 'See who decided and why.',
    lede: 'Facts name their sources, licenses state their terms, and moderation decisions cite the rules and evidence behind them. Reviews, disputes, and appeals are recorded one by one, without replacing earlier records.',
    imageAlt: 'Five gray, ochre, and pale blue sheets layered out of alignment, each edge marked with a blank paper tab.',
  },
  marks: {
    label: 'Records',
    headline: 'New findings add to the record.',
    lead: 'Each record notes its source, verification, and disputes: where it came from, whether it was verified, and whether anyone challenged it. A changed conclusion adds a new finding while earlier records remain in the history.',
    facts: [
      {
        title: 'Sources',
        body: 'Facts and text imported by the platform name their sources and licenses, with a link to the original. Only what the license permits is made public. When the license is unclear, only facts are used. Reviews, blog posts, and comments written by users on other sites are never copied here.',
      },
      { title: 'Unverified', body: 'New items are public at first, marked unverified, with a source attached to each field. Until verified, they do not appear in trusted exports or recommendations.' },
      {
        title: 'Reviewed, and still open to dispute',
        body: 'A review records who made it, which evidence they used, and which version of the rules applied. Review does not mean no one can challenge a result. A field can be marked both reviewed and disputed, with the challenge pending until it is assessed. Missing or outdated information does not count as a rejection.',
      },
      {
        title: 'AI use declarations',
        body: 'Text, images, and translations state whether AI was not used, assisted, or generated the content. Human review is recorded separately. Marking something as reviewed does not change “generated” to “not used,” and an empty declaration is not treated as “not used.”',
      },
      { title: 'Not rated', body: 'Content without an age rating is always marked “Not rated.” It is never treated as suitable for all audiences.' },
      {
        title: 'Automated identities',
        body: 'AI agents must identify themselves as automated, name the operator responsible, and act only within their authorization. They cannot falsify reviews, votes, or other participation. An agent’s output records its inputs and methods. It cannot authorize itself or mark its own work as reviewed by a person.',
      },
    ],
  },
  imports: {
    label: 'Imports',
    headline: 'The platform is accountable for its imports.',
    lead: 'REZICS publishes only the portions covered by the source license when it imports content. Users are responsible for what they submit. The tools remind them to cite sources, and the platform keeps the sources they provide.',
    facts: [
      { title: 'Licenses travel with the text', body: 'Open-license summaries that require sharing under the same terms retain the original license after edits or translation. The license travels with the content when it is read or exported.' },
      { title: 'Cover rights stay with the rights holder', body: 'Imported covers identify the copyright holder and their source. Covers are used only as covers, never as banners or display images.' },
      { title: 'Text covers fill the gap', body: 'Works without a cover display a text cover arranged from the title and author.' },
      { title: 'License review status', body: 'Work and fact pages list the applicable license and attribution requirements for each piece of content. Items not yet reviewed are marked “Not rated.”' },
      { title: 'Limits on Wiki+ quotations', body: 'Wiki+ limits the amount quoted from each passage and source. Totals are combined across accounts, translations, and Zones.' },
      { title: 'Wiki+ facts include locations', body: 'Every Wiki+ fact organized by an AI agent includes its chapter location and a short quotation. Readers cannot see it until a person has reviewed it.' },
    ],
  },
  humans: {
    label: 'Appeals and decisions',
    trail: {
      label: 'Example: cover removal and appeal',
      stages: ['Original decision', 'Appeal', 'New decision'],
    },
    headline: 'People make the decisions.',
    lead: 'Reports and rights appeals are allegations, not conclusions. A person decides whether to use the regular dispute process or the statutory notice and counter-notice process. Each decision cites the rules and evidence behind it and applies only to the reported content and use.',
    facts: [
      {
        title: 'Remove only the reported part',
        body: 'For example, if a cover is removed (example), a text cover appears in its place while the rest of the work’s information remains. Later data updates will not restore the removed cover.',
      },
      { title: 'People review appeals', body: 'Anyone who disagrees with a decision can appeal. When staffing allows, another reviewer handles the appeal. If that is not possible, you are told that the original reviewer will review it again.' },
      { title: 'A changed decision is a new record', body: 'A revised decision is recorded separately, and the original remains in the history.' },
      {
        title: 'AI assists reviewers',
        body: 'An AI detector’s score is never the sole basis for a decision. When AI assists a review, its method, inputs, and settings are recorded. Unclear results go to a person or remain pending.',
      },
      { title: 'Sensitive evidence', body: 'Sensitive evidence involving child safety or intimate images is never sent to general-purpose generative AI.' },
    ],
  },
  numbers: {
    label: 'Time limits',
    headline: 'The numbers in our policies.',
    lead: 'Each number below comes from a REZICS policy.',
    figures: [
      {
        value: '48',
        unit: 'hours',
        body: 'After a valid removal request, intimate images shared without consent are removed within 48 hours. We also make reasonable efforts to find and remove matching copies on the platform. An appeal does not pause this deadline.',
      },
      {
        value: '10 to 14',
        unit: 'business days',
        body: 'After a valid copyright counter-notice, content is restored between the 10th and 14th business day unless we receive notice that the rights holder has filed a lawsuit. If a separate safety, legal, or contractual restriction applies, we explain the reason and appeal process.',
      },
      { value: '6', unit: 'months', body: 'You can appeal a moderation decision for free for at least six months after notice, including a decision not to act on your report.' },
      { value: '13', unit: 'years', body: 'The minimum registration age depends on location: 13 in Taiwan and some other places, 14 in South Korea, and 16 in the European Economic Area. The stricter rule applies.' },
      { value: '7', unit: 'days', body: 'Original library data is kept for seven days after upload. At expiry, reading and export stop and deletion is scheduled. Export your library before then to keep the original fields.' },
      { value: '1', unit: 'month', body: 'Requests under the GDPR are usually answered within one month. If an extension is needed, we explain why within the first month.' },
    ],
    note: 'You can report and appeal without an account, even if your account has been suspended.',
  },
  views: {
    label: 'Visibility',
    headline: 'The same page can show different things to different people.',
    lead: 'On every read and submission, the server checks blocks, privacy, reading progress, jurisdiction, and revocations together. The same rules apply to search results, counts, previews, notifications, exports, and content read by AI agents.',
    facts: [
      { title: 'Visitors who are not signed in', body: 'See all-ages and unrated content. A work’s Wiki+ starts at the beginning of the story, without revealing later events.' },
      { title: 'Readers up to chapter three', body: 'Wiki+ and discussion stop where you have read. Choose which chapter to see or show everything.' },
      {
        title: 'Age-rated content',
        body: 'R15 is for ages 15 and older. Sexual content (R18) and graphic content (R18G) must be enabled separately. Content marked with both ratings appears only when both are enabled. These settings are unavailable where adult content is not offered. Ratings affect display only and do not grant access to private content.',
      },
      { title: 'Realm administrators', body: 'See only the information needed to moderate. They cannot freely inspect members’ accounts, private libraries, or confidential safety reports.' },
      { title: 'Search engines and link previews', body: 'Receive only the view available to visitors who are not signed in. Adult content is also excluded from email and push notifications.' },
      { title: 'Image covers', body: 'Images that may be unsuitable in public are covered by default. You decide whether to reveal them. Images covered by their author remain covered.' },
    ],
  },
  privacy: {
    label: 'Privacy',
    headline: 'Your reading history does not become advertising.',
    facts: [
      {
        title: 'No advertising profiles',
        body: 'Private reading history is not used to build advertising profiles or infer sensitive traits for marketing. The site has no ad trackers, and personal data is not sold. REZICS cookies are used only for interface language, appearance theme, and sign-in.',
      },
      {
        title: 'Separate consent for training',
        body: 'Private drafts and reading history are not used to train AI models by default. They are used only if you explicitly opt in. Registering or using an AI feature does not count as consent.',
      },
      { title: 'Explain before sending', body: 'Before an optional AI feature sends private data to an external service, we explain which service receives it, what is sent, why, and how long it is kept.' },
      { title: 'Private by default', body: 'Drafts and reading history are private unless you choose to share them. Even someone managing your public identity or Realm cannot access your private reading history.' },
      { title: 'Birthdays stay private', body: 'Birthdays are private by default. Enabling age-rated content does not reveal your birthday, and age eligibility does not depend on whether it is public.' },
      { title: 'Your data is yours to request', body: 'You can request access to, correction of, export of, or deletion of your data, even without an account.' },
    ],
  },
  family: {
    closing: 'Every record names its source, so you can check it yourself.',
  },
};

export default {
  id: 'trust',
  base: '/engine/trust/',
  name: 'Trust',
  theme: { module: 'trust' },
  pages: [
    {
      slug: '',
      label: 'Overview',
      meta: {
        title: 'Trust: every record has a source',
        description:
          'REZICS records sources and licenses for its data, along with reviews, disputes, and appeals, without replacing earlier records. Anyone can report content without registering. Intimate images shared without consent are removed within 48 hours of a valid request.',
      },
    },
  ],
  strings,
} satisfies MiniSite<TrustStrings>;
