import type { AboutEnv } from './env.ts';
import { handleNotify } from './notify.ts';

/**
 * Static assets serve the site. The Worker runs first only for `/api/*` (see wrangler.jsonc):
 * `POST /api/notify` stores an address, every other API path is a 404 problem.
 */
export async function handleApi(request: Request, env: AboutEnv): Promise<Response | undefined> {
  const path = new URL(request.url).pathname.replace(/\/$/, '');
  if (path === '/api/notify') return handleNotify(request, env);
  if (path.startsWith('/api/'))
    return Response.json(
      { type: 'about:blank', title: 'not_found', status: 404 },
      { status: 404, headers: { 'content-type': 'application/problem+json' } },
    );
  return undefined;
}

export default {
  async fetch(request: Request, env: AboutEnv): Promise<Response> {
    return (await handleApi(request, env)) ?? env.ASSETS.fetch(request);
  },
};
