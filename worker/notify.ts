import type { AboutEnv } from './env.ts';

/** Why a submission was refused; the page maps each code to its own text. */
export type NotifyError = 'invalid_email' | 'invalid_request' | 'cross_origin' | 'unavailable';

/** The site has one language; the column stays so later locales need no migration. */
export const notifyLocale = 'zh-Hant';

const emailPattern = /^[^\s@]+@[^\s@.][^\s@]*\.[^\s@]+$/;

interface Submission {
  email: string;
  /** Hidden field only scripts fill in. */
  trap: boolean;
}

function parseSubmission(fields: { email?: unknown; company?: unknown }): Submission | NotifyError {
  const email = typeof fields.email === 'string' ? fields.email.trim().toLowerCase() : '';
  if (!email || email.length > 254 || !emailPattern.test(email)) return 'invalid_email';
  return { email, trap: typeof fields.company === 'string' && fields.company.trim() !== '' };
}

async function readFields(request: Request): Promise<Record<string, unknown> | undefined> {
  const type = request.headers.get('content-type') ?? '';
  try {
    if (type.includes('application/json')) {
      const body: unknown = await request.json();
      return body && typeof body === 'object' ? (body as Record<string, unknown>) : undefined;
    }
    if (type.includes('application/x-www-form-urlencoded') || type.includes('multipart/form-data'))
      return Object.fromEntries(await request.formData());
  } catch {
    /* fall through to a refusal */
  }
  return undefined;
}

function problem(code: NotifyError, status: number): Response {
  return Response.json(
    { type: 'about:blank', title: code, status, code },
    { status, headers: { 'content-type': 'application/problem+json', 'cache-control': 'no-store' } },
  );
}

const back = (request: Request, path: string) => Response.redirect(new URL(path, request.url), 303);

/**
 * Store an address once. Repeating a submission, or filling the hidden field, answers exactly
 * like a first success so the form never reveals whether an address is already on the list.
 * Script callers (`Accept: application/json`) get JSON; a plain form post is redirected to
 * `/notified/`, or back to the form when it cannot be stored.
 */
export async function handleNotify(request: Request, env: AboutEnv): Promise<Response> {
  if (request.method !== 'POST')
    return new Response(null, { status: 405, headers: { allow: 'POST' } });
  const origin = request.headers.get('origin');
  if (origin && origin !== 'null' && new URL(origin).host !== new URL(request.url).host)
    return problem('cross_origin', 403);
  const fields = await readFields(request);
  const wantsJson = (request.headers.get('accept') ?? '').includes('application/json');
  const submission = fields ? parseSubmission(fields) : 'invalid_request';
  if (typeof submission === 'string')
    return wantsJson ? problem(submission, 422) : back(request, '/#notify');
  if (!submission.trap) {
    try {
      await env.DB.prepare(
        'INSERT INTO notify_signup (email, locale, created_at) VALUES (?1, ?2, ?3) ON CONFLICT (email) DO NOTHING',
      )
        .bind(submission.email, notifyLocale, new Date().toISOString())
        .run();
    } catch {
      return wantsJson ? problem('unavailable', 503) : back(request, '/#notify');
    }
  }
  if (wantsJson)
    return Response.json({ status: 'subscribed' }, { headers: { 'cache-control': 'no-store' } });
  return back(request, '/notified/');
}
