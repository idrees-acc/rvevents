/** Prefix a public asset path with the Vite base URL so it works on GitHub Pages. */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL;
  // Avoid double slashes: base already ends with "/"
  return base + path.replace(/^\//, "");
}
