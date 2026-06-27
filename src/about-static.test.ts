import { describe, expect, test } from "bun:test";
import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import {
  REZICS_ARCHITECTURE_DOT,
  REZICS_ARCHITECTURE_NODE_LABELS,
} from "./components/rezicsArchitectureGraph";
import {
  getCommonCopy,
  getPageCopy,
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
  getProductDetailPath,
  matchAboutLocale,
  negotiateAboutLocale,
} from "./i18n/locales";
import { onRequest as languageMiddleware } from "../functions/_middleware";

const packageRoot = new URL("..", import.meta.url).pathname;
const referenceLocale: AboutLocale = "zh-hant";

type StructureSignature =
  | string
  | StructureSignature[]
  | { [key: string]: StructureSignature };

function toStructureSignature(value: unknown): StructureSignature {
  if (Array.isArray(value)) {
    return value.map((entry) => toStructureSignature(entry));
  }

  if (value !== null && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value)
        .sort(([leftKey], [rightKey]) => leftKey.localeCompare(rightKey))
        .map(([key, entry]) => [key, toStructureSignature(entry)]),
    );
  }

  return value === null ? "null" : typeof value;
}

async function listMarkdownFragments(
  locale: AboutLocale,
  page: AboutPageId,
): Promise<string[]> {
  const entries = await readdir(
    join(packageRoot, "src/content/markdown", locale, page),
  );

  return entries
    .filter((entry) => entry.endsWith(".md"))
    .map((entry) => entry.replace(/\.md$/, ""))
    .sort();
}

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

  test("keeps common copy structure aligned with zh-hant", () => {
    const referenceStructure = toStructureSignature(
      getCommonCopy(referenceLocale),
    );

    for (const locale of ABOUT_LOCALES) {
      expect(toStructureSignature(getCommonCopy(locale))).toEqual(
        referenceStructure,
      );
    }
  });

  test("keeps page copy structures aligned with zh-hant", () => {
    for (const page of ABOUT_PAGES) {
      const referenceStructure = toStructureSignature(
        getPageCopy(referenceLocale, page),
      );

      for (const locale of ABOUT_LOCALES) {
        expect(toStructureSignature(getPageCopy(locale, page))).toEqual(
          referenceStructure,
        );
      }
    }
  });

  test("keeps localized home pages wired to the same primary CTA page", () => {
    const referenceHome = getHomePageCopy(referenceLocale);

    for (const locale of ABOUT_LOCALES) {
      expect(getHomePageCopy(locale).primaryCtaPage).toBe(
        referenceHome.primaryCtaPage,
      );
    }
  });

  test("keeps localized product lists aligned with zh-hant", () => {
    const referenceProducts = getProductPageCopy(referenceLocale).products;
    const referenceProductContract = referenceProducts.map((product) => ({
      slug: product.slug,
      status: product.status,
      featureCount: product.features.length,
      detailSectionCount: product.detail.sections.length,
    }));

    for (const locale of ABOUT_LOCALES) {
      const productContract = getProductPageCopy(locale).products.map(
        (product) => ({
          slug: product.slug,
          status: product.status,
          featureCount: product.features.length,
          detailSectionCount: product.detail.sections.length,
        }),
      );

      expect(productContract).toEqual(referenceProductContract);
    }
  });

  test("keeps markdown fragment files aligned with zh-hant", async () => {
    for (const page of ABOUT_PAGES) {
      const referenceFragments = await listMarkdownFragments(
        referenceLocale,
        page,
      );

      for (const locale of ABOUT_LOCALES) {
        const fragments = await listMarkdownFragments(locale, page);
        expect(fragments).toEqual(referenceFragments);

        for (const slug of referenceFragments) {
          const fragment = await readMarkdownFragment(locale, page, slug);
          expect(fragment.trim().length).toBeGreaterThan(0);
        }
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
  });
});

describe("@rezics/about static routing", () => {
  test("builds localized paths for every primary page", () => {
    for (const locale of ABOUT_LOCALES) {
      expect(getPagePath(locale, "home")).toBe(`/${locale}/`);
      expect(getPagePath(locale, "product")).toBe(`/${locale}/product/`);
      expect(getProductDetailPath(locale, "wiki")).toBe(
        `/${locale}/product/wiki/`,
      );
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
