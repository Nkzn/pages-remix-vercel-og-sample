import { ImageResponse } from "@cloudflare/pages-plugin-vercel-og/api";

export const onRequest: PagesFunction<Env> = async ({ params }) => {
  const slug = params.slug;
  console.log('onRequest', 'slug', slug);

  return new ImageResponse(
    <div style={{ display: "flex" }}>Hello, world!</div>,
    {
      width: 1200,
      height: 630,
    }
  );
};