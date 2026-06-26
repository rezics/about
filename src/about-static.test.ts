import { describe, expect, test } from "bun:test";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import {
  REZICS_ARCHITECTURE_DOT,
  REZICS_ARCHITECTURE_NODE_LABELS,
} from "./components/rezicsArchitectureGraph";
import {
  ABOUT_MARKDOWN_FRAGMENTS,
  getCommonCopy,
  getHomePageCopy,
  getProductPageCopy,
} from "./content/aboutContent";
import {
  ABOUT_LOCALES,
  ABOUT_PAGES,
  type AboutLocale,
  type AboutPageId,
  getCanonicalUrl,
  getPagePath,
  matchAboutLocale,
  negotiateAboutLocale,
} from "./i18n/locales";
import { onRequest as languageMiddleware } from "../functions/_middleware";

const packageRoot = new URL("..", import.meta.url).pathname;

async function readMarkdownFragment(
  locale: AboutLocale,
  page: AboutPageId,
  slug: string,
): Promise<string> {
  return readFile(
    join(packageRoot, "src/content/markdown", locale, page, `${slug}.md`),
    "utf8",
  );
}

function markdownParagraphCount(source: string): number {
  return source
    .trim()
    .split(/\n{2,}/)
    .filter((paragraph) => paragraph.trim().length > 0).length;
}

describe("@rezics/about locale contract", () => {
  test("uses the canonical Rezics language codes", () => {
    expect(ABOUT_LOCALES).toEqual([
      "zh-hant",
      "zh-hans",
      "en",
      "ja",
      "de",
      "ko",
    ]);
  });

  test("has common, page, and markdown content for every locale", async () => {
    for (const locale of ABOUT_LOCALES) {
      const common = getCommonCopy(locale);

      expect(common.nav.home.length).toBeGreaterThan(1);
      expect(common.nav.product.length).toBeGreaterThan(1);
      expect(common.cta.enterApp.length).toBeGreaterThan(4);
      expect(common.notFound.body.length).toBeGreaterThan(20);

      for (const page of ABOUT_PAGES) {
        const copy =
          page === "home"
            ? getHomePageCopy(locale)
            : getProductPageCopy(locale);

        expect(copy.meta.title.length).toBeGreaterThan(12);
        expect(copy.meta.description.length).toBeGreaterThan(40);
        expect(copy.hero.eyebrow.length).toBeGreaterThan(1);
        expect(copy.hero.heading.length).toBeGreaterThan(4);
        expect(copy.sections.length).toBeGreaterThanOrEqual(1);
        expect(copy.storySections.length).toBeGreaterThanOrEqual(1);

        for (const slug of ABOUT_MARKDOWN_FRAGMENTS[page]) {
          const fragment = await readMarkdownFragment(locale, page, slug);
          expect(fragment.trim().length).toBeGreaterThan(20);
        }
      }
    }
  });

  test("preserves explicit hero paragraph and localized eyebrow decisions", async () => {
    const expectedEyebrows: Record<AboutLocale, string> = {
      "zh-hant": "inherited · create · spread",
      "zh-hans": "与所爱的故事相遇",
      en: "Encounter the stories you love.",
      ja: "愛する物語と出会う",
      de: "Begegne den Geschichten, die du liebst.",
      ko: "사랑하는 이야기를 만나다",
    };

    for (const locale of ABOUT_LOCALES) {
      expect(getHomePageCopy(locale).hero.eyebrow).toBe(
        expectedEyebrows[locale],
      );

      const heroMarkdown = await readMarkdownFragment(locale, "home", "hero");
      expect(markdownParagraphCount(heroMarkdown)).toBe(2);
    }
  });

  test("keeps home pages wired to the product directory", async () => {
    for (const locale of ABOUT_LOCALES) {
      const copy = getHomePageCopy(locale);
      const closing = await readMarkdownFragment(locale, "home", "closing");

      expect(copy.primaryCtaPage).toBe("product");
      if (locale === "zh-hant") {
        expect(copy.hero.heading).toBe("REZICS: 與所愛的故事相遇");
        expect(copy.hero.eyebrow).toBe("inherited · create · spread");
      } else {
        expect(copy.hero.heading).toContain("inherited · create · spread");
      }
      expect(`${JSON.stringify(copy)}\n${closing}`.toLowerCase()).toContain(
        "wiki",
      );
    }
  });

  test("keeps home and product narratives structurally distinct", () => {
    for (const locale of ABOUT_LOCALES) {
      const home = getHomePageCopy(locale);
      const product = getProductPageCopy(locale);

      expect("products" in home).toBe(false);
      expect(product.products.length).toBeGreaterThanOrEqual(6);
      expect(product.products[0]?.name).toBe("Rezics Catalog");
      expect(product.products.every((entry) => entry.category.length > 0)).toBe(
        true,
      );
      expect(
        product.products.every((entry) => entry.statusLabel.length > 0),
      ).toBe(true);
    }
  });

  test("keeps home narrative focused on born-digital indexing pressure", async () => {
    const source = `${JSON.stringify(getHomePageCopy("en"))}\n${await readMarkdownFragment(
      "en",
      "home",
      "closing",
    )}`;

    expect(source).toContain("Web novels");
    expect(source).toContain("born-digital books");
    expect(source).toContain("As creation gets easier");
    expect(source).toContain("Tag-shelf discovery");
  });

  test("keeps product page focused on the Rezics product directory", () => {
    const source = JSON.stringify(getProductPageCopy("en"));

    for (const expected of [
      "Rezics Catalog",
      "Rezics Web",
      "Rezics Realms",
      "Rezics Wiki",
      "Rezics Shelves",
      "Rezics Graph",
    ]) {
      expect(source).toContain(expected);
    }

    for (const locale of ABOUT_LOCALES) {
      const products = getProductPageCopy(locale).products;
      expect(products.every((product) => product.status === "planned")).toBe(
        true,
      );
      expect(
        products.every((product) => product.statusLabel === "Pre-production"),
      ).toBe(true);
    }
  });

  test("keeps long prose in markdown fragments instead of page json", async () => {
    for (const locale of ABOUT_LOCALES) {
      for (const page of ABOUT_PAGES) {
        const closing = await readMarkdownFragment(locale, page, "closing");
        expect(closing.trimStart()).toContain("## ");
      }
    }
  });
});

