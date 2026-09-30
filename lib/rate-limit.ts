const hits = new Map<string, number[]>();

const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 5;

export function rateLimit(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((timestamp) => now - timestamp < WINDOW_MS);

  if (recent.length >= MAX_HITS) {
    hits.set(ip, recent);
    return false;
  }

  recent.push(now);
  hits.set(ip, recent);
  return true;
}
