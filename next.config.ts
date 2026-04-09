import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ["*.replit.dev", "*.janeway.replit.dev"],
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  webpack(config: any, { dev }: { dev: boolean }) {
    // In dev mode, use memory cache to avoid race conditions where
    // Next.js reads a partially-written filesystem cache file and gets
    // "Unexpected end of JSON input" during page rendering.
    if (dev) {
      config.cache = { type: "memory" };
    }

    // Tailwind v4 generates url(...) values in CSS utilities like .mask-[url(...)].
    // Next.js webpack css-loader tries to resolve these as module imports, causing
    // "Module not found: Can't resolve '...'" errors. Disabling URL resolution fixes this.
    const rules: any[] = config.module?.rules ?? [];
    for (const rule of rules) {
      if (!rule?.oneOf) continue;
      for (const oneOf of rule.oneOf) {
        const use: any[] = Array.isArray(oneOf?.use) ? oneOf.use : [];
        for (const u of use) {
          if (
            typeof u?.loader === "string" &&
            u.loader.includes("css-loader") &&
            u.options != null
          ) {
            u.options.url = false;
          }
        }
      }
    }
    return config;
  },
};

export default nextConfig;
