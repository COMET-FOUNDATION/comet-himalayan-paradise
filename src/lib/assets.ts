const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const STORAGE_BUCKET = process.env.NEXT_PUBLIC_SUPABASE_STORAGE_BUCKET ?? "images";

/**
 * Builds a public URL for an asset uploaded through the CHP asset management system,
 * given the `storagePath` returned by the backend (e.g. "website/home/hero/9a7c2-image.webp").
 * Keeping URL construction here — rather than hardcoding the Supabase domain in components —
 * means a future CDN or custom-domain change only touches this one function.
 */
export function getAssetUrl(storagePath: string): string {
  if (!SUPABASE_URL) {
    throw new Error(
      "NEXT_PUBLIC_SUPABASE_URL is not set. Add it to .env.local to resolve asset URLs from storagePath.",
    );
  }
  return `${SUPABASE_URL}/storage/v1/object/public/${STORAGE_BUCKET}/${storagePath.replace(/^\/+/, "")}`;
}
