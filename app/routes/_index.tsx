import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    {
      name: "description",
      content: "Welcome to Remix on Cloudflare!",
    },
    { property: "og:title", content: "Remix + Cloudflare Pages + Vercel OG Image" },
    { property: "og:description", content: "Welcome to Remix on Cloudflare!" },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://pages-remix-vercel-og-sample.pages.dev/" },
    { property: "og:image", content: "https://pages-remix-vercel-og-sample.pages.dev/og-image/awesome-slug.png"},
    { name: "twitter:card", content: "summary_large_image" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix on Cloudflare</h1>
      <ul>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://developers.cloudflare.com/pages/framework-guides/deploy-a-remix-site/"
            rel="noreferrer"
          >
            Cloudflare Pages Docs - Remix guide
          </a>
        </li>
      </ul>
    </div>
  );
}
