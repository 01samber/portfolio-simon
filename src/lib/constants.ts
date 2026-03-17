/** Base path for GitHub Pages deployment - must match next.config basePath */
export const BASE_PATH = "/portfolio-simon";

export function imagePath(path: string): string {
  return `${BASE_PATH}${path.startsWith("/") ? path : `/${path}`}`;
}
