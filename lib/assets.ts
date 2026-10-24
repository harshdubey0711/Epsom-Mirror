export const ASSET_BASE_URL =
  process.env.NEXT_PUBLIC_ASSET_BASE_URL ??
  "https://epsom-wellness-media-279425763584.s3.ap-south-1.amazonaws.com";

/** Resolve a public asset path to S3 (videos) or leave absolute URLs unchanged. */
export function asset(path: string): string {
  if (!path || path.startsWith("http://") || path.startsWith("https://") || path.startsWith("data:")) {
    return path;
  }
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${ASSET_BASE_URL.replace(/\/$/, "")}${clean}`;
}
