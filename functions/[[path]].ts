// Cloudflare Pages Function for `/` and unprefixed page paths only (dist/_routes.json sends every
// /<locale>/ page and shared asset straight to the static files). It picks the visitor's locale
// and redirects: /books/ → /zh-Hant/books/.
import { pickLocale } from '../src/kit/negotiate';

export const onRequest = ({ request }: { request: Request }) => {
  const url = new URL(request.url);
  const locale = pickLocale(request.headers.get('Cookie'), request.headers.get('Accept-Language'));
  return new Response(null, {
    status: 302,
    headers: { Location: `/${locale}${url.pathname}${url.search}`, Vary: 'Accept-Language, Cookie', 'Cache-Control': 'private, no-store' },
  });
};
