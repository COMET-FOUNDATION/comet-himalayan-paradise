import type { NextConfig } from "next";

// Set at build/deploy time once Supabase Storage is provisioned (see backend/README setup).
// Not required for the site to build or run without it.
const supabaseHostname = process.env.NEXT_PUBLIC_SUPABASE_URL
  ? new URL(process.env.NEXT_PUBLIC_SUPABASE_URL).hostname
  : undefined;

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "*.supabase.co",
      },
      ...(supabaseHostname
        ? [
          {
            protocol: "https" as const,
            hostname: supabaseHostname,
          },
        ]
        : []),
    ],
  },
};

export default nextConfig;
