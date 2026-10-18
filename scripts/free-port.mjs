// Print a free TCP port on 127.0.0.1 (parallel worktrees must not share fixed ports).
import net from 'node:net';

export function freePort() {
  return new Promise((resolve, reject) => {
    const server = net.createServer();
    server.once('error', reject);
    server.listen(0, '127.0.0.1', () => {
      const { port } = server.address();
      server.close(() => resolve(port));
    });
  });
}

if (process.argv[1] && new URL(import.meta.url).pathname === process.argv[1]) console.log(await freePort());
