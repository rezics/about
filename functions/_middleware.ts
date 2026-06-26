import {
  getPagePath,
  negotiateAboutLocale,
  type AboutPageId,
} from "../src/i18n/locales";

type PagesMiddlewareContext = {
  request: Request;
  next: () => Response | Promise<Response>;
};

const LANGUAGE_ENTRYPOINTS: Record<string, AboutPageId> = {
  "/": "home",
  "/product": "product",
  "/product/": "product",
};

export async function onRequest(
  context: PagesMiddlewareContext,
): Promise<Response> {
  const url = new URL(context.request.url);
  const page = LANGUAGE_ENTRYPOINTS[url.pathname];

  if (!page || !["GET", "HEAD"].includes(context.request.method)) {
    return context.next();
  }

  const locale = negotiateAboutLocale(
    context.request.headers.get("accept-language"),
  );
  const location = new URL(getPagePath(locale, page), url);
  location.search = url.search;

  return new Response(null, {
    status: 302,
    headers: {
      "Cache-Control": "no-store",
      Location: location.toString(),
      Vary: "Accept-Language",
    },
  });
}
