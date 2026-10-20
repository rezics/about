import type { Module } from './schema';

/** The five engine modules, in DESIGN.md's order. */
export const modules: Module[] = [
  {
    id: 'universal-index',
    name: 'Universal index',
    summary: 'One identity per thing, connected across languages',
    meta: {
      title: 'Universal index: Record each thing once',
      description:
        'The REZICS universal index gives each work, software project, and creator one identity, connecting names, editions, credits, and relations across languages.',
    },
    hero: {
      headline: 'Record each thing once.',
      lede: 'Works, software, people, and organizations each have one identity in a shared graph. Names, editions, credits, and relations in every language connect to it, and every community and site reads the same data.',
    },
    points: [
      {
        title: 'Read even if you do not know the original language',
        body: 'Work records keep the original language and display it in yours. Search by translation, alias, or pronunciation. When no translation exists, it is identified as the original instead of guessed.',
      },
      {
        title: 'Editions stay distinct',
        body: 'Printings, translations, collections, regional editions, and releases for each platform have separate records. A release records only what was actually published. Later translations get their own record linked to the source.',
      },
      {
        title: 'Credits and relations',
        body: 'People and organizations are credited by role. Adaptations, sequels, series, and dependencies are directed relations with sources. Matching names do not make two things identical.',
      },
      {
        title: 'Complete filtering',
        body: 'Combine available fields to filter results. Counts are accurate, and you can browse to the last result. Save common filters as views and follow them.',
      },
      {
        title: 'Corrections and merges',
        body: 'Handle duplicate entries with evidence based merge plans. Preview every affected rating, library record, and Wiki fact first. Old URLs keep working, and an incorrect merge can be reversed.',
      },
    ],
    statement: 'Correct a fact once in any language, and every page that displays it updates.',
    usedBy: ['books', 'anime', 'visual-novels', 'software'],
  },
  {
    id: 'community',
    name: 'Community',
    summary: 'Realms, discussions, ratings, and lists',
    meta: {
      title: 'Community: Realms, discussions, ratings, and lists',
      description:
        'On REZICS, a Realm is a community built around a story, language, or idea. Discussions, ratings, and lists link directly to works, while your identity and reputation follow you across communities.',
    },
    hero: {
      headline: 'Discussions, ratings, and lists connect to works.',
      lede: 'A Realm brings people together around a story, language, or idea. Members discuss, rate, and make lists beside works. A person’s library, works, and reputation follow them across communities.',
    },
    points: [
      {
        title: 'Realm',
        body: 'Each Realm has its own members, roles, and rules. Rules can be written in every language the community uses. The community belongs to its members, and its owner cannot close or delete it at will.',
      },
      {
        title: 'Following and joining are different',
        body: 'Following is one way to keep up and does not require approval. Joining makes you a member with the right to participate. Each has its own notification settings: all, selected, or off.',
      },
      {
        title: 'Ratings name what they cover',
        body: 'Each rating states its question and subject. Episode scores do not affect the season, and translation scores do not affect the story itself.',
      },
      {
        title: 'Lists contain works themselves',
        body: 'Lists contain works, not titles mentioned in posts. Books, anime, and games can share a list that you can order, annotate, and export.',
      },
      {
        title: 'You have one identity',
        body: 'Your library, lists, works, and reputation belong to one identity and are not locked in one community. People can follow you as they would a community.',
      },
    ],
    statement: 'A community belongs to its members. A person belongs to themselves.',
    usedBy: ['anime', 'manga', 'games', 'visual-novels'],
  },
  {
    id: 'zones',
    name: 'Zones',
    summary: 'Any community can build a complete site',
    meta: {
      title: 'Zones: Every community can have its own site',
      description:
        'A Zone is a complete site built on shared REZICS data. Communities choose its routes, navigation, pages, and theme. A work’s Wiki+ is also a Zone, and every correction returns to the same graph.',
    },
    hero: {
      headline: 'Every community can have its own site.',
      lede: 'A Zone is a complete site with a home page, documents, index, detail pages, and navigation. The community chooses its routes. Content is not duplicated, and every correction on the site updates the same graph.',
    },
    points: [
      {
        title: 'Choose your routes',
        body: 'A Zone’s route table manages every path under its URL, including the home page. Platform tabs do not override its pages.',
      },
      {
        title: 'Wiki+',
        body: 'Each work’s Wiki is a Zone with pages for people, places, timelines, chapter guides, and relations. Infoboxes read facts from the graph, and readers see only what they have read.',
      },
      {
        title: 'Themes and layout',
        body: 'Themes define branding and layout. Identity, search, language, sources, and accessibility controls are protected and cannot be removed by a theme.',
      },
      {
        title: 'Revisions, previews, and restores',
        body: 'A site revision includes routes, navigation, templates, themes, and queries. Preview, validate, restore, and export it. People and AI agents edit sites through the same API.',
      },
      {
        title: 'One identity, many sites',
        body: 'A Zone can combine many kinds, and a kind can appear in many Zones. Chinese and Japanese visual novel sites share every identity while choosing their own names, copy, and ordering.',
      },
    ],
    statement: 'Every site looks different, with the same engine underneath.',
    usedBy: ['books', 'anime', 'manga', 'visual-novels'],
  },
  {
    id: 'create',
    name: 'Creation and publishing',
    summary: 'Writing, reading, editions, and releases',
    meta: {
      title: 'Creation and publishing: From first chapter to release',
      description:
        'Authors draft, schedule, and publish chapters on REZICS, invite collaborators to edit, keep worldbuilding beside their drafts, and directly publish DRM free ebooks and small games.',
    },
    hero: {
      headline: 'From the first chapter to release, all in one place.',
      lede: 'Authors draft, schedule, and publish chapters. Readers pick up where they left off. Translations, rights, and each release are recorded separately.',
    },
    points: [
      {
        title: 'Drafts stay safe',
        body: 'Every save creates a restorable revision. Export and reimport a complete work with its revisions, notes, and worldbuilding.',
      },
      {
        title: 'Scheduling and collaboration',
        body: 'Schedules run on the server in the author’s time zone, even when the browser is closed. Collaborators can receive separate permissions to read, suggest, edit, or publish. Publishing and editing rights are separate.',
      },
      {
        title: 'Worldbuilding beside the draft',
        body: 'Keep private notes on people, places, organizations, events, and settings beside the draft. Publish selected pages to the work’s Wiki without exposing private revision history.',
      },
      {
        title: 'Translators own their translations',
        body: 'A work can have several translations, each owned by its translator. User translations are private by default. They can be made public only when the source is in the public domain or under a free license that allows translation, the author consents, or the author offers a translation license.',
      },
      {
        title: 'Publish directly',
        body: 'REZICS publishes rights-cleared EPUB and PDF ebooks and small games for contracted creators, all DRM free. Readers can preview, receive updates, request refunds, and download again under the stated terms.',
      },
    ],
    statement: 'Uploading to REZICS does not transfer copyright to REZICS.',
    usedBy: ['books', 'manga', 'games', 'visual-novels'],
  },
  {
    id: 'trust',
    name: 'Trust',
    summary: 'Sources, rights, moderation, and privacy',
    meta: {
      title: 'Trust: Sources, rights, moderation, and privacy',
      description:
        'Every claim on REZICS has sources and evidence. AI use is disclosed, anyone can report without an account, moderation decisions can be appealed, and private drafts and reading records stay private.',
    },
    hero: {
      headline: 'Information has sources. Decisions have reasons.',
      lede: 'Every fact has a source, every right has a basis, and every moderation decision names the rule it follows. Your private drafts and reading records are not visible to other users by default.',
    },
    points: [
      {
        title: 'Sources and evidence',
        body: 'Each claim records its sources, evidence, and review status. A claim can be reviewed and disputed at the same time. Unknown information is marked unknown.',
      },
      {
        title: 'AI and automation',
        body: 'Text, images, and translations disclose AI use and human review so readers can filter by them. Automated operators identify themselves, and AI detection alone never decides a case.',
      },
      {
        title: 'Reports and appeals',
        body: 'Anyone can report without an account. Reports, evidence, decisions, and reversals are recorded separately. Every moderation decision can be appealed and reviewed by a person.',
      },
      {
        title: 'Rights recorded individually',
        body: 'Each license records who declared it, when, and its scope. A rights appeal is treated as an allegation until a person reviews it and decides which content and uses it affects.',
      },
      {
        title: 'Privacy',
        body: 'Private drafts and reading records stay private. Giving someone else control of your public identity or Realm does not give them your reading history.',
      },
    ],
    statement: 'Rules run on the server, so the website, app, and AI agent get the same result.',
    usedBy: ['visual-novels', 'mcp', 'skills', 'apis'],
  },
];
/** Shared labels for the five-module navigation at the end of every module page. */
export const moduleRing = { label: 'Five modules', current: 'You are here', overview: 'Back to module overview' };
