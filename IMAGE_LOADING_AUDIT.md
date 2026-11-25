# Image Loading Audit — Phase 2

Audit and verification date: 2026-11-25
Scope: runtime TypeScript/TSX/CSS under `src`, `admin-portal`, and `backend`, plus the active production site. Repeated literals count as separate references. No image was deleted, no design/component was changed, and no commit or push was made.

## Status summary

- Original scan: **534 literal image references** — 397 remote URL occurrences, 83 root-relative `/public` path occurrences, and 54 relative references.
- Original local-path failures: 15. **Three are now corrected** (two original image files restored and one path corrected); **12 remain unresolved** because no original file was found.
- Direct remote URL check: of 374 unique remote images, 373 returned HTTP 200 and one Storage object returned `NoSuchKey`.
- Production optimizer check: valid Supabase source URLs load directly, but the active production host returns **402 `OPTIMIZED_IMAGE_REQUEST_PAYMENT_REQUIRED`** for new `/_next/image` transformations. The response was a Vercel cache `MISS`, so browser cache did not produce this failure. Vercel documents this 402 behavior when an image-optimization usage limit is exceeded ([Vercel limits and pricing](https://vercel.com/docs/image-optimization/limits-and-pricing)).
- A targeted configuration change now bypasses the failing optimizer for all `next/image` elements. A local production build and server verify that the rendered markup uses direct source URLs with no `/_next/image` requests. This change takes effect on the live site only after deployment.
- The `comet-himalayan-paradise.vercel.app` alias currently returns `DEPLOYMENT_NOT_FOUND`; the active site at `www.thehimalayancamp.com` responds successfully.

## Issues fixed

### Original images restored from Git history

Git history contained the exact original homepage images. They match the card subjects and were restored without alteration from commit `ddf7df4`:

- `public/Adventure Activities.png` — restores the reference in `src/components/home/ExperiencesSection.tsx:51`.
- `public/Cultural Experiences.png` — restores the reference in `src/components/home/ExperiencesSection.tsx:43`.

### Enclave image path corrected

- `src/app/enclave/page.tsx:17` previously referenced `/CHP Enclave 2.png`, which does not exist.
- It now references `/CHPEnclave2.png`, the existing checked-in enclave image. The page content already uses that same file at line 71.

### Production optimizer failure bypassed

- `next.config.ts:14-18` now sets `images.unoptimized: true`. This causes Next `Image` to render the source URL directly rather than route it through Vercel's image optimizer. The image component still controls layout and rendering; the browser receives the original image bytes.
- Production endpoint checks on `https://www.thehimalayancamp.com` confirmed two separate valid remote images fail at `/_next/image` with 402/MISS, while the same Supabase source URL returns 200 directly. The optimizer response says `OPTIMIZED_IMAGE_REQUEST_PAYMENT_REQUIRED`.
- Local production verification after the change: `npm run build` succeeds; the local production server rendered 0 `/_next/image` references on `/`, `/about`, `/experiences`, and `/camps`, with Supabase image sources present directly in the `<img>` markup.
- Tradeoff: direct serving skips resizing, format conversion, and responsive optimizer variants. For example, each restored homepage PNG is about 2.7 MB. To retain Vercel optimization, resolve the Vercel image-optimization usage/plan limit, then remove the bypass and redeploy.

### Storage bucket default aligned

- `src/lib/assets.ts:2` now defaults `getAssetUrl` to the website's configured production bucket, `images`.
- `.env.example:6` now documents the same bucket.
- The local `.env` bucket was already set to `images`; `render.yaml` also sets the backend `SUPABASE_STORAGE_BUCKET` to `images`. This preserves backend behavior. The helper currently has no call sites outside its definition, so the old default was latent rather than a cause of current pages failing.

## Unresolved image references

### Twelve partner-network assets unavailable

No exact matching files or original-named assets were found in `public/` or in Git objects/history across available refs. They were left unchanged rather than replaced with unrelated images. The page will continue to show missing-image responses for these references until the original assets are recovered:

| File and line | Missing path |
|---|---|
| `src/app/partner-network/page.tsx:43` | `/images/chp/network/travel-tourism.jpg` |
| `src/app/partner-network/page.tsx:60` | `/images/chp/network/group-business.jpg` |
| `src/app/partner-network/page.tsx:79` | `/images/chp/network/wellness.jpg` |
| `src/app/partner-network/page.tsx:99` | `/images/chp/network/second-home.jpg` |
| `src/app/partner-network/page.tsx:116` | `/images/chp/network/facility-acquisition.jpg` |
| `src/app/partner-network/page.tsx:134` | `/images/chp/network/digital-marketing.jpg` |
| `src/app/partner-network/page.tsx:153` | `/images/chp/network/community.jpg` |
| `src/app/partner-network/page.tsx:170` | `/images/chp/network/corporate.jpg` |
| `src/app/partner-network/page.tsx:188` | `/images/chp/network/local-influencers.jpg` |
| `src/app/partner-network/page.tsx:394` | `/images/chp/network/network-middle.jpg` |
| `src/app/partner-network/page.tsx:581` | `/images/chp/network/community-highlight.jpg` |
| `src/app/partner-network/page.tsx:626` | `/images/chp/network/network-cta.jpg` |

Production requests for the old deployment returned 404 for the partner-network asset path. The references will resolve once the original files are placed at those paths and deployed.

### C1 Officers Storage image missing

- `src/app/c1-officers-guest-house/page.tsx:7` requests the public object at bucket `images`, key `comet-education-services/2be04451-1158-4086-8f9e-7334a1247b35-c1-officers-guesthouse-header.webp`.
- Supabase responds with `NoSuchKey` (HTTP 400 response containing Storage's 404 object-not-found code). The active production C1 page uses this same URL.
- The repository and Git history contain no alternate original asset/path. Storage listing requires authorization, and no backend Storage credentials are present in this workspace. Therefore the actual replacement object name cannot be confirmed and the URL was not changed. To finish this fix, restore the exact object or provide authorized access to the Storage listing so its canonical key can be verified.

## Production diagnosis

- The active production site is `https://www.thehimalayancamp.com`; its home and C1 pages respond successfully.
- At the time of the audit, a valid Supabase image URL returned 200 directly, while multiple fresh Vercel `/_next/image` requests returned 402 with `OPTIMIZED_IMAGE_REQUEST_PAYMENT_REQUIRED` and `x-vercel-cache: MISS`. This identifies the observed mass failure as Vercel image-optimization quota/usage handling, not a bad Supabase response or browser cache. Vercel's documentation states that new transforms can return 402 after usage limits are exceeded; cached transforms may continue to work.
- The old `comet-himalayan-paradise.vercel.app` host returns `DEPLOYMENT_NOT_FOUND`. It is not the active site host. No image fix was deployed during this task.
- After deployment of this patch, optimized Image component URLs should bypass Vercel and fetch their existing public URLs directly. Standard `<img>` and CSS backgrounds already use direct URLs and are unaffected by `images.unoptimized`.

## Verification performed

- `npm run build` — passed with Next.js 16.3.2.
- Local production server on port 3020: restored images and the enclave image returned 200; partner-network asset returned 404 as expected for an unavailable original.
- Local rendered page HTML: zero `/_next/image` references on `/`, `/about`, `/experiences`, `/camps`; remote Supabase image sources appeared directly.
- Live production: tested direct Supabase sources and optimizer responses, plus the active site and image paths. Vercel image optimizer returned 402/MISS for two distinct valid remote images. Supabase returned `NoSuchKey` for the C1 object.
- No Vercel dashboard or Storage listing access was available, so current plan usage and the missing C1 object's alternate key could not be inspected.

## Files modified

- `next.config.ts` — bypass Vercel optimizer while it returns payment-required errors.
- `src/app/enclave/page.tsx` — corrected Open Graph image path.
- `src/lib/assets.ts` — aligned default public bucket to `images`.
- `.env.example` — aligned documented bucket.
- `public/Adventure Activities.png` — restored original from Git history.
- `public/Cultural Experiences.png` — restored original from Git history.
- `IMAGE_LOADING_AUDIT.md` — this updated report.

## Remaining production requirements

No Vercel environment variable is required for the current direct image URLs. If `getAssetUrl` gains call sites, configure `NEXT_PUBLIC_SUPABASE_URL` at build time and set `NEXT_PUBLIC_SUPABASE_STORAGE_BUCKET=images` (or keep the new `images` default).

1. Deploy these code/assets changes to the Vercel project serving `www.thehimalayancamp.com`; production currently still has the old build.
2. Recover the 12 partner-network originals and add them at the listed exact paths.
3. Restore or identify the C1 Storage object's verified key and then update/restore that one URL.
4. If optimized/responsive image delivery is preferred over direct source images, review Vercel Image Optimization usage/plan settings, resolve the 402 limit, then re-enable optimization and redeploy. Do not rely on the unavailable `comet-himalayan-paradise.vercel.app` alias as the production URL.