describe("@rezics/about architecture graph", () => {
  test("contains the required product relationship nodes", () => {
    for (const label of REZICS_ARCHITECTURE_NODE_LABELS) {
      expect(REZICS_ARCHITECTURE_DOT).toContain(label);
    }
  });

  test("keeps realm and realm-tag relationships explicit", () => {
    expect(REZICS_ARCHITECTURE_DOT).toContain("Realm -> RealmTag");
    expect(REZICS_ARCHITECTURE_DOT).toContain("RealmTag -> Tag");
    expect(REZICS_ARCHITECTURE_DOT).toContain("RealmTag -> WorkUnit");
    expect(REZICS_ARCHITECTURE_DOT).toContain("does not imply");
  });
});

describe("@rezics/about static routing", () => {
  test("builds localized paths for every primary page", () => {
    for (const locale of ABOUT_LOCALES) {
      expect(getPagePath(locale, "home")).toBe(`/${locale}/`);
      expect(getPagePath(locale, "product")).toBe(`/${locale}/product/`);
    }
  });

  test("builds canonical URLs for every localized route", () => {
    for (const locale of ABOUT_LOCALES) {
      for (const page of ABOUT_PAGES) {
        expect(getCanonicalUrl(locale, page)).toBe(
          `https://about.rezics.com${getPagePath(locale, page)}`,
        );
      }
    }
  });

  test("matches browser language tags to supported about locales", () => {
    expect(matchAboutLocale("zh-TW")).toBe("zh-hant");
    expect(matchAboutLocale("zh-HK")).toBe("zh-hant");
    expect(matchAboutLocale("zh")).toBe("zh-hant");
    expect(matchAboutLocale("zh-CN")).toBe("zh-hans");
    expect(matchAboutLocale("zh-SG")).toBe("zh-hans");
    expect(matchAboutLocale("en-US")).toBe("en");
    expect(matchAboutLocale("ja-JP")).toBe("ja");
    expect(matchAboutLocale("ko-KR")).toBe("ko");
    expect(matchAboutLocale("de-DE")).toBe("de");
    expect(matchAboutLocale("fr-FR")).toBeUndefined();
  });

  test("negotiates the best locale from Accept-Language", () => {
    expect(negotiateAboutLocale("fr-FR,ja;q=0.8,en;q=0.6")).toBe("ja");
    expect(negotiateAboutLocale("zh-CN,zh;q=0.9,en;q=0.8")).toBe("zh-hans");
    expect(negotiateAboutLocale("zh-TW,zh;q=0.9,en;q=0.8")).toBe("zh-hant");
    expect(negotiateAboutLocale("en-US;q=0.4,ja-JP;q=0.9")).toBe("ja");
    expect(negotiateAboutLocale("fr-FR,es-ES;q=0.9")).toBe("zh-hant");
    expect(negotiateAboutLocale(null)).toBe("zh-hant");
  });

  test("redirects language-neutral entrypoints with Accept-Language", async () => {
    const response = await languageMiddleware({
      request: new Request("https://about.rezics.com/product/?ref=nav", {
        headers: { "Accept-Language": "ja-JP,ja;q=0.9,en;q=0.6" },
      }),
      next: () => new Response("next"),
    });

    expect(response.status).toBe(302);
    expect(response.headers.get("Location")).toBe(
      "https://about.rezics.com/ja/product/?ref=nav",
    );
    expect(response.headers.get("Vary")).toBe("Accept-Language");
    expect(response.headers.get("Cache-Control")).toBe("no-store");
  });

  test("leaves localized routes untouched in the language middleware", async () => {
    const response = await languageMiddleware({
      request: new Request("https://about.rezics.com/en/"),
      next: () => new Response("next"),
    });

    expect(await response.text()).toBe("next");
  });
});
