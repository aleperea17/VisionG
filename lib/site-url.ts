export function getSiteUrl() {
  const url = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  return url.replace(/\/$/, "");
}

export function isPlaceholder(value: string) {
  return value.includes("[") || value.includes("]");
}
